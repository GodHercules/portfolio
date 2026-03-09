import { notFound } from 'next/navigation';

import { DevelopmentGrid } from '@/components/sections/development-grid';
import { getGithubProjects } from '@/lib/github';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/i18n/config';

type DevelopmentPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function DevelopmentPage({ params }: DevelopmentPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const githubProjects = await getGithubProjects({ locale: locale as Locale });

  return (
    <DevelopmentGrid
      locale={locale as Locale}
      dictionary={getDictionary(locale as Locale)}
      projects={[]}
      githubProjects={githubProjects}
    />
  );
}
