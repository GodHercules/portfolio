import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Section, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { TechProject } from '@/types/project';

type DevelopmentCaseProps = {
  project: TechProject;
  locale: Locale;
  dictionary: Dictionary;
};

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass rounded-2xl p-5">
      <h3 className="font-medium text-fg">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-fg/75">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}

export function DevelopmentCase({ project, locale, dictionary }: DevelopmentCaseProps) {
  return (
    <Section>
      <div className="content-grid">
        <ButtonLink href={`/${locale}/development`} variant="ghost" className="mb-5">
          {dictionary.common.back}
        </ButtonLink>

        <Badge>{dictionary.categories.development[project.category]}</Badge>
        <SectionTitle>{project.title[locale]}</SectionTitle>
        <p className="mt-4 max-w-3xl text-sm text-fg/75 sm:text-base">{project.summary[locale]}</p>

        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-3xl border border-border bg-muted">
          <Image src={project.cover} alt={project.title[locale]} fill className="object-cover" sizes="100vw" />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-5">
              <h3 className="font-medium">{dictionary.projectPage.context}</h3>
              <p className="mt-2 text-sm text-fg/75">{project.body.context[locale]}</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <h3 className="font-medium">{dictionary.projectPage.problem}</h3>
              <p className="mt-2 text-sm text-fg/75">{project.body.problem[locale]}</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <h3 className="font-medium">{dictionary.projectPage.objective}</h3>
              <p className="mt-2 text-sm text-fg/75">{project.body.objective[locale]}</p>
            </div>
          </article>

          <aside className="glass rounded-2xl p-5">
            <h3 className="font-medium text-fg">Stack</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="rounded-full bg-muted px-3 py-1 text-xs text-fg/75">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-3 text-sm">
              {project.githubUrl ? (
                <Link href={project.githubUrl} className="block rounded-xl border border-border px-3 py-2 hover:bg-muted" target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              ) : null}
              {project.liveUrl ? (
                <Link href={project.liveUrl} className="block rounded-xl border border-border px-3 py-2 hover:bg-muted" target="_blank" rel="noreferrer">
                  {dictionary.common.live}
                </Link>
              ) : null}
            </div>
          </aside>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ListBlock title={dictionary.projectPage.features} items={project.body.features[locale]} />
          <ListBlock title={dictionary.projectPage.technicalChallenges} items={project.body.technicalChallenges[locale]} />
          <ListBlock title={dictionary.projectPage.architectureDecisions} items={project.body.architectureDecisions[locale]} />
          <ListBlock title={dictionary.projectPage.implementedSolutions} items={project.body.implementedSolutions[locale]} />
          <ListBlock title={dictionary.projectPage.learnings} items={project.body.learnings[locale]} />
          <ListBlock title={dictionary.projectPage.futureImprovements} items={project.body.futureImprovements[locale]} />
        </div>
      </div>
    </Section>
  );
}
