export interface Projeto {
  nome: string;
  url: string;
  contexto: string;
  estilo: string;
  problema: string;
  solucao: string[];
  /** PENDENTE (decisão #5) — preencha quando tiver número real.
   *  Enquanto for null, o card simplesmente não renderiza a linha. */
  resultado: string | null;
}

export const projetos: Projeto[] = [
  {
    nome: 'Urban Fade',
    url: 'https://urban-fade-three.vercel.app/',
    contexto: 'Landing page para barbearia com foco em agendamento via WhatsApp.',
    estilo: 'Urbano · Direto',
    problema:
      'Agendamento só por telefone, sem presença digital e sem canal direto com o cliente.',
    solucao: [
      'Página única com CTA de WhatsApp fixo e horários visíveis sem scroll.',
      'Identidade urbana construída do zero — nenhum template de mercado.',
      'Carregamento otimizado para 4G, sem biblioteca de animação pesada.',
    ],
    resultado: null,
  },
  {
    nome: 'The Gentleman',
    url: 'https://barb-the-gentleman.vercel.app/',
    contexto: 'Landing page para barbearia premium.',
    estilo: 'Premium · Ritualístico',
    problema:
      'Serviço de ticket alto que precisava comunicar valor antes do primeiro contato.',
    solucao: [
      'Hierarquia visual que apresenta o ritual de atendimento antes do preço.',
      'Tipografia e espaçamento reforçando posicionamento premium.',
      'Fluxo de contato direto, sem formulário intermediário.',
    ],
    resultado: null,
  },
  {
    nome: 'DaL Barber',
    url: 'https://lp-dalbarber.vercel.app/',
    contexto: 'Landing page para barbearia acessível.',
    estilo: 'Acessível · Familiar',
    problema:
      'Público de bairro que precisa entender rápido o que é oferecido e quanto custa.',
    solucao: [
      'Estrutura objetiva: serviço, preço e contato na primeira dobra.',
      'Linguagem visual calorosa, sem parecer corporativo.',
      'Publicação estática — custo de hospedagem próximo de zero.',
    ],
    resultado: null,
  },
];