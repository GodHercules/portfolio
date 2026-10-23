import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { GradientAscii } from '@/components/premium/gradient-ascii';
import { FoldText } from '@/components/premium/masked-heading';
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
    { label: 'Experiência', value: '+3 anos em desenvolvimento full stack' },
    { label: 'Stack', value: 'Python, JS/TS, React, Next, Node e NestJS' },
    { label: 'Dados', value: 'SQL, PostgreSQL, MySQL e APIs REST' },
    { label: 'Entrega', value: 'Clean Code, SOLID, Docker, Jest, Scrum e Kanban' },
  ],
  en: [
    { label: 'Experience', value: '3+ years in full stack development' },
    { label: 'Stack', value: 'Python, JS/TS, React, Next, Node and NestJS' },
    { label: 'Data', value: 'SQL, PostgreSQL, MySQL and REST APIs' },
    { label: 'Delivery', value: 'Clean Code, SOLID, Docker, Jest, Scrum and Kanban' },
  ],
  es: [
    { label: 'Experiencia', value: '+3 anos en desarrollo full stack' },
    { label: 'Stack', value: 'Python, JS/TS, React, Next, Node y NestJS' },
    { label: 'Datos', value: 'SQL, PostgreSQL, MySQL y APIs REST' },
    { label: 'Entrega', value: 'Clean Code, SOLID, Docker, Jest, Scrum y Kanban' },
  ],
};

export function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const board = proofBoard[locale];

  return (
    <section className="relative isolate overflow-hidden pb-10 pt-4 sm:pb-16 sm:pt-8">
      <GradientAscii
        data-testid="hero-ascii"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] opacity-80 sm:h-[42rem]"
        colors={['#7c3aed', '#f6f8ff', '#a855f7', '#6366f1']}
        density={0.92}
        speed={0.28}
        label=""
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-gradient-to-b from-bg/20 via-bg/75 to-bg sm:h-[42rem]" aria-hidden="true" />
      <div className="content-grid">
        <Reveal className="overflow-hidden border-y border-border">
          <div className="grid xl:grid-cols-[minmax(0,1.45fr)_minmax(24rem,0.55fr)]">
            <div className="flex flex-col justify-between px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-12 xl:min-h-[39rem]">
              <h1 className="relative z-10 font-display text-[clamp(3.25rem,14vw,5.5rem)] font-semibold leading-[0.82] tracking-[-0.06em] text-accent xl:text-[clamp(5.1rem,11.5vw,11.5rem)]">
                <FoldText as="span" trigger="mount" className="block whitespace-nowrap" aria-label="Hercules">
                  HERCULES
                </FoldText>
                <span className="mt-3 block whitespace-nowrap text-fg">DE OLIVEIRA</span>
              </h1>
              <div className="mt-10 grid gap-5 border-t border-border pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="max-w-xl font-display text-xl leading-[1.12] sm:text-2xl lg:text-3xl">{dictionary.home.headline}</p>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-fg/75">{dictionary.home.subtitle}</p>
                </div>
                <ButtonLink href={`/${locale}/contact`} className="w-fit bg-accent text-[hsl(var(--surface-inverse-text))] hover:bg-accent/85">
                  {dictionary.home.ctaPrimary}
                </ButtonLink>
              </div>
            </div>
            <div className="relative min-h-[28rem] bg-muted xl:min-h-0">
              <Image
                src="/assets/profile/hercules-profile.png"
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover object-[50%_12%] saturate-100 transition duration-700 ease-out hover:scale-[1.04] hover:saturate-[1.2] hover:contrast-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-accent p-5 text-[hsl(var(--surface-inverse-text))] sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--surface-inverse-text)/0.72)]">{dictionary.home.heroCardTitle}</p>
                <p className="mt-2 text-sm leading-relaxed">{profile.summary[locale]}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="grid gap-8 border-b border-border bg-bg px-6 py-8 text-fg sm:grid-cols-[0.8fr_1.2fr] sm:px-10 sm:py-10">
          <div>
            <p className="font-display text-2xl leading-tight sm:text-2xl lg:text-5xl">{dictionary.home.heroCardTitle}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg/70 sm:text-base">{profile.summary[locale]}</p>
            <ButtonLink href="https://github.com/GodHercules" variant="ghost" external className="mt-7 border border-fg text-fg hover:bg-fg hover:text-bg">
              {dictionary.home.ctaTertiary}
              <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
          <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {board.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-fg/55">{item.label}</dt>
                <dd className="mt-2 text-base font-medium leading-snug">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
