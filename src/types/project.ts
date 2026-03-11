import type { Locale } from '@/lib/i18n/config';

export type LocalizedText = Record<Locale, string>;

export type TechProject = {
  id: string;
  slug: string;
  category: 'web-apps' | 'automations' | 'internal-systems' | 'landing-pages' | 'technical-studies' | 'utility-tools';
  title: LocalizedText;
  summary: LocalizedText;
  cover: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  body: {
    context: LocalizedText;
    problem: LocalizedText;
    objective: LocalizedText;
    features: Record<Locale, string[]>;
    technicalChallenges: Record<Locale, string[]>;
    architectureDecisions: Record<Locale, string[]>;
    implementedSolutions: Record<Locale, string[]>;
    learnings: Record<Locale, string[]>;
    futureImprovements: Record<Locale, string[]>;
  };
};

export type DesignProject = {
  id: string;
  slug: string;
  category: 'social-media' | 'promotional' | 'corporate' | 'brand-identity' | 'visual-studies';
  title: LocalizedText;
  summary: LocalizedText;
  cover: string;
  tags: string[];
  featured?: boolean;
  details: {
    context: LocalizedText;
    direction: LocalizedText;
    results: Record<Locale, string[]>;
  };
};

export type GithubRepository = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
  archived: boolean;
  owner?: {
    login: string;
  };
};

export type GithubProject = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  cover?: string;
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  updatedAt: string;
};
