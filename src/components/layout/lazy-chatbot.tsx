'use client';

import dynamic from 'next/dynamic';

import type { Locale } from '@/lib/i18n/config';

const ChatbotWidget = dynamic(() => import('@/components/layout/chatbot-widget').then((mod) => mod.ChatbotWidget), {
  ssr: false,
  loading: () => <div className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full bg-muted" aria-hidden="true" />,
});

type LazyChatbotProps = {
  locale: Locale;
};

export function LazyChatbot({ locale }: LazyChatbotProps) {
  return <ChatbotWidget locale={locale} />;
}
