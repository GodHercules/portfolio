import Image from 'next/image';
import { ArrowUpRight, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import { formatDate } from '@/lib/utils';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { GithubProject } from '@/types/project';

type GithubProjectsSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: GithubProject[];
};

export function GithubProjectsSection({ locale, dictionary, projects }: GithubProjectsSectionProps) {
  return (
    <Section>
      <div className="content-grid">
        <SectionTitle>{dictionary.githubSection.title}</SectionTitle>
        <SectionLead>{dictionary.githubSection.description}</SectionLead>

        {projects.length === 0 ? (
          <p className="mt-8 rounded-2xl border border-dashed border-border p-6 text-fg/70">{dictionary.githubSection.empty}</p>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.slug} className="glass overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/9] border-b border-border/70 bg-muted">
                  {project.cover ? (
                    <Image
                      src={project.cover}
                      alt={`Capa do projeto ${project.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent/20 via-transparent to-accent/10 px-4 text-center font-display text-2xl text-fg/70">
                      {project.title}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl leading-tight tracking-tight">{project.title}</h3>
                    <Badge className="gap-1">
                      <Star size={12} />
                      {project.stars}
                    </Badge>
                  </div>
                  <p className="text-sm text-fg/75">{project.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((stack) => (
                      <li key={stack} className="rounded-full bg-muted px-3 py-1 text-xs text-fg/75">
                        {stack}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <ButtonLink href={project.githubUrl} external variant="secondary">
                      GitHub
                      <ArrowUpRight size={14} />
                    </ButtonLink>
                    {project.liveUrl ? (
                      <ButtonLink href={project.liveUrl} external variant="ghost">
                        {dictionary.common.live}
                        <ArrowUpRight size={14} />
                      </ButtonLink>
                    ) : null}
                  </div>
                  <p className="mt-4 text-xs text-fg/55">
                    {dictionary.common.updatedAt} {formatDate(project.updatedAt, locale)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

