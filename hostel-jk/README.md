# Hostel JK

Site institucional do **Hostel JK**, hospedagem no Centro de Bom Jesus – PI. Visual escuro, premium e chamativo, inspirado no Instagram do hostel ([@hosteljk_bj](https://instagram.com/hosteljk_bj)).

## Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- JavaScript + JSX (sem TypeScript)
- CSS puro com variáveis e metodologia BEM (sem Tailwind, sem Sass)
- [react-icons](https://react-icons.github.io/react-icons/) para os ícones de linha

## Estrutura de pastas

```
hostel-jk/
├── index.html
├── vite.config.js
├── public/images/          # fotos do hostel (fachada, quartos, galeria)
└── src/
    ├── main.jsx            # ponto de entrada
    ├── App.jsx             # composição das seções da página
    ├── config/
    │   └── site.js         # nome, endereço, telefone, WhatsApp, Instagram, SEO, menu
    ├── data/
    │   ├── quartos.js       # catálogo de quartos (descrições, fotos)
    │   └── conteudo.js      # benefícios, públicos, comodidades, distâncias, FAQ, galeria
    ├── utils/
    │   └── whatsapp.js      # geração de links wa.me
    ├── hooks/
    │   └── useReveal.js     # animação de entrada via IntersectionObserver
    ├── styles/
    │   ├── global.css       # variáveis, reset, tipografia, animações
    │   └── components.css   # estilos de todos os componentes (BEM)
    └── components/
        ├── layout/          # Topbar, Header, NavMenu, MobileMenu, Footer, FloatingWhatsApp
        ├── ui/               # Container, Button, WhatsAppButton, SectionTitle, ScriptText,
        │                     # PriceSeal, Icon, Logo, Card, Badge, Reveal
        ├── sections/         # Hero, Benefits, ForWhom, Rooms, Amenities, Location,
        │                     # Gallery, Faq, FinalCta
        └── common/           # BenefitItem, AudienceCard, RoomCard, RoomFeatureList,
                              # RoomGallery, AmenityCard, DistanceCard, MapEmbed, GalleryItem,
                              # Lightbox, FaqItem, InstagramCta, ScrollToTopButton,
                              # DiagonalStripe, SocialLinks, ContactInfo
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse o endereço mostrado no terminal (geralmente `http://localhost:5173`).

Para gerar a build de produção:

```bash
npm run build
npm run preview   # opcional, serve a build localmente
```

## Como trocar preços e textos

Nenhum texto, preço ou telefone está escrito dentro dos componentes — tudo vem de `src/config` e `src/data`:

- **`src/config/site.js`** — nome do hostel, endereço, telefone, número do WhatsApp, Instagram, textos de SEO e itens do menu.
- **`src/data/quartos.js`** — cada quarto (id, nome, tipo, descrição, itens/comodidades e fotos). Edite o array `quartos` para mudar descrições ou adicionar/remover acomodações.
- **`src/data/precos.js`** — tabela de diárias por número de hóspedes (seção "Preços"). Edite o array `diarias` para mudar os valores.
- **`src/data/conteudo.js`** — benefícios da faixa inicial, públicos-alvo, comodidades, distâncias de pontos de referência, perguntas do FAQ e itens da galeria.

Depois de editar esses arquivos, basta salvar — o Vite recarrega a página automaticamente durante o `npm run dev`.

### Trocar as fotos

As fotos reais do hostel já estão em `public/images/`, organizadas por assunto (`fachada-01.jpg`, `quarto-individual-01.jpg`, `quarto-compartilhado-01.jpg`, `beliche-01.jpg`, `area-comum-01.jpg`, `banheiro-01.jpg`, `patio-01.jpg`, `entrada-01.jpg`, etc.). Para trocar alguma, substitua o arquivo mantendo o mesmo nome, ou atualize os caminhos em `quartos.js` / `conteudo.js` se usar nomes diferentes.

Depois de trocar ou adicionar uma foto, rode:

```bash
npm run images
```

Esse comando recria as versões leves (AVIF/WebP em várias larguras) em `public/images/otimizadas/`, o arquivo `src/data/imagens.json` com as dimensões, a imagem de compartilhamento (`public/og-image.jpg`, 1200x630) e os ícones do site.

## Páginas

| Endereço | Arquivo | Observação |
| --- | --- | --- |
| `/` | `index.html` | Home |
| `/politica-de-privacidade/` | `politica-de-privacidade/index.html` | Política de Privacidade e Cookies (LGPD) |
| qualquer rota inexistente | `404.html` | Página 404 personalizada |
| — | `500.html` | Página de erro do servidor (o app também mostra uma tela de erro se quebrar) |

O `sitemap.xml` e o `robots.txt` são gerados no build com o domínio real (veja as variáveis abaixo).

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha. O `.env` não vai para o git.

| Variável | Para que serve |
| --- | --- |
| `VITE_SITE_URL` | Domínio público do site (canonical, og:url, sitemap, robots). Na Vercel é opcional. |
| `VITE_GA_MEASUREMENT_ID` | ID do Google Analytics 4. Só carrega depois que o visitante aceita os cookies. |
| `VITE_SENTRY_DSN` | Monitoramento de erros (Sentry). Só ativa em produção. |
| `VITE_GOOGLE_SITE_VERIFICATION` | Código de verificação do Google Search Console. |

O passo a passo de publicação (Analytics, Sentry, UptimeRobot, Search Console e testes no celular) está em [`PUBLICACAO.md`](./PUBLICACAO.md).

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Em <https://vercel.com/new>, importe o repositório. As configurações de build já estão em `vercel.json` (framework Vite, `npm run build`, saída em `dist`, cabeçalhos de segurança e cache), então não é preciso mudar nada na tela de importação.
3. Cadastre as variáveis de ambiente em **Project → Settings → Environment Variables** e refaça o deploy.
4. Em **Settings → Domains**, adicione o domínio próprio.

Cada `git push` na branch `main` gera um novo deploy de produção; outras branches geram deploys de prévia.

---

Desenvolvido por **MarcosLab**.
