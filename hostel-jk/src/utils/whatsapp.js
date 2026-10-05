import { site } from '../config/site';

export const MENSAGEM_PADRAO = 'Olá! Vim pelo site e quero reservar um quarto no Hostel JK.';

export function gerarLinkWhatsApp(mensagem = MENSAGEM_PADRAO) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${site.whatsapp.numero}?text=${texto}`;
}

export function mensagemParaQuarto(nomeQuarto) {
  return `Olá! Tenho interesse no ${nomeQuarto}.`;
}

export function mensagemParaDiaria(hospedes, valor) {
  return `Olá! Vim pelo site e quero reservar para ${hospedes} no Hostel JK (diária de R$ ${valor}).`;
}

export function mensagemParaGrupo(pessoas) {
  return `Olá! Vim pelo site e quero falar com o gerente sobre hospedagem para um grupo de ${pessoas} ou mais pessoas.`;
}
