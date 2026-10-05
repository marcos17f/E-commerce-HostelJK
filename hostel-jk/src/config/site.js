export const site = {
  nome: 'Hostel JK',
  slogan: 'SEU MELHOR LUGAR, TODOS OS DIAS',
  endereco: {
    logradouro: 'Av. Getúlio Vargas, 340 – Centro',
    cidade: 'Bom Jesus',
    estado: 'PI',
    cep: '64420-000',
    enderecoCompleto: 'Av. Getúlio Vargas, 340 – Centro, Bom Jesus – PI',
  },
  telefone: {
    exibicao: '(89) 98132-1178',
    e164: '+5589981321178',
  },
  whatsapp: {
    numero: '5589981321178',
  },
  instagram: {
    usuario: '@hosteljk_bj',
    url: 'https://instagram.com/hosteljk_bj',
  },
  precoApartir: 140,

  // Dados do responsável pelo site, exibidos na Política de Privacidade (LGPD).
  // Preencha o que tiver; campos vazios simplesmente não aparecem.
  empresa: {
    razaoSocial: '',
    cnpj: '',
    emailPrivacidade: '',
  },

  seo: {
    titulo: 'Hostel JK | Hospedagem no Centro de Bom Jesus – PI',
    descricao:
      'Hostel JK: hospedagem acolhedora no Centro de Bom Jesus – PI. Quartos individuais, compartilhados e com beliche, café da manhã, Wi-Fi grátis e ar-condicionado.',
    imagem: '/og-image.jpg',
  },

  // Páginas indexáveis (entram no sitemap.xml gerado no build).
  paginas: {
    home: '/',
    privacidade: '/politica-de-privacidade/',
  },

  menu: [
    { label: 'O Hostel', href: '/#o-hostel' },
    { label: 'Quartos', href: '/#quartos' },
    { label: 'Preços', href: '/#precos' },
    { label: 'Comodidades', href: '/#comodidades' },
    { label: 'Onde fica', href: '/#onde-fica' },
    { label: 'Dúvidas', href: '/#duvidas' },
  ],

  credito: {
    texto: 'Desenvolvido por MarcosLab',
  },
};
