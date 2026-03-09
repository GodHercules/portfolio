import { notFound } from 'next/navigation';

import { DevelopmentCase } from '@/components/sections/development-case';
import { getDevelopmentProjectBySlug } from '@/data/development-projects';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/i18n/config';

type DevelopmentDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function DevelopmentDetailPage({ params }: DevelopmentDetailPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const project = getDevelopmentProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <DevelopmentCase project={project} locale={locale as Locale} dictionary={getDictionary(locale as Locale)} />;
}
