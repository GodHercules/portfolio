'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { localeFlags, localeLabels, locales, type Locale } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

type LocaleSwitcherProps = {
  currentLocale: Locale;
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
    <div className="flex w-fit items-center gap-1 bg-card/60 p-1">
      {locales.map((locale) => {
        const active = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={swapLocaleInPath(pathname, locale)}
            className={cn(
              'focus-ring inline-flex min-h-9 items-center gap-1 px-2 py-1 text-xs transition max-sm:px-1.5',
              active ? 'bg-fg text-bg' : 'text-fg/70 hover:bg-muted hover:text-fg',
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
