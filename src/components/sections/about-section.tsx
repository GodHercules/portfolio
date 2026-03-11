import Image from 'next/image';

import { Reveal } from '@/components/ui/reveal';
import { Section, SectionTitle } from '@/components/ui/section';
import type { Dictionary } from '@/lib/i18n/dictionaries';

export function AboutSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section>
      <div className="content-grid grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-x-10 lg:gap-y-7">
        <Reveal className="lg:col-start-1 lg:row-start-1">
          <SectionTitle>{dictionary.about.title}</SectionTitle>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fg/75 sm:text-base">{dictionary.about.intro}</p>
        </Reveal>

        <Reveal delay={0.05} className="lg:col-start-1 lg:row-start-2">
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-xl" />
            <div className="glass relative overflow-hidden rounded-[1.75rem] border border-border/70">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/assets/profile/hercules-profile.png"
                  alt="Hercules de Oliveira"
                  fill
                  sizes="(max-width: 768px) 92vw, 420px"
                  className="object-cover object-[50%_20%]"
                  priority
                />
              </div>
              <div className="border-t border-border/70 px-5 py-4">
                <p className="font-display text-xl leading-none text-fg">Hercules de Oliveira</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-fg/60">Software, Produto e Direcao Visual</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-4 lg:col-start-2 lg:row-start-2 lg:self-center">
          {dictionary.about.points.map((point, index) => (
            <Reveal key={point} delay={index * 0.08}>
              <div className="glass rounded-2xl border border-border/70 p-5 text-sm leading-relaxed text-fg/75 transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-fg sm:text-base">
                {point}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
