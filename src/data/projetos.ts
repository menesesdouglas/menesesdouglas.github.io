import urbanDesktop from '../assets/projetos/urban-fade-desktop.png';
import urbanMobile from '../assets/projetos/urban-fade-mobile.png';
import gentlemanDesktop from '../assets/projetos/the-gentleman-desktop.png';
import gentlemanMobile from '../assets/projetos/the-gentleman-mobile.png';
import dalBarberDesktop from '../assets/projetos/dal-barber-desktop.png';
import dalBarberMobile from '../assets/projetos/dal-barber-mobile.png';
import ergoVitalDesktop from '../assets/projetos/ergovital-desktop.png';
import ergoVitalMobile from '../assets/projetos/ergovital-mobile.png';

export interface Projeto {
  nome: string;
  url: string;
  contexto: string;
  estilo: string;
  imagemDesktop: ImageMetadata;
  imagemMobile: ImageMetadata;
  problema: string;
  solucao: string[];
  /** Preencha quando tiver número real. Enquanto `null`, o card omite. */
  resultado: string | null;
}

export const projetos: Projeto[] = [
  {
    nome: 'Urban Fade',
    url: 'https://urban-fade-three.vercel.app/',
    contexto: 'Landing page para barbearia com foco em agendamento via WhatsApp.',
    estilo: 'Urbano · Direto',
    imagemDesktop: urbanDesktop,
    imagemMobile: urbanMobile,
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
    imagemDesktop: gentlemanDesktop,
    imagemMobile: gentlemanMobile,
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
    imagemDesktop: dalBarberDesktop,
    imagemMobile: dalBarberMobile,
    problema:
      'Público de bairro que precisa entender rápido o que é oferecido e quanto custa.',
    solucao: [
      'Estrutura objetiva: serviço, preço e contato na primeira dobra.',
      'Linguagem visual calorosa, sem parecer corporativo.',
      'Publicação estática — custo de hospedagem próximo de zero.',
    ],
    resultado: null,
  },
  {
    nome: 'ErgoVital',
    url: 'https://ergovital.vercel.app/',
    contexto:
      'Landing page B2B para consultoria em ergonomia corporativa e conformidade com a NR-17.',
    estilo: 'Técnico · Confiável',
    imagemDesktop: ergoVitalDesktop,
    imagemMobile: ergoVitalMobile,
    problema:
      'Empresas em modelo híbrido e home office precisam de avaliação ergonômica conforme a NR-17, mas auditorias presenciais são caras, lentas e interrompem a operação.',
    solucao: [
      'Programa remoto de três etapas: diagnóstico, laudo e acompanhamento — sem visita obrigatória.',
      'Estrutura de página orientada a objeções: validade legal do laudo, prazo de 48h e ausência de instalação de software.',
      'Copy técnica e direta que traduz a NR-17 em um processo compreensível para gestores, com contato via WhatsApp sem formulário intermediário.',
    ],
    resultado: null,
  },
];