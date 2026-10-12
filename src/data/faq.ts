export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export const faq: FaqItem[] = [
  {
    pergunta: 'Quanto custa uma LP, um site ou um software?',
    resposta:
      'Landing page: a partir de R$ 300, dependendo de seções e integrações. Site institucional: entre R$ 1.200 e R$ 3.000, conforme o número de páginas. Software sob medida: começa em R$ 5.000 e depende do escopo — nesse caso eu levanto os requisitos antes de fechar qualquer valor. O orçamento é fechado antes de começar. Não existe cobrança surpresa no meio do projeto.',
  },
  {
    pergunta: 'Quanto tempo leva?',
    resposta:
      'Landing page: 3 a 7 dias úteis. Site institucional: 2 a 4 semanas. Software sob medida: entrego em etapas, com prazo definido na proposta. O que mais atrasa projeto não é código — é conteúdo e feedback. Se você tiver o material pronto, o prazo encurta bastante.',
  },
  {
    pergunta: 'Você faz manutenção depois?',
    resposta:
      'Sim. Os 30 dias seguintes à entrega incluem ajustes sem custo adicional. Depois disso, você escolhe entre um pacote mensal ou manutenção por demanda. Para softwares sob medida, é possível contratar manutenção contínua, com evolução do sistema e suporte. A única exceção é para landing pages, que são publicadas em hospedagem gratuita e não têm painel de edição — nesse caso, a manutenção é feita por mim e gratuitamente.',
  },
  {
    pergunta: 'Como funciona o processo?',
    resposta:
      'Conversa inicial de 30 minutos para entender o problema. Depois envio proposta com escopo, prazo e valor fechados. Aceito, começo pelo esqueleto e te mostro funcionando antes de polir. Entrega, ajustes e publicação. Pagamento em duas parcelas: 60% na assinatura e 40% na entrega.',
  },
  {
    pergunta: 'Você atende fora da sua cidade?',
    resposta:
      'Sim. Trabalho remoto com clientes de qualquer lugar do Brasil. Reuniões por vídeo e acompanhamento por WhatsApp e e-mail.',
  },
  {
    pergunta: 'O que é "software sob medida" na prática?',
    resposta:
      'É um sistema feito para o SEU processo, não um processo que você precisa adaptar a um sistema. Exemplos: controle de pedidos e comandas, agendamento com histórico de clientes, dashboard que junta dados de planilhas espalhadas, automação de orçamento recorrente. Se a sua equipe perde tempo com algo repetitivo, provavelmente dá pra resolver com código.',
  },
  {
    pergunta: 'Por que contratar você e não uma agência?',
    resposta:
      'Porque você fala direto com quem escreve o código. Não tem gerente de conta, não tem repasse para terceirizado, não tem template comprado sendo revendido como projeto. Isso significa resposta mais rápida, ajuste mais barato e um site que ninguém mais tem igual. Em troca, você não vai ter uma equipe de 12 pessoas na reunião — vai ter uma pessoa que resolve.',
  },
];