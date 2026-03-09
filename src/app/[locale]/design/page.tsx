import { notFound } from 'next/navigation';

import { DesignGrid } from '@/components/sections/design-grid';
import { designProjects } from '@/data/design-projects';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/i18n/config';

type DesignPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function DesignPage({ params }: DesignPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <DesignGrid locale={locale as Locale} dictionary={getDictionary(locale as Locale)} projects={designProjects} />;
}
