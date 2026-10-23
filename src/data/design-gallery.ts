import { designProjects } from '@/data/design-projects';
import type { Locale } from '@/lib/i18n/config';
import type { LocalizedText } from '@/types/project';

export type DesignGalleryItem = {
  id: string;
  title: LocalizedText;
  category: DesignGalleryCategory;
  description: LocalizedText;
  image: string;
  alt: LocalizedText;
  tags: string[];
  order: number;
  featured?: boolean;
};

export type DesignGalleryCategory =
  | 'social-media'
  | 'promotional'
  | 'corporate'
  | 'brand-identity'
  | 'visual-studies';

/**
 * Gallery data is derived from the existing design projects so adding an item
 * still happens in one source of truth: src/data/design-projects.ts.
 * Optional metadata is deliberately omitted when it is not present in the
 * portfolio content.
 */
export const designGalleryItems: DesignGalleryItem[] = designProjects.map((project, index) => ({
  id: project.id,
  title: project.title,
  category: project.category,
  description: project.summary,
  image: project.cover,
  alt: project.title,
  tags: project.tags,
  order: index + 1,
  featured: project.featured,
}));

export function getDesignGalleryLabel(item: DesignGalleryItem, locale: Locale) {
  return `${item.title[locale]} — ${item.category}`;
}
