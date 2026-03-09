import { notFound } from 'next/navigation';

import { AboutSection } from '@/components/sections/about-section';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/i18n/config';

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <AboutSection dictionary={getDictionary(locale as Locale)} />;
}
