import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { site } from './src/config/site.js';
import { gerarLinkWhatsApp } from './src/utils/whatsapp.js';
import { capa, gerarSrcset } from './src/utils/imagens.js';

const URL_PLACEHOLDER = 'https://www.seudominio.com.br';

const pagina = (caminho) => fileURLToPath(new URL(caminho, import.meta.url));

// Ordem: VITE_SITE_URL (.env ou painel) → domínio de produção informado pela Vercel no build → placeholder.
function resolverSiteUrl(env) {
  const dominioVercel = env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : '';
  const url = (env.VITE_SITE_URL || dominioVercel).trim().replace(/\/+$/, '');
  if (/^https?:\/\//.test(url)) return url;
  return URL_PLACEHOLDER;
}

function dadosEstruturados(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${siteUrl}/#hostel`,
    name: site.nome,
    description: site.seo.descricao,
    url: `${siteUrl}/`,
    image: `${siteUrl}${site.seo.imagem}`,
    telephone: site.telefone.e164,
    priceRange: `R$ ${site.precoApartir}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.endereco.logradouro,
      addressLocality: site.endereco.cidade,
      addressRegion: site.endereco.estado,
      postalCode: site.endereco.cep,
      addressCountry: 'BR',
    },
    sameAs: [site.instagram.url],
  };
}

// Preenche os placeholders dos HTMLs, injeta dados estruturados + preload da capa na home
// e gera sitemap.xml e robots.txt com o domínio real no build.
function seoPlugin(env) {
  const siteUrl = resolverSiteUrl(env);
  const verificacaoGoogle = (env.VITE_GOOGLE_SITE_VERIFICATION || '').trim();

  return {
    name: 'hostel-jk-seo',

    buildStart() {
      if (siteUrl === URL_PLACEHOLDER) {
        this.warn(
          `VITE_SITE_URL não definida: canonical, og:url, sitemap.xml e robots.txt vão usar ${URL_PLACEHOLDER}. ` +
            'Defina o domínio real no .env ou no painel da hospedagem antes de publicar.'
        );
      }
    },

    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const saida = html
          .replaceAll('%SITE_URL%', siteUrl)
          .replaceAll('%WHATSAPP_URL%', gerarLinkWhatsApp().replaceAll('&', '&amp;'));

        const tags = [];

        if (verificacaoGoogle) {
          tags.push({
            tag: 'meta',
            attrs: { name: 'google-site-verification', content: verificacaoGoogle },
            injectTo: 'head',
          });
        }

        if (ctx.path === '/index.html') {
          tags.push(
            {
              tag: 'link',
              attrs: {
                rel: 'preload',
                as: 'image',
                type: 'image/avif',
                media: capa.mediaRetrato,
                imagesrcset: gerarSrcset(capa.fotoRetrato, 'avif'),
                imagesizes: capa.sizesRetrato,
                fetchpriority: 'high',
              },
              injectTo: 'head',
            },
            {
              tag: 'link',
              attrs: {
                rel: 'preload',
                as: 'image',
                type: 'image/avif',
                media: `not all and ${capa.mediaRetrato}`,
                imagesrcset: gerarSrcset(capa.foto, 'avif'),
                imagesizes: capa.sizes,
                fetchpriority: 'high',
              },
              injectTo: 'head',
            },
            {
              tag: 'script',
              attrs: { type: 'application/ld+json' },
              children: JSON.stringify(dadosEstruturados(siteUrl)),
              injectTo: 'head',
            }
          );
        }

        return { html: saida, tags };
      },
    },

    generateBundle() {
      const hoje = new Date().toISOString().slice(0, 10);
      const urls = Object.values(site.paginas)
        .map((caminho) => `  <url>\n    <loc>${siteUrl}${caminho}</loc>\n    <lastmod>${hoje}</lastmod>\n  </url>`)
        .join('\n');

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // 'mpa': rotas inexistentes respondem 404 (com a 404.html) em vez de cair no index.html.
    appType: 'mpa',
    plugins: [react(), seoPlugin(env)],
    build: {
      rollupOptions: {
        input: {
          home: pagina('./index.html'),
          privacidade: pagina('./politica-de-privacidade/index.html'),
          404: pagina('./404.html'),
          500: pagina('./500.html'),
        },
      },
    },
  };
});
