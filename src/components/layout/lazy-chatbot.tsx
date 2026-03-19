'use client';

import dynamic from 'next/dynamic';

import type { Locale } from '@/lib/i18n/config';

const ChatbotWidget = dynamic(() => import('@/components/layout/chatbot-widget').then((mod) => mod.ChatbotWidget), {
  ssr: false,
});

type LazyChatbotProps = {
  locale: Locale;
};

export function LazyChatbot({ locale }: LazyChatbotProps) {
  return <ChatbotWidget locale={locale} />;
}
