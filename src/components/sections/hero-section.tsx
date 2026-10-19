import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

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
    { label: 'Experiencia', value: '+3 anos em desenvolvimento full stack' },
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
    <section className="relative overflow-hidden pb-10 pt-4 sm:pb-16 sm:pt-8">
      <div className="content-grid">
        <Reveal className="overflow-hidden border-y border-border">
          <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-fg/60">
            <p className="p-5 sm:p-6">{dictionary.home.badge}</p>
            <p className="p-5 text-accent sm:p-6">{dictionary.home.availabilityLabel}</p>
          </div>
          <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.55fr)]">
            <div className="flex flex-col justify-between px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-12 lg:min-h-[39rem]">
              <h1 className="font-display text-[clamp(3.7rem,16vw,5.5rem)] font-semibold leading-[0.7] tracking-[-0.08em] text-accent lg:text-[clamp(5.1rem,11.5vw,11.5rem)]">
                HERCULES
              </h1>
              <div className="mt-2 flex items-end gap-4 sm:gap-7">
                <p className="font-display text-[clamp(2.7rem,6.4vw,6.7rem)] font-semibold leading-[0.76] tracking-[-0.06em]">DE OLIVEIRA</p>
              </div>
              <div className="mt-10 grid gap-5 border-t border-border pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="max-w-xl font-display text-2xl leading-[1.08] sm:text-3xl">{dictionary.home.headline}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-fg/70 sm:text-base">{dictionary.home.subtitle}</p>
                </div>
                <ButtonLink href={`/${locale}/contact`} className="w-fit bg-accent text-white hover:bg-accent/85">
                  {dictionary.home.ctaPrimary}
                </ButtonLink>
              </div>
            </div>
            <div className="relative min-h-[28rem] bg-muted lg:min-h-0">
              <Image
                src="/assets/profile/hercules-profile.png"
                alt={profile.name}
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover object-[50%_12%] saturate-100 transition duration-700 ease-out hover:scale-[1.04] hover:saturate-[1.2] hover:contrast-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-accent p-5 text-white sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">{dictionary.home.heroCardTitle}</p>
                <p className="mt-2 text-sm leading-relaxed">{profile.summary[locale]}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="grid gap-8 border-b border-border bg-bg px-6 py-8 text-fg sm:grid-cols-[0.8fr_1.2fr] sm:px-10 sm:py-10">
          <div>
            <p className="font-display text-3xl leading-none sm:text-5xl">{dictionary.home.heroCardTitle}</p>
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
