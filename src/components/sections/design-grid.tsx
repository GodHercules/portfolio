'use client';

import { useMemo, useState } from 'react';

import { FilterPills } from '@/components/ui/filter-pills';
import { ProjectCard } from '@/components/ui/project-card';
import { SectionLead, SectionTitle } from '@/components/ui/section';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { DesignProject } from '@/types/project';

type DesignGridProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: DesignProject[];
};

export function DesignGrid({ locale, dictionary, projects }: DesignGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryItems = useMemo(
    () => [
      { id: 'all', label: dictionary.common.all },
      ...Object.entries(dictionary.categories.design).map(([id, label]) => ({ id, label })),
    ],
    [dictionary],
  );

  const filteredProjects = useMemo(
    () => (activeCategory === 'all' ? projects : projects.filter((project) => project.category === activeCategory)),
    [activeCategory, projects],
  );

  return (
    <div className="content-grid section-spacing">
      <SectionTitle>{dictionary.nav.design}</SectionTitle>
      <SectionLead>{dictionary.home.designDescription}</SectionLead>

      <div className="mt-8">
        <FilterPills items={categoryItems} activeId={activeCategory} onChange={setActiveCategory} />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            href={`/${locale}/design/${project.slug}`}
            title={project.title[locale]}
            summary={project.summary[locale]}
            image={project.cover}
            stacks={project.tags}
            tag={dictionary.categories.design[project.category]}
          />
        ))}
      </div>
    </div>
  );
}
