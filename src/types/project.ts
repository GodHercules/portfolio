import type { Locale } from '@/lib/i18n/config';

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type ProjectMetric = {
  value: string;
  label: LocalizedText;
  detail?: LocalizedText;
};

export type ProjectArchitecturePillar = {
  title: LocalizedText;
  summary: LocalizedText;
};

export type ProjectProof = {
  role: LocalizedText;
  engagement: LocalizedText;
  timeline: LocalizedText;
  team: LocalizedText;
  responsibilities: LocalizedList;
  capabilities: string[];
  constraints: LocalizedList;
  outcomes: LocalizedList;
  decisionSummary: LocalizedText;
  architectureSummary: LocalizedText;
  featuredOutcome: LocalizedText;
  metrics: ProjectMetric[];
  architecturePillars: ProjectArchitecturePillar[];
};

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
  proof: ProjectProof;
  body: {
    context: LocalizedText;
    problem: LocalizedText;
    objective: LocalizedText;
    features: LocalizedList;
    technicalChallenges: LocalizedList;
    architectureDecisions: LocalizedList;
    implementedSolutions: LocalizedList;
    learnings: LocalizedList;
    futureImprovements: LocalizedList;
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
    results: LocalizedList;
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
