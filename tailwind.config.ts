import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg))',
        fg: 'hsl(var(--fg))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))',
        card: 'hsl(var(--card))',
        accent: 'hsl(var(--accent))',
        accentSoft: 'hsl(var(--accent-soft))',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 40px -20px rgba(15, 23, 42, 0.25)',
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 15% 10%, hsl(var(--accent-soft) / .35), transparent 38%), radial-gradient(circle at 80% 30%, hsl(var(--accent-soft) / .2), transparent 35%), radial-gradient(circle at 60% 90%, hsl(var(--accent-soft) / .16), transparent 30%)",
      },
    },
  },
  plugins: [],
};

export default config;
