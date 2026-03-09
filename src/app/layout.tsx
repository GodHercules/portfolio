import type { Metadata } from 'next';
import { Fraunces, Sora } from 'next/font/google';

import '@/app/globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Hercules de Oliveira | Portfolio',
  description: 'Portfolio premium de desenvolvimento e design gráfico.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${sora.variable} ${fraunces.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
