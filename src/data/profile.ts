import type { Locale } from '@/lib/i18n/config';

const DEFAULT_PHONE_DISPLAY = '+55 (11) 99999-9999';
const DEFAULT_PHONE_RAW = '+5511999999999';

const envPhoneDisplay = process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY;
const envPhoneRaw = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW;
const envLinkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;

export const profile = {
  name: 'Hercules de Oliveira',
  email: 'herculesoliveira.dev@gmail.com',
  github: 'https://github.com/GodHercules',
  linkedin: envLinkedin ?? 'https://www.linkedin.com/in/godhercules',
  phoneDisplay: envPhoneDisplay ?? DEFAULT_PHONE_DISPLAY,
  phoneRaw: envPhoneRaw ?? DEFAULT_PHONE_RAW,
  headline: {
    'pt-BR': 'Engenharia, produto e dire\u00e7\u00e3o visual na mesma entrega.',
    en: 'Engineering, product, and visual direction in the same delivery.',
    es: 'Ingenier\u00eda, producto y direcci\u00f3n visual en una misma entrega.',
  } satisfies Record<Locale, string>,
  availability: {
    'pt-BR': 'Dispon\u00edvel para produtos digitais, sistemas internos, automa\u00e7\u00f5es e experi\u00eancias premium de interface.',
    en: 'Available for digital products, internal systems, automations, and premium interface experiences.',
    es: 'Disponible para productos digitales, sistemas internos, automatizaciones y experiencias premium de interfaz.',
  } satisfies Record<Locale, string>,
  specialties: {
    'pt-BR': ['Arquitetura frontend', 'UX engineering', 'Integra\u00e7\u00f5es e automa\u00e7\u00e3o', 'Dire\u00e7\u00e3o visual aplicada a produto'],
    en: ['Frontend architecture', 'UX engineering', 'Integrations and automation', 'Visual direction applied to product'],
    es: ['Arquitectura frontend', 'UX engineering', 'Integraciones y automatizaci\u00f3n', 'Direcci\u00f3n visual aplicada al producto'],
  } satisfies Record<Locale, string[]>,
  workModes: {
    'pt-BR': ['Projetos ponta a ponta', 'Squads enxutos e times em evolu\u00e7\u00e3o', 'Reposicionamento visual com profundidade t\u00e9cnica'],
    en: ['End-to-end projects', 'Lean squads and evolving teams', 'Visual repositioning with technical depth'],
    es: ['Proyectos end-to-end', 'Squads ligeros y equipos en evoluci\u00f3n', 'Reposicionamiento visual con profundidad t\u00e9cnica'],
  } satisfies Record<Locale, string[]>,
};

export function buildWhatsAppUrl(phoneRaw: string, message: string) {
  const normalized = phoneRaw.replace(/\D/g, '');
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}
