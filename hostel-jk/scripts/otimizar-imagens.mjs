// Gera as versões otimizadas (AVIF + WebP, em várias larguras) das fotos de public/images,
// a imagem de compartilhamento (Open Graph 1200x630) e os ícones do site.
// Rode com `npm run images` sempre que trocar ou adicionar uma foto.
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pastaOrigem = path.join(raiz, 'public', 'images');
const pastaDestino = path.join(pastaOrigem, 'otimizadas');
const arquivoManifesto = path.join(raiz, 'src', 'data', 'imagens.json');

const LARGURAS = [480, 800, 1200, 1600];
const FOTO_OG = 'fachada-01.jpg';

// Recortes extras (direção de arte): a capa em pé para celulares, que só mostram o meio da foto.
const RECORTES = [{ origem: 'fachada-01.jpg', nome: 'fachada-01-retrato', proporcao: 3 / 4 }];

function escolherLarguras(larguraOriginal) {
  const larguras = LARGURAS.filter((largura) => largura < larguraOriginal);
  const maior = larguras[larguras.length - 1] ?? 0;
  if (larguraOriginal - maior > 200 || larguras.length === 0) larguras.push(Math.min(larguraOriginal, 2000));
  return larguras;
}

async function gerarVariantes(imagem, nome, larguras) {
  for (const largura of larguras) {
    const base = imagem.clone().resize({ width: largura, withoutEnlargement: true });
    await base.clone().avif({ quality: 50, effort: 5 }).toFile(path.join(pastaDestino, `${nome}-${largura}.avif`));
    await base.clone().webp({ quality: 74, effort: 5 }).toFile(path.join(pastaDestino, `${nome}-${largura}.webp`));
  }
}

async function gerarFotos() {
  await rm(pastaDestino, { recursive: true, force: true });
  await mkdir(pastaDestino, { recursive: true });

  const arquivos = (await readdir(pastaOrigem)).filter((nome) => /\.(jpe?g|png)$/i.test(nome)).sort();
  const manifesto = {};

  for (const arquivo of arquivos) {
    const origem = path.join(pastaOrigem, arquivo);
    const nome = path.parse(arquivo).name;
    const { width, height } = await sharp(origem).rotate().metadata();
    const larguras = escolherLarguras(width);

    await gerarVariantes(sharp(origem).rotate(), nome, larguras);
    manifesto[nome] = { largura: width, altura: height, larguras };
    console.log(`✔ ${arquivo} (${width}x${height}) → ${larguras.join(', ')}`);
  }

  for (const recorte of RECORTES) {
    const origem = path.join(pastaOrigem, recorte.origem);
    const { height } = await sharp(origem).rotate().metadata();
    const largura = Math.round(height * recorte.proporcao);
    const buffer = await sharp(origem)
      .rotate()
      .resize({ width: largura, height, fit: 'cover', position: 'centre' })
      .toBuffer();
    const larguras = escolherLarguras(largura);

    await gerarVariantes(sharp(buffer), recorte.nome, larguras);
    manifesto[recorte.nome] = { largura, altura: height, larguras };
    console.log(`✔ ${recorte.nome} (${largura}x${height}) → ${larguras.join(', ')}`);
  }

  await writeFile(arquivoManifesto, `${JSON.stringify(manifesto, null, 2)}\n`);
}

async function gerarImagemOg() {
  await sharp(path.join(pastaOrigem, FOTO_OG))
    .rotate()
    .resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(raiz, 'public', 'og-image.jpg'));
  console.log('✔ og-image.jpg (1200x630)');
}

async function gerarIcones() {
  const svg = path.join(raiz, 'public', 'favicon.svg');
  const icones = [
    ['favicon-32.png', 32],
    ['apple-touch-icon.png', 180],
    ['icon-192.png', 192],
    ['icon-512.png', 512],
  ];

  for (const [arquivo, tamanho] of icones) {
    await sharp(svg, { density: 384 }).resize(tamanho, tamanho).png().toFile(path.join(raiz, 'public', arquivo));
  }
  console.log('✔ ícones (favicon-32, apple-touch-icon, icon-192, icon-512)');
}

await gerarFotos();
await gerarImagemOg();
await gerarIcones();
