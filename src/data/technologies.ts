export type PortfolioTechnology = {
  id: string;
  name: string;
  group: 'language' | 'frontend' | 'backend' | 'data' | 'tool';
};

/**
 * Curated from the real skills declared in profile.ts.
 * Keep this list factual: it powers the animated logo/wordmark loop and any
 * future technology index without coupling the UI to a hard-coded component.
 */
export const portfolioTechnologies: PortfolioTechnology[] = [
  { id: 'python', name: 'Python', group: 'language' },
  { id: 'javascript', name: 'JavaScript', group: 'language' },
  { id: 'typescript', name: 'TypeScript', group: 'language' },
  { id: 'react', name: 'React', group: 'frontend' },
  { id: 'nextjs', name: 'Next.js', group: 'frontend' },
  { id: 'tailwindcss', name: 'TailwindCSS', group: 'frontend' },
  { id: 'nodejs', name: 'Node.js', group: 'backend' },
  { id: 'nestjs', name: 'NestJS', group: 'backend' },
  { id: 'rest', name: 'REST APIs', group: 'backend' },
  { id: 'postgresql', name: 'PostgreSQL', group: 'data' },
  { id: 'mysql', name: 'MySQL', group: 'data' },
  { id: 'sql', name: 'SQL', group: 'data' },
  { id: 'docker', name: 'Docker', group: 'tool' },
  { id: 'git', name: 'Git', group: 'tool' },
  { id: 'jest', name: 'Jest', group: 'tool' },
  { id: 'postman', name: 'Postman', group: 'tool' },
];
