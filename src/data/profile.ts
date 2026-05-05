import type { Locale } from '@/lib/i18n/config';

const DEFAULT_PHONE_DISPLAY = '+55 (71) 9 8703-4124';
const DEFAULT_PHONE_RAW = '+5571987034124';

const envPhoneDisplay = process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY;
const envPhoneRaw = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW;
const envLinkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;

export const profile = {
  name: 'Hercules de Oliveira',
  email: 'herculesoliveirabr@gmail.com',
  github: 'https://github.com/GodHercules',
  linkedin: envLinkedin ?? 'https://www.linkedin.com/in/godhercules',
  phoneDisplay: envPhoneDisplay ?? DEFAULT_PHONE_DISPLAY,
  phoneRaw: envPhoneRaw ?? DEFAULT_PHONE_RAW,
  location: 'Salvador, Bahia',
  experienceYears: '+2',
  headline: {
    'pt-BR': 'Desenvolvedor Full Stack Pleno com engenharia de software aplicada ao produto.',
    en: 'Mid-level Full Stack Developer applying software engineering to product delivery.',
    es: 'Desarrollador Full Stack Pleno aplicando ingenieria de software al producto.',
  } satisfies Record<Locale, string>,
  summary: {
    'pt-BR':
      'Desenvolvedor Full Stack com mais de 2 anos de experiencia criando aplicacoes web modernas e escalaveis com Python, JavaScript, TypeScript, React, Node.js, NestJS, Next.js, SQL e TailwindCSS.',
    en: 'Full Stack Developer with 2+ years of experience building modern scalable web applications with Python, JavaScript, TypeScript, React, Node.js, NestJS, Next.js, SQL and TailwindCSS.',
    es: 'Desarrollador Full Stack con mas de 2 anos de experiencia creando aplicaciones web modernas y escalables con Python, JavaScript, TypeScript, React, Node.js, NestJS, Next.js, SQL y TailwindCSS.',
  } satisfies Record<Locale, string>,
  availability: {
    'pt-BR': 'Disponivel para produtos digitais, sistemas internos, integracoes, automacoes e experiencias premium de interface.',
    en: 'Available for digital products, internal systems, automations, and premium interface experiences.',
    es: 'Disponible para productos digitales, sistemas internos, integraciones, automatizaciones y experiencias premium de interfaz.',
  } satisfies Record<Locale, string>,
  specialties: {
    'pt-BR': ['React e Next.js', 'Node.js e NestJS', 'Python e SQL', 'Docker, Git, Jest e APIs REST'],
    en: ['React and Next.js', 'Node.js and NestJS', 'Python and SQL', 'Docker, Git, Jest and REST APIs'],
    es: ['React y Next.js', 'Node.js y NestJS', 'Python y SQL', 'Docker, Git, Jest y APIs REST'],
  } satisfies Record<Locale, string[]>,
  workModes: {
    'pt-BR': ['Aplicacoes full stack', 'Squads Scrum/Kanban', 'Performance, escalabilidade e codigo limpo'],
    en: ['Full stack applications', 'Scrum/Kanban squads', 'Performance, scalability and clean code'],
    es: ['Aplicaciones full stack', 'Squads Scrum/Kanban', 'Performance, escalabilidad y clean code'],
  } satisfies Record<Locale, string[]>,
  experience: [
    {
      company: 'MF Contabilidade',
      period: 'Jan 2026 - Atual',
      role: {
        'pt-BR': 'Desenvolvedor de Software Full Stack',
        en: 'Full Stack Software Developer',
        es: 'Desarrollador de Software Full Stack',
      } satisfies Record<Locale, string>,
      summary: {
        'pt-BR': 'Atuacao full stack em solucoes de negocio, conectando interface, regras, dados e entrega continua.',
        en: 'Full stack work on business solutions, connecting interface, rules, data and continuous delivery.',
        es: 'Trabajo full stack en soluciones de negocio, conectando interfaz, reglas, datos y entrega continua.',
      } satisfies Record<Locale, string>,
    },
    {
      company: 'NG7 Consultoria',
      period: 'Jan 2025 - Jan 2026',
      role: {
        'pt-BR': 'Desenvolvedor de Software Full Stack',
        en: 'Full Stack Software Developer',
        es: 'Desarrollador de Software Full Stack',
      } satisfies Record<Locale, string>,
      summary: {
        'pt-BR': 'Desenvolvimento de aplicacoes full stack com foco em performance, escalabilidade e boas praticas.',
        en: 'Development of full stack applications focused on performance, scalability and best practices.',
        es: 'Desarrollo de aplicaciones full stack con foco en performance, escalabilidad y buenas practicas.',
      } satisfies Record<Locale, string>,
    },
    {
      company: 'NG7 Consultoria',
      period: 'Jun 2023 - Dez 2024',
      role: {
        'pt-BR': 'Estagiario em Desenvolvimento de Software',
        en: 'Software Development Intern',
        es: 'Practicante en Desarrollo de Software',
      } satisfies Record<Locale, string>,
      summary: {
        'pt-BR': 'Participacao em projetos reais, contribuindo na criacao de funcionalidades front-end e back-end.',
        en: 'Participation in real projects, contributing to front-end and back-end feature delivery.',
        es: 'Participacion en proyectos reales, contribuyendo a funcionalidades front-end y back-end.',
      } satisfies Record<Locale, string>,
    },
  ],
  education: [
    {
      institution: 'Anhanguera',
      course: {
        'pt-BR': 'Bacharelado em Engenharia de Software',
        en: 'Bachelor in Software Engineering',
        es: 'Licenciatura en Ingenieria de Software',
      } satisfies Record<Locale, string>,
      period: 'Jul 2025 - Jun 2029',
    },
    {
      institution: 'SENAI Cimatec',
      course: {
        'pt-BR': 'Tecnico em Desenvolvimento de Sistemas',
        en: 'Technical Degree in Systems Development',
        es: 'Tecnico en Desarrollo de Sistemas',
      } satisfies Record<Locale, string>,
      period: 'Fev 2022 - Dez 2024',
    },
  ],
  skillGroups: {
    languages: ['Python', 'JavaScript ES6+', 'TypeScript'],
    frontend: ['React', 'Next.js', 'TailwindCSS', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'NestJS', 'RESTful APIs'],
    database: ['PostgreSQL', 'MySQL', 'SQL'],
    tools: ['Git', 'GitHub', 'Docker', 'Postman', 'Jest'],
    methods: ['Clean Code', 'SOLID', 'Scrum', 'Kanban', 'Ingles tecnico intermediario'],
  },
};

export function buildWhatsAppUrl(phoneRaw: string, message: string) {
  const normalized = phoneRaw.replace(/\D/g, '');
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}
