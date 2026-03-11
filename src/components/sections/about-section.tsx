import Image from 'next/image';

import { Reveal } from '@/components/ui/reveal';
import { Section, SectionTitle } from '@/components/ui/section';
import type { Dictionary } from '@/lib/i18n/dictionaries';

export function AboutSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section>
      <div className="content-grid grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <Reveal>
            <SectionTitle>{dictionary.about.title}</SectionTitle>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-fg/75 sm:text-base">{dictionary.about.intro}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="glass relative max-w-xl overflow-hidden rounded-3xl">
              <Image
                src="/assets/profile/hercules-profile.png"
                alt="Hercules de Oliveira"
                width={1024}
                height={1536}
                className="h-[340px] w-full object-cover object-top sm:h-[420px]"
                priority
              />
            </div>
          </Reveal>
        </div>

        <div className="space-y-4">
          {dictionary.about.points.map((point, index) => (
            <Reveal key={point} delay={index * 0.08}>
              <div className="glass rounded-2xl p-5 text-sm leading-relaxed text-fg/75 sm:text-base">{point}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

