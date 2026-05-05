import type { Metadata } from 'next';
import { Fraunces, Sora } from 'next/font/google';
import { headers } from 'next/headers';

import '@/app/globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { defaultLocale, isLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getAbsoluteUrl, siteUrl } from '@/lib/site';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
});

const defaultDictionary = getDictionary(defaultLocale);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: 'Hercules de Oliveira Portfolio',
  title: {
    default: defaultDictionary.meta.title,
    template: '%s | Hercules de Oliveira',
  },
  description: defaultDictionary.meta.description,
  authors: [{ name: 'Hercules de Oliveira', url: getAbsoluteUrl(`/${defaultLocale}`) }],
  creator: 'Hercules de Oliveira',
  openGraph: {
    type: 'website',
    siteName: 'Hercules de Oliveira Portfolio',
    title: defaultDictionary.meta.title,
    description: defaultDictionary.meta.description,
    url: getAbsoluteUrl(`/${defaultLocale}`),
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
    title: defaultDictionary.meta.title,
    description: defaultDictionary.meta.description,
    images: ['/assets/profile/hercules-profile.png'],
  },
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const requestHeaders = await headers();
  const headerLocale = requestHeaders.get('x-portfolio-locale');
  const locale = isLocale(headerLocale ?? '') ? (headerLocale as Locale) : defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${sora.variable} ${fraunces.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
