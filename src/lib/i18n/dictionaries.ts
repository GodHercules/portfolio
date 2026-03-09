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
      title: 'Hercules de Oliveira | Desenvolvimento e Design',
      description:
        'Portfólio premium de Hercules de Oliveira, profissional híbrido em engenharia de software, produto digital e design gráfico.',
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
      badge: 'Produto digital, engenharia e direção visual',
      headline: 'Construo produtos digitais com precisão técnica e acabamento visual premium.',
      subtitle:
        'Sou Hercules de Oliveira. Uno software e design gráfico para transformar estratégia em experiências claras, elegantes e escaláveis.',
      ctaPrimary: 'Vamos conversar',
      ctaSecondary: 'Explorar projetos',
      ctaTertiary: 'Meu GitHub',
      heroCardTitle: 'Perfil híbrido orientado a produto',
      heroCardDescription:
        'Arquitetura sólida, interface refinada e foco em resultados reais. Cada entrega equilibra tecnologia, design e clareza de negócio.',
      heroBoardLabel: 'Painel de posicionamento',
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
        'Cases selecionados que demonstram profundidade técnica, visão de produto e maturidade visual.',
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
        'Atuo de forma híbrida entre engenharia de software e design gráfico, com pensamento sistêmico e foco em produto.',
      points: [
        'Conecto visão estratégica, execução técnica e linguagem visual para construir experiências digitais consistentes.',
        'Trabalho com arquitetura frontend moderna, componentes reutilizáveis e boas práticas de manutenção.',
        'No design, priorizo hierarquia, clareza e identidade visual autoral para elevar percepção de valor.',
      ],
    },
    contact: {
      title: 'Contato',
      subtitle:
        'Aberto para projetos, colaboração e oportunidades em produto digital, desenvolvimento e design.',
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
        'Integração dinâmica para manter o portfólio atualizado com os repositórios mais relevantes.',
      empty: 'Nenhum repositório disponível no momento.',
    },
    footer: {
      text: 'Hercules de Oliveira. Produto, engenharia e design com rigor e sensibilidade.',
    },
  },
  en: {
    meta: {
      title: 'Hercules de Oliveira | Software and Design',
      description:
        'Premium portfolio of Hercules de Oliveira, a hybrid professional in software engineering, digital product and graphic design.',
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
      badge: 'Digital product, engineering and visual direction',
      headline: 'I build digital products with technical precision and premium visual execution.',
      subtitle:
        'I am Hercules de Oliveira. I combine software and graphic design to turn strategy into clear, elegant and scalable experiences.',
      ctaPrimary: 'Let us talk',
      ctaSecondary: 'Explore projects',
      ctaTertiary: 'My GitHub',
      heroCardTitle: 'Hybrid profile focused on product',
      heroCardDescription:
        'Solid architecture, refined interface and real outcomes. Every delivery balances technology, design and business clarity.',
      heroBoardLabel: 'Positioning board',
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
        'Selected cases that showcase technical depth, product thinking and visual maturity.',
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
        'I work as a hybrid professional across software engineering and graphic design, guided by product thinking.',
      points: [
        'I connect strategy, technical execution and visual language to build coherent digital experiences.',
        'I focus on modern frontend architecture, reusable components and maintainable engineering standards.',
        'In design, I prioritize hierarchy, clarity and distinctive visual identity to elevate perceived value.',
      ],
    },
    contact: {
      title: 'Contact',
      subtitle:
        'Open to projects, collaborations and opportunities in digital product, development and design.',
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
        'Dynamic integration to keep the portfolio up to date with the most relevant repositories.',
      empty: 'No repositories available at the moment.',
    },
    footer: {
      text: 'Hercules de Oliveira. Product, engineering and design with rigor and taste.',
    },
  },
  es: {
    meta: {
      title: 'Hercules de Oliveira | Desarrollo y Diseño',
      description:
        'Portafolio premium de Hercules de Oliveira, profesional híbrido en ingeniería de software, producto digital y diseño gráfico.',
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
      badge: 'Producto digital, ingeniería y dirección visual',
      headline: 'Construyo productos digitales con precisión técnica y ejecución visual premium.',
      subtitle:
        'Soy Hercules de Oliveira. Uno software y diseño gráfico para transformar estrategia en experiencias claras, elegantes y escalables.',
      ctaPrimary: 'Hablemos',
      ctaSecondary: 'Explorar proyectos',
      ctaTertiary: 'Mi GitHub',
      heroCardTitle: 'Perfil híbrido orientado a producto',
      heroCardDescription:
        'Arquitectura sólida, interfaz refinada y foco en resultados reales. Cada entrega equilibra tecnología, diseño y claridad de negocio.',
      heroBoardLabel: 'Panel de posicionamiento',
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
        'Casos seleccionados que muestran profundidad técnica, visión de producto y madurez visual.',
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
        'Trabajo de forma híbrida entre ingeniería de software y diseño gráfico, con pensamiento sistémico y foco en producto.',
      points: [
        'Conecto visión estratégica, ejecución técnica y lenguaje visual para crear experiencias digitales coherentes.',
        'Trabajo con arquitectura frontend moderna, componentes reutilizables y buenas prácticas de mantenimiento.',
        'En diseño, priorizo jerarquía, claridad e identidad visual autoral para elevar la percepción de valor.',
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle:
        'Disponible para proyectos, colaboraciones y oportunidades en producto digital, desarrollo y diseño.',
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
        'Integración dinámica para mantener el portafolio actualizado con los repositorios más relevantes.',
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
