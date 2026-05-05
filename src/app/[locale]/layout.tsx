import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { DocumentLanguage } from '@/components/layout/document-language';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { LazyChatbot } from '@/components/layout/lazy-chatbot';
import { PageTransition } from '@/components/providers/page-transition';
import { profile } from '@/data/profile';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getAbsoluteUrl, getLanguageAlternates, siteUrl } from '@/lib/site';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);
  const path = `/${locale}`;

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    metadataBase: siteUrl,
    alternates: {
      canonical: path,
      languages: getLanguageAlternates((currentLocale) => `/${currentLocale}`),
    },
    openGraph: {
      type: 'profile',
      locale,
      siteName: 'Hercules de Oliveira Portfolio',
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: getAbsoluteUrl(path),
      images: [
        {
          url: '/assets/profile/hercules-profile.png',
          width: 1200,
          height: 1200,
          alt: 'Hercules de Oliveira',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      images: ['/assets/profile/hercules-profile.png'],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    email: profile.email,
    url: getAbsoluteUrl(`/${locale}`),
    sameAs: [profile.github, profile.linkedin],
    jobTitle:
      locale === 'pt-BR'
        ? 'Desenvolvedor Fullstack'
        : locale === 'es'
          ? 'Desarrollador Fullstack'
          : 'Fullstack Developer',
    knowsAbout: profile.specialties[locale as Locale],
  };

  return (
    <>
      <DocumentLanguage locale={locale as Locale} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header locale={locale as Locale} dictionary={dictionary} />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <LazyChatbot locale={locale as Locale} />
      <Footer dictionary={dictionary} />
    </>
  );
}
