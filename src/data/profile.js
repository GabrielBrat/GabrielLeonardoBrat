export const profile = {
  name: "Gabriel Leonardo Bratfisch",
  role: "Suporte e Implantacao | Migrando para Desenvolvimento",
  location: "Navegantes, Santa Catarina, Brasil",
  email: "gabriel.bratfisch@gmail.com",
  phone: "+55 (47) 99999-9999",
  shortBio:
    "Trabalho com clientes no dia a dia, implantando sistemas e resolvendo problemas de operacao. Agora estou levando essa base para o desenvolvimento, com projetos praticos em React.",
  badge: "Transicao para dev | Pratica diaria",
  longBio: [
    "Minha rotina e atendimento direto, implantacao e suporte.",
    "Lido com incidente, ajuste de processo e alinhamento com time tecnico.",
    "Estou migrando para desenvolvimento e aplicando isso em projetos reais de estudo.",
  ],
  highlights: [
    "Atendimento direto ao cliente",
    "Implantacao de sistemas em operacao real",
    "Resolucao de problemas sob pressao",
    "Comunicacao clara com time tecnico e negocio",
  ],
  careerGoals:
    "Quero atuar como dev sem perder o que aprendi em operacao: entender o problema, priorizar o que importa e entregar algo que funcione na pratica.",
  links: {
    linkedin: "https://www.linkedin.com/in/gabriel-leonardo-bratfisch-5104b121b/",
    github: "https://github.com/GabrielBrat",
    cv: "/cv/Gabriel-Bratfisch-Curriculo-2026.pdf",
  },
};

export const stats = [
  {
    title: "4+ anos",
    label: "Rotina em tecnologia e operacao",
    icon: "briefcase",
  },
  {
    title: "Implantacoes",
    label: "Projetos colocados de pe com cliente",
    icon: "rocket",
  },
  {
    title: "Atendimento direto",
    label: "Suporte, diagnostico e acompanhamento de incidente",
    icon: "users",
  },
  {
    title: "Migrando para dev",
    label: "Estudo com projeto pratico e consistencia",
    icon: "trending-up",
  },
];

export const experiences = [
  {
    company: "ConEasy",
    role: "Analista de Suporte e Implantacao",
    period: "Abr 2023 - Atual",
    location: "Itajai, SC",
    description:
      "Atuacao direta com cliente desde a implantacao ate o suporte da operacao.",
    responsibilities: [
      "Implantacao de sistema e onboarding de usuarios",
      "Atendimento direto e resolucao de incidentes",
      "Treinamento de usuarios em rotina e boas praticas",
      "Alinhamento diario entre cliente e time tecnico",
    ],
    technologies: ["Implantacao de Sistemas", "Atendimento B2B", "Gestao de Incidentes", "Analise de Processos"],
    results: "Menos retrabalho no dia a dia e operacao mais estavel para o cliente.",
  },
  {
    company: "Code Crafters BR",
    role: "Assistente de Projetos e Desenvolvimento",
    period: "Fev 2022 - Jul 2024",
    location: "Itajai, SC",
    description:
      "Ponte entre demanda operacional e ajustes de interface.",
    responsibilities: [
      "Ajustes front-end para melhorar uso no dia a dia",
      "Triagem de demandas com cliente interno",
      "Documentacao de fluxo para reduzir erro de operacao",
    ],
    technologies: ["Atendimento interno", "Documentacao", "HTML", "CSS", "React"],
    results: "Fluxo mais claro para o time e entregas mais organizadas.",
  },
  {
    company: "Garthen Industria e Comercio de Maquinas",
    role: "Assistente de Compras",
    period: "Ago 2019 - Jan 2022",
    location: "SC",
    description:
      "Rotina de operacao e compras com foco em controle de processo.",
    responsibilities: [
      "Gestao de pedidos e contato com fornecedor",
      "Controle de dados para acompanhar prazos",
      "Ajuste de fluxo interno para ganhar agilidade",
    ],
    technologies: ["Excel", "ERP", "Gestao de processos"],
    results: "Processo mais padronizado e prazos mais previsiveis.",
  },
];

