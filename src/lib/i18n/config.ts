export const locales = ['pt-BR', 'en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt-BR';

export const localeLabels: Record<Locale, string> = {
  'pt-BR': 'PT',
  en: 'EN',
  es: 'ES',
};

export const localeFlags: Record<Locale, string> = {
  'pt-BR': '/assets/flags/br.svg',
  en: '/assets/flags/us.svg',
  es: '/assets/flags/es.svg',
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
