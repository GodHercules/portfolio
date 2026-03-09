'use client';

import { MessageCircle, Send, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { profile } from '@/data/profile';
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
};

const copy: Record<Locale, BotCopy> = {
  'pt-BR': {
    title: 'Assistente Hercules',
    subtitle: 'Tire dúvidas rápidas sobre perfil, projetos e contato.',
    placeholder: 'Ex: quais stacks ele domina?',
    send: 'Enviar',
    open: 'Abrir chat',
    suggestions: ['Quais tecnologias ele usa?', 'Como entrar em contato?', 'Ele faz design e desenvolvimento?'],
    greeting:
      'Olá. Posso responder dúvidas sobre a atuação do Hercules em desenvolvimento, produto digital e design gráfico.',
    fallback:
      'Boa pergunta. Posso detalhar tecnologias, projetos, processos e contato. Se preferir, fale direto por e-mail ou WhatsApp.',
  },
  en: {
    title: 'Hercules Assistant',
    subtitle: 'Ask quick questions about profile, projects and contact.',
    placeholder: 'Ex: what tech stack does he use?',
    send: 'Send',
    open: 'Open chat',
    suggestions: ['What technologies does he use?', 'How can I get in touch?', 'Does he do design and development?'],
    greeting:
      'Hello. I can answer questions about Hercules across software development, digital product and graphic design.',
    fallback:
      'Great question. I can explain technologies, projects, process and contact options. You can also reach him by email or WhatsApp.',
  },
  es: {
    title: 'Asistente Hercules',
    subtitle: 'Haz preguntas rápidas sobre perfil, proyectos y contacto.',
    placeholder: 'Ej: qué stack domina?',
    send: 'Enviar',
    open: 'Abrir chat',
    suggestions: ['Qué tecnologías utiliza?', 'Cómo puedo contactarlo?', 'Hace diseño y desarrollo?'],
    greeting:
      'Hola. Puedo responder dudas sobre la actuación de Hercules en desarrollo, producto digital y diseño gráfico.',
    fallback:
      'Buena pregunta. Puedo detallar tecnologías, proyectos, proceso y contacto. También puedes hablar por correo o WhatsApp.',
  },
};

function replyFor(locale: Locale, question: string) {
  const q = question.toLowerCase();

  if (q.includes('stack') || q.includes('tecnolog') || q.includes('tech') || q.includes('ferrament')) {
    if (locale === 'en') return 'He works mainly with React, Next.js, TypeScript, Tailwind CSS, Node.js and modern frontend architecture.';
    if (locale === 'es') return 'Trabaja principalmente con React, Next.js, TypeScript, Tailwind CSS, Node.js y arquitectura frontend moderna.';
    return 'Ele trabalha principalmente com React, Next.js, TypeScript, Tailwind CSS, Node.js e arquitetura frontend moderna.';
  }

  if (q.includes('contato') || q.includes('contact') || q.includes('email') || q.includes('whats') || q.includes('telefone')) {
    if (locale === 'en') return `You can reach Hercules at ${profile.email} or by phone/WhatsApp at ${profile.phoneDisplay}.`;
    if (locale === 'es') return `Puedes contactar a Hercules en ${profile.email} o por teléfono/WhatsApp en ${profile.phoneDisplay}.`;
    return `Você pode falar com o Hercules pelo e-mail ${profile.email} ou no telefone/WhatsApp ${profile.phoneDisplay}.`;
  }

  if (q.includes('design') || q.includes('ui') || q.includes('ux') || q.includes('gráfico') || q.includes('grafico')) {
    if (locale === 'en') return 'Yes. He has a hybrid profile combining software engineering, UI/UX and graphic design with premium visual direction.';
    if (locale === 'es') return 'Sí. Tiene un perfil híbrido que combina ingeniería de software, UI/UX y diseño gráfico con dirección visual premium.';
    return 'Sim. Ele tem perfil híbrido e combina engenharia de software, UI/UX e design gráfico com direção visual premium.';
  }

  if (q.includes('projeto') || q.includes('project') || q.includes('case')) {
    if (locale === 'en') return 'His projects are organized into development and graphic design, with detailed case pages including context, challenges and solutions.';
    if (locale === 'es') return 'Sus proyectos están organizados entre desarrollo y diseño gráfico, con casos detallados sobre contexto, desafíos y soluciones.';
    return 'Os projetos dele são organizados em desenvolvimento e design gráfico, com páginas de case detalhando contexto, desafios e soluções.';
  }

  return copy[locale].fallback;
}

export function ChatbotWidget({ locale }: ChatbotProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const t = copy[locale];

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ id: 'greeting', role: 'bot', text: t.greeting }]);
    }
  }, [messages.length, t.greeting]);

  function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMessage: Message = { id: `${Date.now()}-u`, role: 'user', text };
    const botMessage: Message = { id: `${Date.now()}-b`, role: 'bot', text: replyFor(locale, text) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
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
          'absolute bottom-16 right-0 w-[min(92vw,380px)] overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition',
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
                'max-w-[90%] rounded-2xl px-3 py-2 text-sm',
                message.role === 'bot' ? 'bg-muted text-fg' : 'ml-auto bg-fg text-bg',
              )}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="space-y-2 border-t border-border p-3">
          <div className="flex flex-wrap gap-2">
            {t.suggestions.map((suggestion) => (
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
