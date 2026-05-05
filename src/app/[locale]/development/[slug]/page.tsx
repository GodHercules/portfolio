import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { DevelopmentCase } from '@/components/sections/development-case';
import { developmentProjects, getDevelopmentProjectBySlug } from '@/data/development-projects';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getAbsoluteUrl, getLanguageAlternates } from '@/lib/site';

type DevelopmentDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => developmentProjects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: DevelopmentDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const project = getDevelopmentProjectBySlug(slug);
  if (!project) {
    return {};
  }

  const path = `/${locale}/development/${slug}`;
  const title = `${project.title[locale]} | Case fullstack`;
  const description = project.proof.featuredOutcome[locale] ?? project.summary[locale];

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: getLanguageAlternates((currentLocale) => `/${currentLocale}/development/${slug}`),
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
