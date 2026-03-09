import Link from 'next/link';

import { LocaleSwitcher } from '@/components/layout/locale-switcher';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Header({ locale, dictionary }: HeaderProps) {
  const navItems = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/development`, label: dictionary.nav.development },
    { href: `/${locale}/design`, label: dictionary.nav.design },
    { href: `/${locale}/about`, label: dictionary.nav.about },
    { href: `/${locale}/contact`, label: dictionary.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/75 backdrop-blur-xl">
      <div className="content-grid flex h-20 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="font-display text-xl tracking-tight">
          Hercules de Oliveira
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-fg/75 transition hover:bg-muted hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitcher currentLocale={locale} />
          <ThemeToggle lightLabel={dictionary.common.lightMode} darkLabel={dictionary.common.darkMode} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle lightLabel={dictionary.common.lightMode} darkLabel={dictionary.common.darkMode} />
          <MobileMenu openLabel={dictionary.common.openMenu} closeLabel={dictionary.common.closeMenu} items={navItems} />
        </div>
      </div>
      <div className="content-grid pb-3 md:hidden">
        <LocaleSwitcher currentLocale={locale} />
      </div>
    </header>
  );
}
