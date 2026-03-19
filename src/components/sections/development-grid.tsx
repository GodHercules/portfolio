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
  const [activeCapability, setActiveCapability] = useState('all');

  const categoryItems = useMemo(
    () => [
      { id: 'all', label: dictionary.common.all },
      ...Object.entries(dictionary.categories.development).map(([id, label]) => ({ id, label })),
    ],
    [dictionary],
  );

  const capabilityItems = useMemo(() => {
    const capabilities = [...new Set(projects.flatMap((project) => project.proof.capabilities))].sort();

    return [{ id: 'all', label: dictionary.common.all }, ...capabilities.map((capability) => ({ id: capability, label: capability }))];
  }, [dictionary.common.all, projects]);

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const categoryMatch = activeCategory === 'all' || project.category === activeCategory;
        const capabilityMatch = activeCapability === 'all' || project.proof.capabilities.includes(activeCapability);

        return categoryMatch && capabilityMatch;
      }),
    [activeCapability, activeCategory, projects],
  );

  const capabilityTitle =
    locale === 'en' ? 'Capability filter' : locale === 'es' ? 'Filtro por capacidad' : 'Filtro por capacidade';

  return (
    <div className="content-grid section-spacing">
      <SectionTitle>{dictionary.nav.development}</SectionTitle>
      <SectionLead>{dictionary.home.devDescription}</SectionLead>

      {projects.length > 0 ? (
        <>
          <div className="mt-8">
            <FilterPills items={categoryItems} activeId={activeCategory} onChange={setActiveCategory} />
          </div>
          <div className="mt-5">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-fg/45">{capabilityTitle}</p>
            <FilterPills items={capabilityItems} activeId={activeCapability} onChange={setActiveCapability} />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  href={`/${locale}/development/${project.slug}`}
                  title={project.title[locale]}
                  summary={project.proof.featuredOutcome[locale]}
                  image={project.cover}
                  stacks={project.stack}
                  tag={dictionary.categories.development[project.category]}
                />
              ))
            ) : (
              <div className="glass rounded-3xl border border-border/70 p-6 text-sm leading-relaxed text-fg/70 md:col-span-2">
                {locale === 'en'
                  ? 'No case matches this combination yet. Try another category or capability to inspect a different proof surface.'
                  : locale === 'es'
                    ? 'Ningun caso coincide con esta combinacion por ahora. Prueba otra categoria o capacidad para ver otra superficie de prueba.'
                    : 'Nenhum case combina com esse recorte por enquanto. Tente outra categoria ou capacidade para ver outra superficie de prova.'}
              </div>
            )}
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
