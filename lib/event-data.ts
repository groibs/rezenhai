export const categories = ['🥩 Churrasco', '🎂 Aniversário', '🪩 Karaokê', '🎲 Jogos', '🍝 Jantar'];

export const sampleEvent = {
  title: 'Churras dos amigos',
  organizer: 'Bia',
  dateShort: 'Sáb, 27/07',
  dateLong: 'Sábado, 27 de julho',
  time: '19h',
  place: 'Casa da Bia',
  address: 'Rua das Palmeiras, 128 · Vila Madalena',
  description: 'Chega junto pra uma resenha leve, carne na brasa e playlist sem vergonha.',
  pix: {
    label: 'Pix da resenha',
    value: 'R$ 50',
    key: 'churras@rezenhai.app',
  },
  stats: [
    { label: 'Confirmados', value: '14', tone: 'lima' },
    { label: 'Talvez', value: '3', tone: 'neutral' },
    { label: 'Pix pago', value: '8', tone: 'neutral' },
    { label: 'Itens', value: '5/8', tone: 'neutral' },
  ],
  guests: [
    { name: 'Mari', status: 'Eu colo', paid: true },
    { name: 'Léo', status: 'Eu colo', paid: true },
    { name: 'Gui', status: 'Talvez', paid: false },
    { name: 'Nina', status: 'Eu colo', paid: false },
  ],
  checklist: [
    { item: 'Bebida', by: 'Mari', taken: true },
    { item: 'Som / caixa', by: '', taken: false },
    { item: 'Carvão', by: 'Léo', taken: true },
    { item: 'Gelo', by: 'Bia', taken: true },
    { item: 'Sobremesa', by: '', taken: false },
  ],
};

export const features = [
  'Página do convite pronta pra compartilhar',
  'Confirmação de presença sem baixar app',
  'Pix manual assistido para organizar contribuição',
  'Checklist para ninguém esquecer gelo, som ou sobremesa',
  'Fotos da resenha reunidas no mesmo lugar',
];
