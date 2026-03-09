import { ProjectCard } from '@/components/ui/project-card';
import { Section, SectionLead, SectionTitle } from '@/components/ui/section';
import type { DesignProject, TechProject } from '@/types/project';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

type FeaturedProjectsSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
  developmentProjects: TechProject[];
  designProjects: DesignProject[];
};

export function FeaturedProjectsSection({
  locale,
  dictionary,
  developmentProjects,
  designProjects,
}: FeaturedProjectsSectionProps) {
  const featured = [
    ...developmentProjects.filter((project) => project.featured).map((project) => ({
      href: `/${locale}/development/${project.slug}`,
      title: project.title[locale],
      summary: project.summary[locale],
      image: project.cover,
      stack: project.stack,
      tag: dictionary.nav.development,
    })),
    ...designProjects.filter((project) => project.featured).map((project) => ({
      href: `/${locale}/design/${project.slug}`,
      title: project.title[locale],
      summary: project.summary[locale],
      image: project.cover,
      stack: project.tags,
      tag: dictionary.nav.design,
    })),
  ].slice(0, 4);

  return (
    <Section>
      <div className="content-grid">
        <SectionTitle>{dictionary.home.featuredTitle}</SectionTitle>
        <SectionLead>{dictionary.home.featuredDescription}</SectionLead>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard
              key={project.href}
              href={project.href}
              title={project.title}
              summary={project.summary}
              image={project.image}
              stacks={project.stack}
              tag={project.tag}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
