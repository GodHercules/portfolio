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
    <div className="flex items-center gap-1 rounded-full border border-border bg-card/80 p-1">
      {locales.map((locale) => {
        const active = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={swapLocaleInPath(pathname, locale)}
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs transition',
              active ? 'bg-fg text-bg' : 'text-fg/70 hover:bg-muted',
            )}
          >
            <Image src={localeFlags[locale]} width={14} height={14} alt={localeLabels[locale]} className="rounded-sm" />
            <span>{localeLabels[locale]}</span>
          </Link>
        );
      })}
    </div>
  );
}
