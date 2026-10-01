import manifesto from '../data/imagens.json';

const PASTA_OTIMIZADAS = '/images/otimizadas';

function nomeDaFoto(foto) {
  return foto.split('/').pop().replace(/\.[a-z0-9]+$/i, '');
}

// Dimensões e larguras disponíveis de uma foto (geradas por `npm run images`).
export function dadosDaFoto(foto) {
  return manifesto[nomeDaFoto(foto)] ?? null;
}

export function gerarSrcset(foto, formato) {
  const dados = dadosDaFoto(foto);
  if (!dados) return undefined;

  const nome = nomeDaFoto(foto);
  return dados.larguras.map((largura) => `${PASTA_OTIMIZADAS}/${nome}-${largura}.${formato} ${largura}w`).join(', ');
}

// Capa (Hero): usada tanto no componente quanto no <link rel="preload"> do index.html.
export const capa = {
  foto: '/images/fachada-01.jpg',
  fotoRetrato: '/images/fachada-01-retrato.jpg',
  mediaRetrato: '(max-aspect-ratio: 3/4)',
  sizes: '(max-aspect-ratio: 16/9) 180vh, 100vw',
  sizesRetrato: '75vh',
};
