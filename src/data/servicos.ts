export interface Servico {
  id: string;
  titulo: string;
  descricao: string;
  entregaveis: string[];
}

export const servicos: Servico[] = [
  {
    id: 'landing-pages',
    titulo: 'Landing Pages',
    descricao:
      'Páginas únicas, rápidas e focadas em conversão. Ideais para campanhas, lançamentos e negócios que precisam captar clientes com uma presença objetiva.',
    entregaveis: [
      'Design feito do zero para o seu negócio',
      'Otimizada para mobile e velocidade',
      'Integração com WhatsApp, formulários e analytics',
    ],
  },
  {
    id: 'sites-institucionais',
    titulo: 'Sites Institucionais',
    descricao:
      'Sites completos para empresas que querem marcar presença com profissionalismo na internet — com múltiplas páginas, identidade visual e conteúdo estruturado.',
    entregaveis: [
      'Estrutura personalizada por seção',
      'SEO técnico desde a base',
      'Painel para você mesmo atualizar (se quiser)',
    ],
  },
  {
    id: 'software-sob-medida',
    titulo: 'Software Sob Medida',
    descricao:
      'Sistemas e automações para resolver demandas específicas do seu negócio — do controle de pedidos a dashboards internos.',
    entregaveis: [
      'Levantamento de requisitos',
      'Desenvolvimento full-stack',
      'Manutenção e evolução contínua',
    ],
  },
];