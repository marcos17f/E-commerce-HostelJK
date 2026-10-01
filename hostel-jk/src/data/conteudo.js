import {
  FaMugHot,
  FaWifi,
  FaSnowflake,
  FaSquareParking,
  FaShirt,
  FaUtensils,
  FaBriefcase,
  FaGraduationCap,
  FaSuitcaseRolling,
  FaBroom,
  FaKey,
  FaBed,
  FaShieldHalved,
  FaTv,
  FaHospital,
  FaBusSimple,
  FaPlaneDeparture,
} from 'react-icons/fa6';
import { site } from '../config/site.js';

export const beneficios = [
  { id: 'cafe', icone: FaMugHot, titulo: 'Café da manhã' },
  { id: 'wifi', icone: FaWifi, titulo: 'Wi-Fi grátis' },
  { id: 'ar', icone: FaSnowflake, titulo: 'Ar-condicionado' },
  { id: 'estacionamento', icone: FaSquareParking, titulo: 'Estacionamento' },
  { id: 'lavanderia', icone: FaShirt, titulo: 'Lavanderia' },
  { id: 'cozinha', icone: FaUtensils, titulo: 'Cozinha' },
];

export const publicos = [
  {
    id: 'trabalho',
    icone: FaBriefcase,
    titulo: 'A trabalho',
    descricao: 'Chegou pra resolver uma parada na cidade? Aqui você descansa de verdade pra render no outro dia.',
  },
  {
    id: 'estudantes',
    icone: FaGraduationCap,
    titulo: 'Estudantes UFPI/UESPI',
    descricao: 'Perto das faculdades, com preço que cabe no bolso de universitário e ambiente tranquilo pra estudar.',
  },
  {
    id: 'passagem',
    icone: FaSuitcaseRolling,
    titulo: 'De passagem',
    descricao: 'Só de passagem por Bom Jesus? Um lugar seguro e prático pra dormir bem e seguir viagem.',
  },
];

export const comodidades = [
  { id: 'wifi', icone: FaWifi, titulo: 'Wi-Fi de alta velocidade', descricao: 'Sinal bom em todos os ambientes.' },
  { id: 'ar', icone: FaSnowflake, titulo: 'Ar-condicionado', descricao: 'Em todos os quartos, sem barulho.' },
  { id: 'cafe', icone: FaMugHot, titulo: 'Café da manhã', descricao: 'Incluso na diária, pra começar bem o dia.' },
  { id: 'estacionamento', icone: FaSquareParking, titulo: 'Estacionamento', descricao: 'Vaga privativa e segura.' },
  { id: 'lavanderia', icone: FaShirt, titulo: 'Lavanderia', descricao: 'Lave e seque suas roupas sem sair.' },
  { id: 'cozinha', icone: FaUtensils, titulo: 'Cozinha compartilhada', descricao: 'Espaço equipado pra usar à vontade.' },
  { id: 'limpeza', icone: FaBroom, titulo: 'Limpeza diária', descricao: 'Quartos e áreas comuns sempre em ordem.' },
  { id: 'recepcao', icone: FaKey, titulo: 'Recepção 24h', descricao: 'Check-in e check-out sem complicação.' },
  { id: 'roupa-cama', icone: FaBed, titulo: 'Roupa de cama', descricao: 'Lençóis e toalhas incluídos.' },
  { id: 'seguranca', icone: FaShieldHalved, titulo: 'Ambiente seguro', descricao: 'Portaria e monitoramento.' },
  { id: 'tv', icone: FaTv, titulo: 'TV nas áreas comuns', descricao: 'Pra relaxar depois do dia.' },
];

export const distancias = [
  { id: 'hospital', icone: FaHospital, titulo: 'Hospital Regional', distancia: '1,2 km', tempo: '~2 min' },
  { id: 'uespi', icone: FaGraduationCap, titulo: 'UESPI', distancia: '1,5 km', tempo: '~2 min' },
  { id: 'rodoviaria', icone: FaBusSimple, titulo: 'Rodoviária', distancia: '1,4 km', tempo: '~3 min' },
  { id: 'ufpi', icone: FaGraduationCap, titulo: 'UFPI', distancia: '3,7 km', tempo: '~7 min' },
  { id: 'aeroporto', icone: FaPlaneDeparture, titulo: 'Aeroporto Regional', distancia: '2,9 km', tempo: '~5 min' },
];

export const faq = [
  {
    id: 'individual',
    pergunta: 'Tem quarto individual?',
    resposta: `Tem sim! Nosso quarto individual tem cama de casal, penteadeira e cortina, com diária a partir de R$ ${site.precoApartir}.`,
  },
  {
    id: 'cafe',
    pergunta: 'Tem café da manhã?',
    resposta: 'Com certeza. O café da manhã está incluso em todas as diárias, pra você começar o dia com energia.',
  },
  {
    id: 'estacionamento',
    pergunta: 'Tem estacionamento?',
    resposta: 'Sim, temos estacionamento privativo e seguro pra quem chega de carro ou moto.',
  },
  {
    id: 'wifi-ar',
    pergunta: 'Tem Wi-Fi e ar-condicionado?',
    resposta: 'Todos os quartos têm Wi-Fi de alta velocidade e ar-condicionado, sem custo extra.',
  },
  {
    id: 'lavanderia',
    pergunta: 'Dá para lavar roupa?',
    resposta: 'Dá sim, temos lavanderia disponível pra você chegar e sair sempre com roupa limpa.',
  },
  {
    id: 'reserva',
    pergunta: 'Como faço a reserva?',
    resposta: 'É bem simples: clica no botão do WhatsApp aqui no site e a gente confirma sua estadia rapidinho.',
  },
];

export const galeria = [
  { id: 'g01', foto: '/images/fachada-02.jpg', legenda: 'Fachada' },
  { id: 'g02', foto: '/images/area-comum-01.jpg', legenda: 'Área comum' },
  { id: 'g03', foto: '/images/quarto-compartilhado-01.jpg', legenda: 'Quarto compartilhado' },
  { id: 'g04', foto: '/images/beliche-01.jpg', legenda: 'Beliches' },
  { id: 'g05', foto: '/images/quarto-individual-01.jpg', legenda: 'Quarto individual' },
  { id: 'g06', foto: '/images/banheiro-01.jpg', legenda: 'Banheiro' },
  { id: 'g07', foto: '/images/patio-01.jpg', legenda: 'Área externa' },
  { id: 'g08', foto: '/images/area-comum-02.jpg', legenda: 'Sala de estar' },
  { id: 'g09', foto: '/images/entrada-01.jpg', legenda: 'Entrada' },
  { id: 'g10', foto: '/images/fachada-03.jpg', legenda: 'Detalhe da fachada' },
  { id: 'g11', foto: '/images/area-comum-03.jpg', legenda: 'Espaço compartilhado' },
  { id: 'g12', foto: '/images/beliche-03.jpg', legenda: 'Detalhe do beliche' },
];
