import { notFound } from 'next/navigation';

import { AboutSection } from '@/components/sections/about-section';
import { BuildSurfacesSection } from '@/components/sections/build-surfaces-section';
import { CapabilityProofSection } from '@/components/sections/capability-proof-section';
import { CareerSnapshotSection } from '@/components/sections/career-snapshot-section';
import { ClosingCtaSection } from '@/components/sections/closing-cta-section';
import { EvidenceStripSection } from '@/components/sections/evidence-strip-section';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section';
import { FullstackProofSection } from '@/components/sections/fullstack-proof-section';
import { GithubProjectsSection } from '@/components/sections/github-projects-section';
import { HeroSection } from '@/components/sections/hero-section';
import { HomeTracksSection } from '@/components/sections/home-tracks-section';
import { LabSignalsSection } from '@/components/sections/lab-signals-section';
import { ProcessSection } from '@/components/sections/process-section';
import { TeamCollaborationSection } from '@/components/sections/team-collaboration-section';
import { developmentProjects } from '@/data/development-projects';
import { designProjects } from '@/data/design-projects';
import { getGithubProjects } from '@/lib/github';
import { isLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const githubProjects = await getGithubProjects({ locale: locale as Locale });

  return (
    <>
      <HeroSection locale={locale as Locale} dictionary={dictionary} />
      <EvidenceStripSection locale={locale as Locale} projects={developmentProjects} />
      <FeaturedProjectsSection
        locale={locale as Locale}
        dictionary={dictionary}
        developmentProjects={developmentProjects}
        designProjects={designProjects}
      />
      <FullstackProofSection locale={locale as Locale} />
      <CareerSnapshotSection locale={locale as Locale} />
      <CapabilityProofSection locale={locale as Locale} />
      <BuildSurfacesSection locale={locale as Locale} projects={developmentProjects} />
      <ProcessSection locale={locale as Locale} />
      <TeamCollaborationSection locale={locale as Locale} />
      <HomeTracksSection
        locale={locale as Locale}
        dictionary={dictionary}
        developmentProjects={developmentProjects}
        designProjects={designProjects}
      />
      <LabSignalsSection locale={locale as Locale} />
      <GithubProjectsSection locale={locale as Locale} dictionary={dictionary} projects={githubProjects} />
      <AboutSection locale={locale as Locale} dictionary={dictionary} />
      <ClosingCtaSection locale={locale as Locale} />
    </>
  );
}
