import { ProjectCard } from '@/components/ui/project-card';
import { ButtonLink } from '@/components/ui/button';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import type { DesignProject, TechProject } from '@/types/project';

type HomeTracksSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
  developmentProjects: TechProject[];
  designProjects: DesignProject[];
};

export function HomeTracksSection({ locale, dictionary, developmentProjects, designProjects }: HomeTracksSectionProps) {
  const dev = developmentProjects.slice(0, 2);
  const design = designProjects.slice(0, 2);

  return (
    <Section className="pt-8">
      <div className="content-grid grid gap-14 xl:grid-cols-2">
        <div>
          <SectionTitle>{dictionary.home.devTitle}</SectionTitle>
          <SectionLead>{dictionary.home.devDescription}</SectionLead>
          <div className="mt-8 space-y-5">
            {dev.map((project) => (
              <ProjectCard
                key={project.id}
                href={`/${locale}/development/${project.slug}`}
                title={project.title[locale]}
                summary={project.summary[locale]}
                image={project.cover}
                stacks={project.stack}
              />
            ))}
          </div>
          <ButtonLink href={`/${locale}/development`} variant="secondary" className="mt-6">
            {dictionary.nav.development}
          </ButtonLink>
        </div>

        <div>
          <SectionTitle>{dictionary.home.designTitle}</SectionTitle>
          <SectionLead>{dictionary.home.designDescription}</SectionLead>
          <div className="mt-8 space-y-5">
            {design.map((project) => (
              <ProjectCard
                key={project.id}
                href={`/${locale}/design/${project.slug}`}
                title={project.title[locale]}
                summary={project.summary[locale]}
                image={project.cover}
                stacks={project.tags}
              />
            ))}
          </div>
          <ButtonLink href={`/${locale}/design`} variant="secondary" className="mt-6">
            {dictionary.nav.design}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
