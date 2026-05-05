import type { Locale } from '@/lib/i18n/config';

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    development: string;
    design: string;
    about: string;
    contact: string;
  };
  common: {
    viewProject: string;
    viewCase: string;
    back: string;
    contact: string;
    github: string;
    live: string;
    updatedAt: string;
    featured: string;
    all: string;
    openMenu: string;
    closeMenu: string;
    lightMode: string;
    darkMode: string;
  };
  home: {
    badge: string;
    headline: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaTertiary: string;
    heroCardTitle: string;
    heroCardDescription: string;
    heroBoardLabel: string;
    heroStackLabel: string;
    heroStackValue: string;
    heroFocusLabel: string;
    heroFocusValue: string;
    heroCraftLabel: string;
    heroCraftValue: string;
    heroStyleLabel: string;
    heroStyleValue: string;
    featuredTitle: string;
    featuredDescription: string;
    devTitle: string;
    devDescription: string;
    designTitle: string;
    designDescription: string;
  };
  about: {
    title: string;
    intro: string;
    points: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    locationLabel: string;
    locationValue: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  categories: {
    development: Record<string, string>;
    design: Record<string, string>;
  };
  projectPage: {
    context: string;
    problem: string;
    objective: string;
    features: string;
    technicalChallenges: string;
    architectureDecisions: string;
    implementedSolutions: string;
    learnings: string;
    futureImprovements: string;
    visualDirection: string;
    tags: string;
    results: string;
  };
  githubSection: {
    title: string;
    description: string;
    empty: string;
  };
  footer: {
    text: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  'pt-BR': {
    meta: {
      title: 'Hercules de Oliveira | Desenvolvedor Full Stack Pleno',
      description:
        'Portfolio de Hercules de Oliveira, desenvolvedor Full Stack Pleno com +2 anos de experiencia em Python, JavaScript, TypeScript, React, Next.js, Node.js, NestJS, SQL e TailwindCSS.',
    },
    nav: {
      home: 'Início',
      development: 'Desenvolvimento',
      design: 'Design Gráfico',
      about: 'Sobre',
      contact: 'Contato',
    },
    common: {
      viewProject: 'Ver projeto',
      viewCase: 'Ler case completo',
      back: 'Voltar',
      contact: 'Entrar em contato',
      github: 'GitHub',
      live: 'Ver online',
      updatedAt: 'Atualizado em',
      featured: 'Destaque',
      all: 'Todos',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      lightMode: 'Ativar modo claro',
      darkMode: 'Ativar modo escuro',
    },
    home: {
      badge: 'Desenvolvedor Full Stack Pleno',
      headline: 'Desenvolvo aplicacoes web modernas e escalaveis com engenharia, performance e codigo limpo.',
      subtitle:
        'Sou Hercules de Oliveira. Tenho +2 anos de experiencia atuando do front-end ao back-end com Python, JavaScript, TypeScript, React, Next.js, Node.js, NestJS, SQL, Docker e boas praticas de desenvolvimento.',
      ctaPrimary: 'Conversar sobre meu projeto',
      ctaSecondary: 'Ver cases fullstack',
      ctaTertiary: 'Prova tecnica publica',
      heroCardTitle: 'Perfil pleno orientado a entrega',
      heroCardDescription:
        'Experiencia em aplicacoes full stack, APIs REST, bancos relacionais, testes, metodologias ageis e entrega com foco em performance e escalabilidade.',
      heroBoardLabel: 'Painel profissional',
      heroStackLabel: 'Stack principal',
      heroStackValue: 'Next.js + TypeScript',
      heroFocusLabel: 'Foco',
      heroFocusValue: 'Produto e experiência',
      heroCraftLabel: 'Especialidade',
      heroCraftValue: 'Engenharia + Direção visual',
      heroStyleLabel: 'Padrão',
      heroStyleValue: 'Execução premium',
      featuredTitle: 'Projetos em destaque',
      featuredDescription:
        'Cases selecionados que demonstram problema, decisao tecnica, arquitetura, impacto e maturidade visual.',
      devTitle: 'Frente de desenvolvimento',
      devDescription:
        'Aplicações, automações, sistemas e estudos técnicos com organização, performance e escalabilidade.',
      designTitle: 'Frente de design gráfico',
      designDescription:
        'Trabalhos visuais com direção de arte consistente, narrativa clara e alto cuidado estético.',
    },
    about: {
      title: 'Sobre',
      intro:
        'Atuo como Desenvolvedor Full Stack com base em Engenharia de Software, conectando front-end, back-end, banco de dados e boas praticas para entregar aplicacoes web modernas.',
      points: [
        'Tenho experiencia profissional na MF Contabilidade e NG7 Consultoria, atuando em projetos reais com funcionalidades front-end e back-end.',
        'Trabalho com Python, JavaScript, TypeScript, React, Next.js, Node.js, NestJS, SQL, PostgreSQL, MySQL, Docker, Git, Postman e Jest.',
        'Meu foco e codigo limpo, SOLID, performance, escalabilidade, testes unitarios e colaboracao em rotinas Scrum e Kanban.',
      ],
    },
    contact: {
      title: 'Contato',
      subtitle:
        'Aberto para produtos digitais, sistemas internos, automacoes, interfaces premium e oportunidades fullstack orientadas a resultado.',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefone',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Localização',
      locationValue: 'Brasil',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    categories: {
      development: {
        'web-apps': 'Aplicações web',
        automations: 'Automações',
        'internal-systems': 'Sistemas internos',
        'landing-pages': 'Landing pages',
        'technical-studies': 'Estudos técnicos',
        'utility-tools': 'Ferramentas utilitárias',
      },
      design: {
        'social-media': 'Social media',
        promotional: 'Peças promocionais',
        corporate: 'Materiais corporativos',
        'brand-identity': 'Identidade visual',
        'visual-studies': 'Estudos visuais',
      },
    },
    projectPage: {
      context: 'Contexto',
      problem: 'Problema resolvido',
      objective: 'Objetivo',
      features: 'Principais funcionalidades',
      technicalChallenges: 'Desafios técnicos',
      architectureDecisions: 'Decisões arquiteturais',
      implementedSolutions: 'Soluções implementadas',
      learnings: 'Aprendizados',
      futureImprovements: 'Melhorias futuras',
      visualDirection: 'Direção visual',
      tags: 'Tags',
      results: 'Resultados',
    },
    githubSection: {
      title: 'Projetos do GitHub',
      description:
        'Integracao server-side com GitHub API, cache incremental e curadoria para transformar repositorios publicos em prova tecnica.',
      empty: 'Nenhum repositório disponível no momento.',
    },
    footer: {
      text: 'Hercules de Oliveira. Produto, engenharia e design com rigor e sensibilidade.',
    },
  },
  en: {
    meta: {
      title: 'Hercules de Oliveira | Mid-level Full Stack Developer',
      description:
        'Portfolio of Hercules de Oliveira, a mid-level Full Stack Developer with 2+ years of experience in Python, JavaScript, TypeScript, React, Next.js, Node.js, NestJS, SQL and TailwindCSS.',
    },
    nav: {
      home: 'Home',
      development: 'Development',
      design: 'Graphic Design',
      about: 'About',
      contact: 'Contact',
    },
    common: {
      viewProject: 'View project',
      viewCase: 'Read full case',
      back: 'Back',
      contact: 'Contact me',
      github: 'GitHub',
      live: 'Live preview',
      updatedAt: 'Updated on',
      featured: 'Featured',
      all: 'All',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      lightMode: 'Enable light mode',
      darkMode: 'Enable dark mode',
    },
    home: {
      badge: 'Mid-level Full Stack Developer',
      headline: 'I build modern scalable web applications with engineering, performance and clean code.',
      subtitle:
        'I am Hercules de Oliveira. I have 2+ years of experience working from front-end to back-end with Python, JavaScript, TypeScript, React, Next.js, Node.js, NestJS, SQL, Docker and development best practices.',
      ctaPrimary: 'Discuss my project',
      ctaSecondary: 'See fullstack cases',
      ctaTertiary: 'Public technical proof',
      heroCardTitle: 'Delivery-oriented mid-level profile',
      heroCardDescription:
        'Experience with full stack applications, REST APIs, relational databases, tests, agile methods and delivery focused on performance and scalability.',
      heroBoardLabel: 'Professional board',
      heroStackLabel: 'Core stack',
      heroStackValue: 'Next.js + TypeScript',
      heroFocusLabel: 'Focus',
      heroFocusValue: 'Product and experience',
      heroCraftLabel: 'Specialty',
      heroCraftValue: 'Engineering + Visual direction',
      heroStyleLabel: 'Standard',
      heroStyleValue: 'Premium execution',
      featuredTitle: 'Featured projects',
      featuredDescription:
        'Selected cases that show problem framing, technical decisions, architecture, impact and visual maturity.',
      devTitle: 'Development practice',
      devDescription:
        'Applications, automations, systems and technical studies built for organization, performance and scale.',
      designTitle: 'Graphic design practice',
      designDescription:
        'Visual work with strong art direction, clear narrative and high aesthetic rigor.',
    },
    about: {
      title: 'About',
      intro:
        'I work as a Full Stack Developer with a Software Engineering foundation, connecting front-end, back-end, databases and best practices to deliver modern web applications.',
      points: [
        'I have professional experience at MF Contabilidade and NG7 Consultoria, working on real projects with front-end and back-end features.',
        'I work with Python, JavaScript, TypeScript, React, Next.js, Node.js, NestJS, SQL, PostgreSQL, MySQL, Docker, Git, Postman and Jest.',
        'My focus is clean code, SOLID, performance, scalability, unit tests and collaboration in Scrum and Kanban routines.',
      ],
    },
    contact: {
      title: 'Contact',
      subtitle:
        'Open to digital products, internal systems, automations, premium interfaces and fullstack opportunities focused on outcomes.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Location',
      locationValue: 'Brazil',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    categories: {
      development: {
        'web-apps': 'Web applications',
        automations: 'Automations',
        'internal-systems': 'Internal systems',
        'landing-pages': 'Landing pages',
        'technical-studies': 'Technical studies',
        'utility-tools': 'Utility tools',
      },
      design: {
        'social-media': 'Social media',
        promotional: 'Promotional pieces',
        corporate: 'Corporate materials',
        'brand-identity': 'Brand identity',
        'visual-studies': 'Visual studies',
      },
    },
    projectPage: {
      context: 'Context',
      problem: 'Solved problem',
      objective: 'Objective',
      features: 'Key features',
      technicalChallenges: 'Technical challenges',
      architectureDecisions: 'Architectural decisions',
      implementedSolutions: 'Implemented solutions',
      learnings: 'Learnings',
      futureImprovements: 'Future improvements',
      visualDirection: 'Visual direction',
      tags: 'Tags',
      results: 'Results',
    },
    githubSection: {
      title: 'GitHub projects',
      description:
        'Server-side GitHub API integration, incremental cache and curation to turn public repositories into technical proof.',
      empty: 'No repositories available at the moment.',
    },
    footer: {
      text: 'Hercules de Oliveira. Product, engineering and design with rigor and taste.',
    },
  },
  es: {
    meta: {
      title: 'Hercules de Oliveira | Desarrollador Full Stack Pleno',
      description:
        'Portafolio de Hercules de Oliveira, desarrollador Full Stack Pleno con mas de 2 anos de experiencia en Python, JavaScript, TypeScript, React, Next.js, Node.js, NestJS, SQL y TailwindCSS.',
    },
    nav: {
      home: 'Inicio',
      development: 'Desarrollo',
      design: 'Diseño Gráfico',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    common: {
      viewProject: 'Ver proyecto',
      viewCase: 'Leer caso completo',
      back: 'Volver',
      contact: 'Contactar',
      github: 'GitHub',
      live: 'Ver en línea',
      updatedAt: 'Actualizado el',
      featured: 'Destacado',
      all: 'Todos',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      lightMode: 'Activar modo claro',
      darkMode: 'Activar modo oscuro',
    },
    home: {
      badge: 'Desarrollador Full Stack Pleno',
      headline: 'Desarrollo aplicaciones web modernas y escalables con ingenieria, performance y clean code.',
      subtitle:
        'Soy Hercules de Oliveira. Tengo mas de 2 anos de experiencia trabajando del front-end al back-end con Python, JavaScript, TypeScript, React, Next.js, Node.js, NestJS, SQL, Docker y buenas practicas.',
      ctaPrimary: 'Hablar sobre mi proyecto',
      ctaSecondary: 'Ver casos fullstack',
      ctaTertiary: 'Prueba tecnica publica',
      heroCardTitle: 'Perfil pleno orientado a entrega',
      heroCardDescription:
        'Experiencia con aplicaciones full stack, APIs REST, bases relacionales, pruebas, metodologias agiles y entrega enfocada en performance y escalabilidad.',
      heroBoardLabel: 'Panel profesional',
      heroStackLabel: 'Stack principal',
      heroStackValue: 'Next.js + TypeScript',
      heroFocusLabel: 'Enfoque',
      heroFocusValue: 'Producto y experiencia',
      heroCraftLabel: 'Especialidad',
      heroCraftValue: 'Ingeniería + Dirección visual',
      heroStyleLabel: 'Estándar',
      heroStyleValue: 'Ejecución premium',
      featuredTitle: 'Proyectos destacados',
      featuredDescription:
        'Casos seleccionados que muestran problema, decision tecnica, arquitectura, impacto y madurez visual.',
      devTitle: 'Frente de desarrollo',
      devDescription:
        'Aplicaciones, automatizaciones, sistemas y estudios técnicos con organización, rendimiento y escalabilidad.',
      designTitle: 'Frente de diseño gráfico',
      designDescription:
        'Trabajos visuales con dirección de arte consistente, narrativa clara y alto cuidado estético.',
    },
    about: {
      title: 'Sobre mí',
      intro:
        'Trabajo como Desarrollador Full Stack con base en Ingenieria de Software, conectando front-end, back-end, bases de datos y buenas practicas para entregar aplicaciones web modernas.',
      points: [
        'Tengo experiencia profesional en MF Contabilidade y NG7 Consultoria, trabajando en proyectos reales con funcionalidades front-end y back-end.',
        'Trabajo con Python, JavaScript, TypeScript, React, Next.js, Node.js, NestJS, SQL, PostgreSQL, MySQL, Docker, Git, Postman y Jest.',
        'Mi foco es clean code, SOLID, performance, escalabilidad, pruebas unitarias y colaboracion en rutinas Scrum y Kanban.',
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle:
        'Disponible para productos digitales, sistemas internos, automatizaciones, interfaces premium y oportunidades fullstack orientadas a resultados.',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Ubicación',
      locationValue: 'Brasil',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    categories: {
      development: {
        'web-apps': 'Aplicaciones web',
        automations: 'Automatizaciones',
        'internal-systems': 'Sistemas internos',
        'landing-pages': 'Landing pages',
        'technical-studies': 'Estudios técnicos',
        'utility-tools': 'Herramientas utilitarias',
      },
      design: {
        'social-media': 'Social media',
        promotional: 'Piezas promocionales',
        corporate: 'Materiales corporativos',
        'brand-identity': 'Identidad visual',
        'visual-studies': 'Estudios visuales',
      },
    },
    projectPage: {
      context: 'Contexto',
      problem: 'Problema resuelto',
      objective: 'Objetivo',
      features: 'Funciones principales',
      technicalChallenges: 'Desafíos técnicos',
      architectureDecisions: 'Decisiones arquitectónicas',
      implementedSolutions: 'Soluciones implementadas',
      learnings: 'Aprendizajes',
      futureImprovements: 'Mejoras futuras',
      visualDirection: 'Dirección visual',
      tags: 'Tags',
      results: 'Resultados',
    },
    githubSection: {
      title: 'Proyectos de GitHub',
      description:
        'Integracion server-side con GitHub API, cache incremental y curadoria para convertir repositorios publicos en prueba tecnica.',
      empty: 'No hay repositorios disponibles en este momento.',
    },
    footer: {
      text: 'Hercules de Oliveira. Producto, ingeniería y diseño con rigor y sensibilidad.',
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
