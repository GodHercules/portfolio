import { locales, type Locale } from '@/lib/i18n/config';

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000');

export function getAbsoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString();
}

export function getLanguageAlternates(pathBuilder: (locale: Locale) => string) {
  return Object.fromEntries(locales.map((locale) => [locale, pathBuilder(locale)]));
}
