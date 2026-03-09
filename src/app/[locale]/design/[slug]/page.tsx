import { notFound } from 'next/navigation';

import { DesignCase } from '@/components/sections/design-case';
import { getDesignProjectBySlug } from '@/data/design-projects';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/i18n/config';

type DesignDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function DesignDetailPage({ params }: DesignDetailPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const project = getDesignProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <DesignCase project={project} locale={locale as Locale} dictionary={getDictionary(locale as Locale)} />;
}
