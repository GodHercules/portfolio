'use client';

import { MessageCircle, Send, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { getPortfolioAssistantReply } from '@/lib/portfolio-assistant';
import type { Locale } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

type ChatbotProps = {
  locale: Locale;
};

type Message = {
  id: string;
  role: 'user' | 'bot';
  text: string;
};

type BotCopy = {
  title: string;
  subtitle: string;
  placeholder: string;
  send: string;
  open: string;
  suggestions: string[];
  greeting: string;
  fallback: string;
  relatedLabel: string;
};

const copy: Record<Locale, BotCopy> = {
  'pt-BR': {
    title: 'Assistente Hercules',
    subtitle: 'Consulte stack, projetos, processo, integracoes, IA aplicada, laboratorio GitHub e contato.',
    placeholder: 'Ex: quais stacks ele domina?',
    send: 'Enviar',
    open: 'Abrir chat',
    suggestions: ['Quais tecnologias ele usa?', 'Como ele costuma trabalhar?', 'Como ele usa IA e integracoes?', 'Fale sobre Atlas Platform'],
    greeting:
      'Ola. Este assistente consulta os dados do portfolio para responder sobre stack, projetos, processo, integracoes, IA aplicada, GitHub e contato.',
    fallback: 'Boa pergunta. Posso detalhar tecnologias, projetos, processo, integracoes, IA aplicada, laboratorio GitHub e contato.',
    relatedLabel: 'Perguntas sugeridas',
  },
  en: {
    title: 'Hercules Assistant',
    subtitle: 'Ask about stack, projects, process, integrations, applied AI, GitHub lab and contact.',
    placeholder: 'Ex: what tech stack does he use?',
    send: 'Send',
    open: 'Open chat',
    suggestions: ['What technologies does he use?', 'How does he usually work?', 'How does he use AI and integrations?', 'Tell me about Atlas Platform'],
    greeting: 'Hello. This assistant reads portfolio data to answer about stack, projects, process, integrations, applied AI, GitHub lab and contact.',
    fallback: 'Good question. I can explain technologies, projects, process, integrations, applied AI, GitHub lab and contact options.',
    relatedLabel: 'Suggested follow-ups',
  },
  es: {
    title: 'Asistente Hercules',
    subtitle: 'Pregunta por stack, proyectos, proceso, integraciones, IA aplicada, laboratorio GitHub y contacto.',
    placeholder: 'Ej: que stack domina?',
    send: 'Enviar',
    open: 'Abrir chat',
    suggestions: ['Que tecnologias utiliza?', 'Como suele trabajar?', 'Como usa IA e integraciones?', 'Cuentame sobre Atlas Platform'],
    greeting: 'Hola. Este asistente consulta los datos del portafolio para responder sobre stack, proyectos, proceso, integraciones, IA aplicada, GitHub y contacto.',
    fallback: 'Buena pregunta. Puedo detallar tecnologias, proyectos, proceso, integraciones, IA aplicada, laboratorio GitHub y contacto.',
    relatedLabel: 'Preguntas sugeridas',
  },
};

export function ChatbotWidget({ locale }: ChatbotProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [relatedQuestions, setRelatedQuestions] = useState<string[]>([]);
  const t = copy[locale];

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ id: 'greeting', role: 'bot', text: t.greeting }]);
      setRelatedQuestions(t.suggestions);
    }
  }, [messages.length, t.greeting, t.suggestions]);

  function sendMessage(text: string) {
    if (!text.trim()) return;

    const answer = getPortfolioAssistantReply(locale, text);
    const userMessage: Message = { id: `${Date.now()}-u`, role: 'user', text };
    const botMessage: Message = { id: `${Date.now()}-b`, role: 'bot', text: answer.text || t.fallback };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setRelatedQuestions(answer.related ?? t.suggestions);
    setInput('');
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-fg text-bg shadow-soft transition hover:scale-[1.03]"
        aria-label={t.open}
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
      </button>

      <div
        className={cn(
          'absolute bottom-16 right-0 w-[min(92vw,400px)] overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition',
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
        )}
      >
        <div className="border-b border-border p-4">
          <p className="font-medium">{t.title}</p>
          <p className="mt-1 text-xs text-fg/65">{t.subtitle}</p>
        </div>

        <div className="max-h-[320px] space-y-3 overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed',
                message.role === 'bot' ? 'bg-muted text-fg' : 'ml-auto bg-fg text-bg',
              )}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="space-y-2 border-t border-border p-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-fg/45">{t.relatedLabel}</p>
          <div className="flex flex-wrap gap-2">
            {relatedQuestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => sendMessage(suggestion)}
                className="rounded-full border border-border px-3 py-1 text-xs text-fg/75 hover:bg-muted"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
            className="flex gap-2"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t.placeholder}
              className="h-10 flex-1 rounded-xl border border-border bg-bg px-3 text-sm outline-none ring-accent transition focus:ring-2"
            />
            <button
              type="submit"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-fg text-bg"
              aria-label={t.send}
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
