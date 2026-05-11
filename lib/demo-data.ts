export const demoEvent = {
  slug: 'churras-dos-amigos',
  title: 'Churras dos amigos',
  date: 'Sáb, 27/07',
  time: '19h30',
  local: 'Laje da Bia',
  address: 'Rua das Palmeiras, 128 · Vila Madalena',
  contribution: 'R$ 50',
  organizer: 'Léo',
  confirmed: 14,
  description: 'Chega junto pra uma resenha leve, carne na brasa e playlist sem vergonha.',
  pixKey: 'churras@rezenhai.app',
};

export const guests = [
  { name: 'Mari', status: 'Eu colo', pix: 'Pix marcado', item: 'Bebida' },
  { name: 'João', status: 'Talvez', pix: 'Pix pendente', item: '' },
  { name: 'Bia', status: 'Eu colo', pix: 'Pix marcado', item: 'Pão de alho' },
  { name: 'Rafa', status: 'Eu colo', pix: 'Pix pendente', item: 'Gelo' },
  { name: 'Léo', status: 'Organizador', pix: 'Organiza', item: 'Carvão' },
];

export const checklist = ['Gelo', 'Carvão', 'Pão de alho', 'Bebida', 'Descartáveis', 'Som', 'Sobremesa'];

export const templates = [
  { name: 'Holo', emoji: '🪩', className: 'bg-holo text-laje-950' },
  { name: 'Brasa', emoji: '🔥', className: 'bg-brasa-500 text-creme-50' },
  { name: 'Noite', emoji: '🌙', className: 'bg-laje-950 text-creme-50' },
  { name: 'Papel', emoji: '✍️', className: 'bg-papel text-laje-950' },
  { name: 'Laje', emoji: '🏙️', className: 'bg-lima-500 text-laje-950' },
  { name: 'Praia', emoji: '🏖️', className: 'bg-cyan-100 text-laje-950' },
];

export const roleTypes = ['🥩 Churrasco', '🎂 Aniversário', '🪩 Resenha', '🏠 Casa aberta', '🎲 Jogos', '🎤 Karaokê'];

export const exampleCards = [
  { title: 'Churrasco', href: '/churrascos', tag: '🥩 Brasa e galera' },
  { title: 'Aniversário', href: '/aniversarios', tag: '🎂 Bolo e parabéns' },
  { title: 'Resenha', href: '/criar/capa', tag: '🪩 Sem roteiro' },
  { title: 'Casa aberta', href: '/criar/capa', tag: '🏠 Chega junto' },
  { title: 'Jogos', href: '/criar/capa', tag: '🎲 Mesa cheia' },
  { title: 'Karaokê', href: '/criar/capa', tag: '🎤 Microfone livre' },
];

export const mockPhotos = ['Brasa acesa', 'Mesa montada', 'Galera na laje', 'Pão de alho campeão'];

export const dashboardStats = [
  ['Confirmados', '14'],
  ['Talvez', '3'],
  ['Não vão', '2'],
  ['Pendentes', '9'],
  ['Pix marcados', '8'],
  ['Itens', '5/7'],
  ['Fotos', '4'],
];
