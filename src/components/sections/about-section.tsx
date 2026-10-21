import Image from 'next/image';

import { Reveal } from '@/components/ui/reveal';
import { Section, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const roleByLocale: Record<Locale, string> = {
  'pt-BR': 'Desenvolvedor Full Stack Pleno',
  en: 'Mid-level Full Stack Developer',
  es: 'Desarrollador Full Stack Pleno',
};

type AboutSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function AboutSection({ locale, dictionary }: AboutSectionProps) {
  return (
    <Section>
      <div className="content-grid grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-x-10 lg:gap-y-7">
        <Reveal className="lg:col-start-1 lg:row-start-1">
          <SectionTitle as="h1">{dictionary.about.title}</SectionTitle>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fg/75 sm:text-base">{dictionary.about.intro}</p>
        </Reveal>

        <Reveal delay={0.05} className="lg:col-start-1 lg:row-start-2">
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0">
            <div className="glass relative overflow-hidden rounded-[1.75rem]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/assets/profile/hercules-profile.png"
                  alt="Hercules de Oliveira"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 92vw, 420px"
                  className="object-cover object-[50%_20%]"
                />
              </div>
              <div className="bg-accent px-5 py-4 text-white">
                <p className="font-display text-xl leading-none text-white">Hercules de Oliveira</p>
                <p className="mt-2 text-sm text-white/80">{roleByLocale[locale]}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-4 lg:col-start-2 lg:row-start-2 lg:self-center">
          {dictionary.about.points.map((point, index) => (
            <Reveal key={point} delay={index * 0.08}>
              <div className="glass bg-muted/70 p-5 text-base leading-relaxed text-fg/80 transition hover:-translate-y-0.5 hover:text-fg">
                {point}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
