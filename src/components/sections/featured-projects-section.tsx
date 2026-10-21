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
      summary: project.proof.featuredOutcome[locale],
      image: project.slug === 'atlas-platform' ? '/assets/projects/atlas-dashboard.svg' : '/assets/projects/flow-automation.svg',
      previewImages:
        project.slug === 'atlas-platform'
          ? ['/assets/projects/atlas-dashboard.svg', project.cover, '/assets/projects/hub.svg']
          : ['/assets/projects/flow-automation.svg', project.cover, '/assets/projects/flow.svg'],
      stack: project.stack,
      tag: dictionary.nav.development,
      proofItems: [
        { label: dictionary.projectPage.problem, value: project.body.problem[locale] },
        { label: locale === 'en' ? 'Decision' : locale === 'es' ? 'Decision' : 'Decisao', value: project.proof.decisionSummary[locale] },
        { label: dictionary.projectPage.results, value: project.proof.outcomes[locale][0] },
      ],
    })),
    ...designProjects.filter((project) => project.featured).map((project) => ({
      href: `/${locale}/design/${project.slug}`,
      title: project.title[locale],
      summary: project.summary[locale],
      image: project.slug === 'nova-brand-system' ? '/assets/projects/nova-brand-system.svg' : '/assets/projects/social-campaign.svg',
      previewImages:
        project.slug === 'nova-brand-system'
          ? ['/assets/projects/nova-brand-system.svg', project.cover, '/assets/projects/design-brand.svg']
          : ['/assets/projects/social-campaign.svg', project.cover, '/assets/projects/design-social.svg'],
      stack: project.tags,
      tag: dictionary.nav.design,
      proofItems: [
        { label: dictionary.projectPage.context, value: project.details.context[locale] },
        { label: dictionary.projectPage.visualDirection, value: project.details.direction[locale] },
        { label: dictionary.projectPage.results, value: project.details.results[locale][0] },
      ],
    })),
  ].slice(0, 4);

  return (
    <Section className="bg-muted/40 py-16 sm:py-24">
      <div className="content-grid">
        <div className="grid gap-5 border-b border-border pb-7 md:grid-cols-[1fr_auto] md:items-end">
          <div>

            <SectionTitle className="sm:text-2xl lg:text-4xl">{dictionary.home.featuredTitle}</SectionTitle>
          </div>
          <SectionLead>{dictionary.home.featuredDescription}</SectionLead>
        </div>

        <div className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard
              key={project.href}
              href={project.href}
              title={project.title}
              summary={project.summary}
              image={project.image}
              previewImages={project.previewImages}
              stacks={project.stack}
              tag={project.tag}
              proofItems={project.proofItems}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
