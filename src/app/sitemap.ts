import type { MetadataRoute } from 'next';

import { designProjects } from '@/data/design-projects';
import { developmentProjects } from '@/data/development-projects';
import { locales } from '@/lib/i18n/config';
import { getAbsoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = locales.flatMap((locale) =>
    ['', '/development', '/design', '/about', '/contact', '/lab'].map((path) => ({
      url: getAbsoluteUrl(`/${locale}${path}`),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
  );

  const developmentRoutes = locales.flatMap((locale) =>
    developmentProjects.map((project) => ({
      url: getAbsoluteUrl(`/${locale}/development/${project.slug}`),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  const designRoutes = locales.flatMap((locale) =>
    designProjects.map((project) => ({
      url: getAbsoluteUrl(`/${locale}/design/${project.slug}`),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  );

  return [...staticRoutes, ...developmentRoutes, ...designRoutes];
}
