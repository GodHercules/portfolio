import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { profile } from '@/data/profile';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

type HeroSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const proofBoard: Record<Locale, { label: string; value: string }[]> = {
  'pt-BR': [
    { label: 'Experiencia', value: '+2 anos em desenvolvimento full stack' },
    { label: 'Stack', value: 'Python, JS/TS, React, Next, Node e NestJS' },
    { label: 'Dados', value: 'SQL, PostgreSQL, MySQL e APIs REST' },
    { label: 'Entrega', value: 'Clean Code, SOLID, Docker, Jest, Scrum e Kanban' },
  ],
  en: [
    { label: 'Experience', value: '2+ years in full stack development' },
    { label: 'Stack', value: 'Python, JS/TS, React, Next, Node and NestJS' },
    { label: 'Data', value: 'SQL, PostgreSQL, MySQL and REST APIs' },
    { label: 'Delivery', value: 'Clean Code, SOLID, Docker, Jest, Scrum and Kanban' },
  ],
  es: [
    { label: 'Experiencia', value: '+2 anos en desarrollo full stack' },
    { label: 'Stack', value: 'Python, JS/TS, React, Next, Node y NestJS' },
    { label: 'Datos', value: 'SQL, PostgreSQL, MySQL y APIs REST' },
    { label: 'Entrega', value: 'Clean Code, SOLID, Docker, Jest, Scrum y Kanban' },
  ],
};

const heroSignals: Record<Locale, string[]> = {
  'pt-BR': ['Full Stack Pleno', 'Engenharia de Software', 'APIs REST e SQL', 'Performance e escalabilidade'],
  en: ['Mid-level Full Stack', 'Software Engineering', 'REST APIs and SQL', 'Performance and scalability'],
  es: ['Full Stack Pleno', 'Ingenieria de Software', 'APIs REST y SQL', 'Performance y escalabilidad'],
};

export function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const board = proofBoard[locale];
  const signals = heroSignals[locale];

  return (
    <section className="section-spacing relative overflow-hidden pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-accent/10 to-transparent" />

      <div className="content-grid relative grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
        <Reveal>
          <Badge className="mb-5">{dictionary.home.badge}</Badge>
          <h1 className="font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
            Hercules de Oliveira
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl leading-tight text-fg/90 sm:text-3xl">
            {dictionary.home.headline}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-fg/75 sm:text-base">{dictionary.home.subtitle}</p>

          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
            {signals.map((signal) => (
              <div key={signal} className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3 text-sm text-fg/75 shadow-soft">
                {signal}
              </div>
            ))}
          </div>

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

        <Reveal delay={0.1} className="glass overflow-hidden rounded-[2rem] shadow-soft">
          <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[0.88fr_1.12fr]">
            <div className="relative min-h-[260px] border-b border-border/70 bg-muted sm:border-b-0 sm:border-r lg:border-b lg:border-r-0 xl:border-b-0 xl:border-r">
              <Image
                src="/assets/profile/hercules-profile.png"
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 768px) 92vw, 380px"
                className="object-cover object-[50%_18%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/85 to-transparent p-5">
                <p className="font-display text-2xl leading-none">{profile.name}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-fg/70">
                  {locale === 'pt-BR'
                    ? 'Full Stack Pleno'
                    : locale === 'es'
                      ? 'Full Stack Pleno'
                      : 'Mid-level Full Stack'}
                </p>
              </div>
            </div>

            <div className="space-y-6 p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-fg/55">{dictionary.home.heroBoardLabel}</p>
              <p className="font-display text-2xl leading-tight tracking-tight">{dictionary.home.heroCardTitle}</p>
              <p className="text-sm leading-relaxed text-fg/75">{dictionary.home.heroCardDescription}</p>

              <div className="rounded-2xl border border-border/70 bg-muted/70 p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-fg/45">
                  {locale === 'pt-BR' ? 'Resumo do curriculo' : locale === 'es' ? 'Resumen del CV' : 'Resume summary'}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fg/75">{profile.summary[locale]}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                {board.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-muted p-4">
                    <p className="text-fg/60">{item.label}</p>
                    <p className="mt-1 font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