export const skillCategories = [
  {
    name: "Uso no dia a dia",
    priority: "alta",
    skills: [
      { name: "Suporte ao Cliente", level: 94 },
      { name: "Implantacao de Sistemas", level: 92 },
      { name: "Resolucao de Problemas", level: 91 },
      { name: "Comunicacao", level: 93 },
      { name: "Analise de Cenarios", level: 88 },
      { name: "Treinamento de Usuarios", level: 89 },
    ],
  },
  {
    name: "Experiencia pratica",
    priority: "media",
    skills: [
      { name: "Git e GitHub", level: 76 },
      { name: "VS Code", level: 80 },
      { name: "Protheus/ERP", level: 87 },
      { name: "Ferramentas de atendimento e acompanhamento", level: 84 },
    ],
  },
  {
    name: "Em aprendizado",
    priority: "baixa",
    skills: [
      { name: "Desenvolvimento Web (Iniciante)", level: 42 },
      { name: "React e componentes (Iniciante)", level: 45 },
      { name: "Cloud (Iniciante)", level: 32 },
    ],
  },
];

export const projects = [
  {
    name: "Previsao do Tempo",
    description:
      "Projeto simples para consumir API e exibir dados de clima em tempo real.",
    tech: ["JavaScript", "API", "HTML / CSS"],
    image:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&w=1200&q=80",
    demo: "",
    repo: "https://github.com/GabrielBrat/Previs-o-do-Tempo",
    repoLabel: "Ver codigo",
    featured: true,
  },
  {
    name: "CineMatch",
    description:
      "Aplicacao que sugere filmes com base em preferencias, usando IA.",
    tech: ["React", "API", "IA"],
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    demo: "https://cinematch-ai-five.vercel.app/",
    demoLabel: "Ver projeto",
    repo: "",
    repoLabel: "Codigo",
    featured: true,
  },
  {
    name: "Em breve",
    description:
      "Novos projetos em desenvolvimento. Em breve aqui.",
    tech: ["Em andamento"],
    image: "",
    demo: "",
    repo: "",
    upcoming: true,
    featured: false,
  },
];

export const education = [
  {
    title: "Bacharelado em Analise e Desenvolvimento de Sistemas",
    institution: "Universidade do Vale do Itajai (UNIVALI)",
    period: "2023 - 2026",
  },
  {
    title: "Desenvolvimento Web Full Stack",
    institution: "Full Stack Club",
    period: "2025 - Atual",
  },
];

export const certifications = [
  "React e JavaScript moderno (em andamento)",
  "Fundamentos de cloud computing (estudo pratico)",
  "Rotina de suporte ERP e processo contabil-fiscal",
];

export const languages = [
  { name: "Portugues", level: "Nativo" },
  { name: "Ingles", level: "Intermediario (limited working proficiency)" },
];

export const learningNow = [
  "React com foco em componente reutilizavel",
  "JavaScript para resolver problema real de tela e fluxo",
  "Git e GitHub na rotina de projeto",
  "APIs e integracao em projeto de estudo",
];

export const stackFocus = [
  "Atendimento ao Cliente",
  "Implantacao de Sistemas",
  "Resolucao de Problemas",
  "Comunicacao",
  "React (uso em projeto de estudo)",
  "Git/GitHub",
];

export const differentiators = [
  {
    title: "Comunicacao com cliente",
    description: "Explico problema tecnico sem complicar e mantenho o alinhamento ate resolver.",
  },
  {
    title: "Aprendizado aplicado",
    description: "O que estudo vai para projeto. Isso acelera minha evolucao.",
  },
  {
    title: "Vivencia de operacao real",
    description: "Ja lidei com incidente, implantacao e suporte em cenario de pressao.",
  },
  {
    title: "Visao de negocio e tecnico",
    description: "Penso no impacto para o cliente e no que e viavel para o time entregar.",
  },
];
