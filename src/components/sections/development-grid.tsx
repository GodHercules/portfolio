'use client';

import { useMemo, useState } from 'react';

import { FilterPills } from '@/components/ui/filter-pills';
import { ProjectCard } from '@/components/ui/project-card';
import { SectionLead, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { GithubProject, TechProject } from '@/types/project';

type DevelopmentGridProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: TechProject[];
  githubProjects?: GithubProject[];
};

export function DevelopmentGrid({ locale, dictionary, projects, githubProjects = [] }: DevelopmentGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryItems = useMemo(
    () => [
      { id: 'all', label: dictionary.common.all },
      ...Object.entries(dictionary.categories.development).map(([id, label]) => ({ id, label })),
    ],
    [dictionary],
  );

  const filteredProjects = useMemo(
    () => (activeCategory === 'all' ? projects : projects.filter((project) => project.category === activeCategory)),
    [activeCategory, projects],
  );

  return (
    <div className="content-grid section-spacing">
      <SectionTitle>{dictionary.nav.development}</SectionTitle>
      <SectionLead>{dictionary.home.devDescription}</SectionLead>

      {projects.length > 0 ? (
        <>
          <div className="mt-8">
            <FilterPills items={categoryItems} activeId={activeCategory} onChange={setActiveCategory} />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                href={`/${locale}/development/${project.slug}`}
                title={project.title[locale]}
                summary={project.summary[locale]}
                image={project.cover}
                stacks={project.stack}
                tag={dictionary.categories.development[project.category]}
              />
            ))}
          </div>
        </>
      ) : null}

      {githubProjects.length > 0 ? (
        <div className="mt-14">
          <SectionTitle>{dictionary.githubSection.title}</SectionTitle>
          <SectionLead>{dictionary.githubSection.description}</SectionLead>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {githubProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                href={project.githubUrl}
                title={project.title}
                summary={project.summary}
                image="/assets/projects/lab.svg"
                stacks={project.stack}
                tag="GitHub"
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
