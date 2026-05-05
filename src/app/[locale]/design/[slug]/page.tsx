import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { DesignCase } from '@/components/sections/design-case';
import { designProjects, getDesignProjectBySlug } from '@/data/design-projects';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getAbsoluteUrl, getLanguageAlternates } from '@/lib/site';

type DesignDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => designProjects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: DesignDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const project = getDesignProjectBySlug(slug);
  if (!project) {
    return {};
  }

  const path = `/${locale}/design/${slug}`;
  const title = `${project.title[locale]} | Design case`;
  const description = project.summary[locale];

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: getLanguageAlternates((currentLocale) => `/${currentLocale}/design/${slug}`),
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: getAbsoluteUrl(path),
      images: [
        {
          url: project.cover,
          width: 1200,
          height: 750,
          alt: project.title[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.cover],
    },
  };
}

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
