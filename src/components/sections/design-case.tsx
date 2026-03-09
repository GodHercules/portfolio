import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Section, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { DesignProject } from '@/types/project';

type DesignCaseProps = {
  project: DesignProject;
  locale: Locale;
  dictionary: Dictionary;
};

export function DesignCase({ project, locale, dictionary }: DesignCaseProps) {
  return (
    <Section>
      <div className="content-grid">
        <ButtonLink href={`/${locale}/design`} variant="ghost" className="mb-5">
          {dictionary.common.back}
        </ButtonLink>

        <Badge>{dictionary.categories.design[project.category]}</Badge>
        <SectionTitle>{project.title[locale]}</SectionTitle>
        <p className="mt-4 max-w-3xl text-sm text-fg/75 sm:text-base">{project.summary[locale]}</p>

        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-3xl border border-border bg-muted">
          <Image src={project.cover} alt={project.title[locale]} fill className="object-cover" sizes="100vw" />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <article className="space-y-5">
            <div className="glass rounded-2xl p-5">
              <h3 className="font-medium">{dictionary.projectPage.context}</h3>
              <p className="mt-2 text-sm text-fg/75">{project.details.context[locale]}</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <h3 className="font-medium">{dictionary.projectPage.visualDirection}</h3>
              <p className="mt-2 text-sm text-fg/75">{project.details.direction[locale]}</p>
            </div>
          </article>

          <aside className="glass rounded-2xl p-5">
            <h3 className="font-medium">{dictionary.projectPage.tags}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-fg/75">
                  {tag}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-medium">{dictionary.projectPage.results}</h3>
            <ul className="mt-3 space-y-2 text-sm text-fg/75">
              {project.details.results[locale].map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </Section>
  );
}
