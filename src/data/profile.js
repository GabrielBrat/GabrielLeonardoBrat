export const profile = {
  name: "Gabriel Leonardo Bratfisch",
  role: "Suporte e Implantação | Migrando para Desenvolvimento",
  location: "Navegantes, Santa Catarina, Brasil",
  email: "gabriel.bratfisch@gmail.com",
  phone: "+55 (47) 99999-9999",
  shortBio:
    "Trabalho com clientes no dia a dia, implantando sistemas e resolvendo problemas de operação. Agora estou levando essa base para o desenvolvimento, com projetos práticos em React.",
  badge: "Transição para dev | Prática diária",
  longBio: [
    "Minha rotina é atendimento direto, implantação e suporte.",
    "Lido com incidentes, ajuste de processo e alinhamento com time técnico.",
    "Estou migrando para desenvolvimento e aplicando isso em projetos reais de estudo.",
  ],
  highlights: [
    "Atendimento direto ao cliente",
    "Implantação de sistemas em operação real",
    "Resolução de problemas sob pressão",
    "Comunicação clara com time técnico e negócio",
  ],
  careerGoals:
    "Quero atuar como dev sem perder o que aprendi em operação: entender o problema, priorizar o que importa e entregar algo que funcione na prática.",
  links: {
    linkedin: "https://www.linkedin.com/in/gabriel-leonardo-bratfisch-5104b121b/",
    github: "https://github.com/GabrielBrat",
    cv: "/cv/Gabriel-Bratfisch-Curriculo-2026.pdf",
  },
};

export const stats = [
  {
    title: "4+ anos",
    label: "Rotina em tecnologia e operação",
    icon: "briefcase",
  },
  {
    title: "Implantações",
    label: "Projetos colocados de pé com cliente",
    icon: "rocket",
  },
  {
    title: "Atendimento direto",
    label: "Suporte, diagnóstico e acompanhamento de incidentes",
    icon: "users",
  },
  {
    title: "Migrando para dev",
    label: "Estudo com projeto prático e consistência",
    icon: "trending-up",
  },
];

export const experiences = [
  {
    company: "ConEasy",
    role: "Analista de Suporte e Implantação",
    period: "Abr 2023 - Atual",
    location: "Itajaí, SC",
    description:
      "Atuação direta com cliente desde a implantação até o suporte da operação.",
    responsibilities: [
      "Implantação de sistema e onboarding de usuários",
      "Atendimento direto e resolução de incidentes",
      "Treinamento de usuários em rotina e boas práticas",
      "Alinhamento diário entre cliente e time técnico",
    ],
    technologies: ["Implantação de Sistemas", "Atendimento B2B", "Gestão de Incidentes", "Análise de Processos"],
    results: "Menos retrabalho no dia a dia e operação mais estável para o cliente.",
  },
  {
    company: "Code Crafters BR",
    role: "Assistente de Projetos e Desenvolvimento",
    period: "Fev 2022 - Jul 2024",
    location: "Itajaí, SC",
    description:
      "Ponte entre demanda operacional e ajustes de interface.",
    responsibilities: [
      "Ajustes front-end para melhorar uso no dia a dia",
      "Triagem de demandas com cliente interno",
      "Documentação de fluxo para reduzir erro de operação",
    ],
    technologies: ["Atendimento interno", "Documentação", "HTML", "CSS", "React"],
    results: "Fluxo mais claro para o time e entregas mais organizadas.",
  },
  {
    company: "Garthen Indústria e Comércio de Máquinas",
    role: "Assistente de Compras",
    period: "Ago 2019 - Jan 2022",
    location: "SC",
    description:
      "Rotina de operação e compras com foco em controle de processo.",
    responsibilities: [
      "Gestão de pedidos e contato com fornecedor",
      "Controle de dados para acompanhar prazos",
      "Ajuste de fluxo interno para ganhar agilidade",
    ],
    technologies: ["Excel", "ERP", "Gestão de processos"],
    results: "Processo mais padronizado e prazos mais previsíveis.",
  },
];

export const skillCategories = [
  {
    name: "Uso no dia a dia",
    priority: "alta",
    skills: [
      { name: "Suporte ao Cliente", level: 94 },
      { name: "Implantação de Sistemas", level: 92 },
      { name: "Resolução de Problemas", level: 91 },
      { name: "Comunicação", level: 93 },
      { name: "Análise de Cenários", level: 88 },
      { name: "Treinamento de Usuários", level: 89 },
    ],
  },
  {
    name: "Experiência prática",
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
    name: "Previsão do Tempo",
    description:
      "Projeto simples para consumir API e exibir dados de clima em tempo real.",
    tech: ["JavaScript", "API", "HTML / CSS"],
    image:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&w=1200&q=80",
    demo: "",
    repo: "https://github.com/GabrielBrat/Previs-o-do-Tempo",
    repoLabel: "Ver código",
    featured: true,
  },
  {
    name: "CineMatch",
    description:
      "Aplicação que sugere filmes com base em preferências, usando IA.",
    tech: ["React", "API", "IA"],
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    demo: "https://cinematch-ai-five.vercel.app/",
    demoLabel: "Ver projeto",
    repo: "",
    repoLabel: "Código",
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
    title: "Bacharelado em Análise e Desenvolvimento de Sistemas",
    institution: "Universidade do Vale do Itajaí (UNIVALI)",
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
  "Fundamentos de cloud computing (estudo prático)",
  "Rotina de suporte ERP e processo contábil-fiscal",
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário (limited working proficiency)" },
];

export const learningNow = [
  "React com foco em componente reutilizável",
  "JavaScript para resolver problema real de tela e fluxo",
  "Git e GitHub na rotina de projeto",
  "APIs e integração em projeto de estudo",
];

export const stackFocus = [
  "Atendimento ao Cliente",
  "Implantação de Sistemas",
  "Resolução de Problemas",
  "Comunicação",
  "React (uso em projeto de estudo)",
  "Git/GitHub",
];

export const differentiators = [
  {
    title: "Comunicação com cliente",
    description: "Explico problema técnico sem complicar e mantenho o alinhamento até resolver.",
  },
  {
    title: "Aprendizado aplicado",
    description: "O que estudo vai para projeto. Isso acelera minha evolução.",
  },
  {
    title: "Vivência de operação real",
    description: "Já lidei com incidentes, implantação e suporte em cenário de pressão.",
  },
  {
    title: "Visão de negócio e técnico",
    description: "Penso no impacto para o cliente e no que é viável para o time entregar.",
  },
];
