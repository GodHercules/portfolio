import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

type HeroSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HeroSection({ locale, dictionary }: HeroSectionProps) {
  return (
    <section className="section-spacing pb-10">
      <div className="content-grid grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <Reveal>
          <Badge className="mb-5">{dictionary.home.badge}</Badge>
          <h1 className="font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
            Hercules de Oliveira
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl leading-tight text-fg/90 sm:text-3xl">
            {dictionary.home.headline}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-fg/75 sm:text-base">{dictionary.home.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`/${locale}/contact`}>{dictionary.home.ctaPrimary}</ButtonLink>
            <ButtonLink href={`/${locale}/development`} variant="secondary">
              {dictionary.home.ctaSecondary}
            </ButtonLink>
            <ButtonLink href="https://github.com/GodHercules" variant="ghost" external>
              {dictionary.home.ctaTertiary}
              <ArrowUpRight size={16} />
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="glass rounded-3xl p-7 shadow-soft sm:p-10">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-fg/55">{dictionary.home.heroBoardLabel}</p>
            <p className="font-display text-2xl leading-tight tracking-tight">{dictionary.home.heroCardTitle}</p>
            <p className="text-sm leading-relaxed text-fg/75">{dictionary.home.heroCardDescription}</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl border border-border bg-muted p-4">
                <p className="text-fg/60">{dictionary.home.heroStackLabel}</p>
                <p className="mt-1 font-medium">{dictionary.home.heroStackValue}</p>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-4">
                <p className="text-fg/60">{dictionary.home.heroFocusLabel}</p>
                <p className="mt-1 font-medium">{dictionary.home.heroFocusValue}</p>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-4">
                <p className="text-fg/60">{dictionary.home.heroCraftLabel}</p>
                <p className="mt-1 font-medium">{dictionary.home.heroCraftValue}</p>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-4">
                <p className="text-fg/60">{dictionary.home.heroStyleLabel}</p>
                <p className="mt-1 font-medium">{dictionary.home.heroStyleValue}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
