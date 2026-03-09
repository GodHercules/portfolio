import { Reveal } from '@/components/ui/reveal';
import { Section, SectionTitle } from '@/components/ui/section';
import type { Dictionary } from '@/lib/i18n/dictionaries';

export function AboutSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section>
      <div className="content-grid grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <SectionTitle>{dictionary.about.title}</SectionTitle>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-fg/75 sm:text-base">{dictionary.about.intro}</p>
        </Reveal>

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
