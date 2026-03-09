import { AboutSection } from '@/components/sections/about-section';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section';
import { GithubProjectsSection } from '@/components/sections/github-projects-section';
import { HeroSection } from '@/components/sections/hero-section';
import { HomeTracksSection } from '@/components/sections/home-tracks-section';
import { designProjects } from '@/data/design-projects';
import { getGithubProjects } from '@/lib/github';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';

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
      <FeaturedProjectsSection
        locale={locale as Locale}
        dictionary={dictionary}
        developmentProjects={[]}
        designProjects={designProjects}
      />
      <HomeTracksSection
        locale={locale as Locale}
        dictionary={dictionary}
        developmentProjects={[]}
        designProjects={designProjects}
      />
      <GithubProjectsSection locale={locale as Locale} dictionary={dictionary} projects={githubProjects} />
      <AboutSection dictionary={dictionary} />
    </>
  );
}
