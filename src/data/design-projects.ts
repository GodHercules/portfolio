import type { DesignProject } from '@/types/project';

export const designProjects: DesignProject[] = [
  {
    id: 'nova-brand',
    slug: 'nova-brand-system',
    category: 'brand-identity',
    featured: true,
    title: {
      'pt-BR': 'Nova Brand System',
      en: 'Nova Brand System',
      es: 'Nova Brand System',
    },
    summary: {
      'pt-BR': 'Sistema de identidade visual com foco em consistência e presença premium.',
      en: 'Visual identity system focused on consistency and premium presence.',
      es: 'Sistema de identidad visual enfocado en consistencia y presencia premium.',
    },
    cover: '/assets/projects/design-brand.svg',
    tags: ['Branding', 'Art Direction', 'Identity'],
    details: {
      context: {
        'pt-BR': 'Marca em fase de reposicionamento para um público mais exigente e orientado a valor.',
        en: 'Brand repositioning for a more demanding and value-driven audience.',
        es: 'Marca en reposicionamiento para una audiencia más exigente y orientada al valor.',
      },
      direction: {
        'pt-BR': 'Direção minimalista com tipografia de alto contraste, ritmo visual e sistema modular.',
        en: 'Minimalist direction with high-contrast typography, visual rhythm and modular system.',
        es: 'Dirección minimalista con tipografía de alto contraste, ritmo visual y sistema modular.',
      },
      results: {
        'pt-BR': ['Manual de marca completo', 'Sistema de grid para peças digitais', 'Biblioteca de aplicações'],
        en: ['Complete brand guideline', 'Grid system for digital pieces', 'Application library'],
        es: ['Guía de marca completa', 'Sistema de grid para piezas digitales', 'Biblioteca de aplicaciones'],
      },
    },
  },
  {
    id: 'social-campaign',
    slug: 'social-campaign-suite',
    category: 'social-media',
    featured: true,
    title: {
      'pt-BR': 'Social Campaign Suite',
      en: 'Social Campaign Suite',
      es: 'Social Campaign Suite',
    },
    summary: {
      'pt-BR': 'Coleção de peças para campanhas digitais com narrativa visual coesa.',
      en: 'Asset collection for digital campaigns with cohesive visual storytelling.',
      es: 'Colección de piezas para campañas digitales con narrativa visual cohesiva.',
    },
    cover: '/assets/projects/design-social.svg',
    tags: ['Social Media', 'Campaign', 'Visual Storytelling'],
    details: {
      context: {
        'pt-BR': 'Campanha de awareness com necessidade de alta frequência e consistência estética.',
        en: 'Awareness campaign requiring high-frequency output and aesthetic consistency.',
        es: 'Campaña de awareness con necesidad de alta frecuencia y consistencia estética.',
      },
      direction: {
        'pt-BR': 'Composição editorial com contraste tipográfico e linguagem gráfica contemporânea.',
        en: 'Editorial composition with typographic contrast and contemporary visual language.',
        es: 'Composición editorial con contraste tipográfico y lenguaje visual contemporáneo.',
      },
      results: {
        'pt-BR': ['Templates escaláveis', 'Sistema de variações por formato', 'Melhora de consistência da marca'],
        en: ['Scalable templates', 'Format-based variation system', 'Improved brand consistency'],
        es: ['Plantillas escalables', 'Sistema de variaciones por formato', 'Mejora de consistencia de marca'],
      },
    },
  },
  {
    id: 'promo-kit',
    slug: 'promo-kit',
    category: 'promotional',
    title: {
      'pt-BR': 'Promo Kit',
      en: 'Promo Kit',
      es: 'Promo Kit',
    },
    summary: {
      'pt-BR': 'Peças promocionais para lançamentos com foco em conversão e diferenciação visual.',
      en: 'Promotional assets for launches focused on conversion and visual differentiation.',
      es: 'Piezas promocionales para lanzamientos enfocadas en conversión y diferenciación visual.',
    },
    cover: '/assets/projects/design-promo.svg',
    tags: ['Promotion', 'Ads', 'Launch'],
    details: {
      context: {
        'pt-BR': 'Lançamento com janela curta e necessidade de alto impacto visual.',
        en: 'Launch window with short timing and need for high visual impact.',
        es: 'Lanzamiento con ventana corta y necesidad de alto impacto visual.',
      },
      direction: {
        'pt-BR': 'Exploração de contraste cromático com hierarquia rígida para mensagens-chave.',
        en: 'Chromatic contrast exploration with strict hierarchy for key messages.',
        es: 'Exploración de contraste cromático con jerarquía estricta para mensajes clave.',
      },
      results: {
        'pt-BR': ['Família de anúncios adaptáveis', 'Melhor legibilidade em mobile', 'Maior taxa de clique'],
        en: ['Adaptable ad family', 'Improved mobile readability', 'Higher click-through rate'],
        es: ['Familia de anuncios adaptable', 'Mejor legibilidad mobile', 'Mayor tasa de clics'],
      },
    },
  },
  {
    id: 'corporate-docs',
    slug: 'corporate-docs',
    category: 'corporate',
    title: {
      'pt-BR': 'Corporate Visual Docs',
      en: 'Corporate Visual Docs',
      es: 'Corporate Visual Docs',
    },
    summary: {
      'pt-BR': 'Materiais corporativos para apresentações estratégicas e comunicação institucional.',
      en: 'Corporate materials for strategic presentations and institutional communication.',
      es: 'Materiales corporativos para presentaciones estratégicas y comunicación institucional.',
    },
    cover: '/assets/projects/design-corporate.svg',
    tags: ['Corporate', 'Presentation', 'Visual Systems'],
    details: {
      context: {
        'pt-BR': 'Necessidade de padronizar a linguagem visual em materiais executivos.',
        en: 'Need to standardize visual language in executive materials.',
        es: 'Necesidad de estandarizar el lenguaje visual en materiales ejecutivos.',
      },
      direction: {
        'pt-BR': 'Sistema editorial limpo, com ênfase em clareza, ritmo e leitura de dados.',
        en: 'Clean editorial system emphasizing clarity, rhythm and data readability.',
        es: 'Sistema editorial limpio con énfasis en claridad, ritmo y lectura de datos.',
      },
      results: {
        'pt-BR': ['Template deck institucional', 'Biblioteca de ícones e gráficos', 'Padrão visual replicável'],
        en: ['Institutional deck template', 'Icon and chart library', 'Replicable visual standard'],
        es: ['Plantilla institucional', 'Biblioteca de íconos y gráficos', 'Estándar visual replicable'],
      },
    },
  },
];

export function getDesignProjectBySlug(slug: string) {
  return designProjects.find((project) => project.slug === slug);
}
