import { notFound } from 'next/navigation';

import { ContactSection } from '@/components/sections/contact-section';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/i18n/config';

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <ContactSection dictionary={getDictionary(locale as Locale)} />;
}
