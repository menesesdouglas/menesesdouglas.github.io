export type StatusProjeto = "em-dev" | "planejamento" | "concluido";

export interface DetalheSecao {
  titulo: string;
  paragrafos: string[];
}

export interface Projeto {
  slug: string;
  titulo: string;
  subtitulo: string;
  status: StatusProjeto;
  categoria: string;
  resumo: string;
  stack: string[];
  linkGithub: string | null;
  linkDemo: string | null;
  destaque: boolean;
  detalhes: DetalheSecao[];
}

export const projetos: Projeto[] = [
  {
    slug: "marcweb",
    titulo: "MarcWeb",
    subtitulo: "Sistema de Registro Eletrônico de Ponto",
    status: "em-dev",
    categoria: "Backend · Full-stack",
    resumo:
      "API REST em FastAPI + PostgreSQL com autenticação JWT stateless, migrações via Alembic e regras de integridade inspiradas na Portaria 671 do MTE. Frontend em React (Vite).",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "JWT", "SQLAlchemy", "Alembic"],
    linkGithub: "https://github.com/menesesdouglas/MarcWeb",
    linkDemo: null,
    destaque: true,
    detalhes: [
      {
        titulo: "Contexto",
        paragrafos: [
          "Sistemas de registro de ponto tradicionais falham em três frentes críticas: integridade de dados, auditabilidade e conformidade com a Portaria 671 do MTE — que exige timestamp gerado por equipamento independente do terminal do trabalhador.",
          "O MarcWeb é minha tentativa de endereçar essas três frentes com arquitetura limpa e segura desde o primeiro commit.",
        ],
      },
      {
        titulo: "Problema",
        paragrafos: [
          "Registros precisam ser imutáveis após a marcação; o timestamp deve vir do servidor (nunca do cliente); perfis de funcionário e administrador precisam de permissões claras; e toda ação relevante deve ser rastreável.",
          "Regra de ouro do projeto: regras de negócio não podem vazar para o frontend.",
        ],
      },
      {
        titulo: "Arquitetura",
        paragrafos: [
          "Backend em FastAPI servindo como única fonte de verdade, PostgreSQL com migrações versionadas via Alembic, ORM SQLAlchemy, autenticação JWT stateless e frontend SPA em React consumindo apenas endpoints autenticados.",
          "Decisões críticas: timestamp gerado exclusivamente pelo servidor, registros append-only (proibição de exclusão), senhas com hash bcrypt e separação de perfis validada no middleware.",
        ],
      },
      {
        titulo: "O que estou aprendendo",
        paragrafos: [
          "Este projeto tem sido meu principal laboratório de engenharia de software aplicada: modelagem relacional, autenticação segura, migrações e a disciplina de manter regras de negócio no backend mesmo quando é tentador deixar o frontend 'resolver'.",
        ],
      },
    ],
  },
  {
    slug: "prazzo",
    titulo: "Prazzo",
    subtitulo: "SaaS de Controle de Prazos de Documentos",
    status: "planejamento",
    categoria: "Backend · Full-stack",
    resumo:
      "SaaS para monitoramento de vencimentos de documentos, com arquitetura REST + SPA reaproveitada do MarcWeb: FastAPI, PostgreSQL, JWT e React. Recomeçado do zero após uma primeira tentativa que fugiu do escopo.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "JWT", "SQLAlchemy", "Alembic"],
    linkGithub: null,
    linkDemo: null,
    destaque: false,
    detalhes: [
      {
        titulo: "Contexto",
        paragrafos: [
          "Profissionais autônomos e pequenas empresas perdem prazos críticos de documentos — contratos, certidões, alvarás — por falta de um sistema centralizado de monitoramento e alerta. O Prazzo nasce como SaaS para resolver isso.",
          "Após uma primeira tentativa que saiu completamente do planejado, o projeto está sendo recomeçado do zero — agora com uma arquitetura deliberada e consolidada.",
        ],
      },
      {
        titulo: "Por que recomeçar",
        paragrafos: [
          "A versão inicial cresceu sem disciplina arquitetural: domínio misturado com controllers, lógica de prazos vazando para o frontend e testes impossíveis de escrever. Em vez de remendar, decidi recomeçar aplicando desde o dia zero os mesmos princípios que uso no MarcWeb.",
          "Essa decisão custou semanas de trabalho descartado — mas foi a escolha de engenharia correta. É mais valioso ter um sistema bem estruturado do que um sistema que 'funciona' e não pode evoluir.",
        ],
      },
      {
        titulo: "Arquitetura (reaproveitada do MarcWeb)",
        paragrafos: [
          "Como o MarcWeb já validou o stack e os padrões, o Prazzo reutiliza a mesma base arquitetural: API REST em FastAPI como única fonte de verdade, PostgreSQL com migrações via Alembic, ORM SQLAlchemy, autenticação JWT stateless e frontend SPA em React.",
          "O que muda é o domínio: em vez de registro de ponto, o núcleo é o cálculo de prazos e a geração de alertas proativos. Regras de vencimento ficam isoladas no backend, testáveis de forma independente.",
        ],
      },
      {
        titulo: "Escopo planejado",
        paragrafos: [
          "Cadastro de documentos com data de emissão e vencimento; categorização por tipo (contrato, certidão, licença); alertas configuráveis (7, 15, 30 dias antes); multi-usuário com isolamento por conta; dashboard consolidado de vencimentos próximos; API REST documentada com OpenAPI.",
          "Objetivo secundário: consolidar experiência com o stack que já uso, aprofundando em testes automatizados, containerização com Docker e deploy contínuo.",
        ],
      },
    ],
  },
  {
    slug: "dal-barber",
    titulo: "DaL Barber",
    subtitulo: "Landing page para barbearia",
    status: "concluido",
    categoria: "Frontend · Fundamentos",
    resumo:
      "Landing page responsiva para uma barbearia de pequeno porte. Primeiro projeto de ciclo completo — da ideia à publicação — focado em consolidar fundamentos de HTML, CSS, JavaScript e design responsivo.",
    stack: ["HTML", "CSS", "JavaScript"],
    linkGithub: null,
    linkDemo: null,
    destaque: false,
    detalhes: [
      {
        titulo: "Contexto",
        paragrafos: [
          "Uma barbearia de pequeno porte dependia exclusivamente de redes sociais e boca a boca para captar clientes. Faltava uma presença online organizada — um lugar único com informações, serviços, preços e contato.",
          "O DaL Barber foi meu primeiro projeto de ciclo completo: da conversa com o 'cliente' (nesse caso, um conhecido dono de barbearia) até a publicação do site.",
        ],
      },
      {
        titulo: "O que foi construído",
        paragrafos: [
          "Landing page estática com seções de apresentação, serviços oferecidos, galeria de trabalhos e canais de contato. Design responsivo pensado para uso no celular — que é de onde a maioria dos clientes chega.",
          "Stack intencionalmente mínima (HTML, CSS e JavaScript puros), escolhida para consolidar fundamentos antes de partir para frameworks.",
        ],
      },
      {
        titulo: "O que aprendi",
        paragrafos: [
          "Este projeto foi onde aprendi a pensar em ciclo completo: entender o problema antes do código, estruturar informação, aplicar design responsivo e publicar algo real.",
          "Também foi meu primeiro contato com a diferença entre 'site que funciona' e 'site que serve ao usuário' — hierarquia visual, contraste, tempo de carregamento e clareza de CTA.",
        ],
      },
      {
        titulo: "Evolução a partir daqui",
        paragrafos: [
          "O DaL Barber cumpriu o papel de me apresentar ao desenvolvimento web. Mas uma landing page estática tem teto técnico baixo: sem backend, sem autenticação, sem lógica de negócio complexa.",
          "Essa limitação foi exatamente o que me motivou a estudar backend e arquitetura — e o que me levou ao MarcWeb e ao Prazzo. Hoje olho para o DaL Barber como o ponto de partida da minha trajetória, não como o tipo de projeto que quero entregar daqui pra frente.",
        ],
      },
    ],
  },
];