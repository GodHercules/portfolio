'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LocaleSwitcher } from '@/components/layout/locale-switcher';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Header({ locale, dictionary }: HeaderProps) {
  const pathname = usePathname();
  const navItems = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/development`, label: dictionary.nav.development },
    { href: `/${locale}/design`, label: dictionary.nav.design },
    { href: `/${locale}/about`, label: dictionary.nav.about },
    { href: `/${locale}/contact`, label: dictionary.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/95">
      <div className="content-grid flex h-[4.5rem] items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          aria-label="Hercules de Oliveira — início"
          className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden"
        >
          <span className="brand-mark" aria-hidden="true" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={dictionary.nav.home}>
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== `/${locale}` && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn('focus-ring px-2 py-2 text-sm font-medium transition hover:text-fg', active ? 'text-fg' : 'text-fg/70')}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LocaleSwitcher currentLocale={locale} />
          <ThemeToggle lightLabel={dictionary.common.lightMode} darkLabel={dictionary.common.darkMode} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle lightLabel={dictionary.common.lightMode} darkLabel={dictionary.common.darkMode} />
          <MobileMenu openLabel={dictionary.common.openMenu} closeLabel={dictionary.common.closeMenu} items={navItems} />
        </div>
      </div>
      <div className="content-grid pb-3 lg:hidden">
        <LocaleSwitcher currentLocale={locale} />
      </div>
    </header>
  );
}
