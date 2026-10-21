'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { localeFlags, localeLabels, locales, type Locale } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

type LocaleSwitcherProps = {
  currentLocale: Locale;
};

const languageGroupLabel: Record<Locale, string> = {
  'pt-BR': 'Selecionar idioma',
  en: 'Select language',
  es: 'Seleccionar idioma',
};

function swapLocaleInPath(pathname: string, locale: Locale) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return `/${locale}`;
  }
  segments[0] = locale;
  return `/${segments.join('/')}`;
}

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const pathname = usePathname();

  return (
<div className="locale-switcher" role="group" aria-label={languageGroupLabel[currentLocale]}>
      {locales.map((locale) => {
        const active = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={swapLocaleInPath(pathname, locale)}
            aria-current={active ? 'page' : undefined}
            data-active={active}
            className={cn(
              'locale-switcher__option',
              active ? 'locale-switcher__option--active' : 'text-fg/70 hover:bg-muted hover:text-fg',
            )}
          >
            <Image src={localeFlags[locale]} width={14} height={14} loading="lazy" alt={localeLabels[locale]} className="rounded-sm" />
            <span className="max-sm:sr-only">{localeLabels[locale]}</span>
          </Link>
        );
      })}
    </div>
  );
}
