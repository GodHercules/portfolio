'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

type ProgressState = 'idle' | 'loading' | 'complete';

export function RouteProgress() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const mountedRef = useRef(false);
  const timersRef = useRef<number[]>([]);
  const [state, setState] = useState<ProgressState>('idle');
  const [progress, setProgress] = useState(0);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  }, []);

  const start = useCallback(() => {
    clearTimers();
    setProgress(0.16);
    setState('loading');
    timersRef.current = [
      window.setTimeout(() => setProgress(0.52), 220),
      window.setTimeout(() => setProgress(0.78), 900),
    ];
  }, [clearTimers]);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    clearTimers();
    setProgress(1);
    setState('complete');
    timersRef.current = [window.setTimeout(() => setState('idle'), reduceMotion ? 80 : 420)];

    return clearTimers;
  }, [pathname, reduceMotion, clearTimers]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!target || target.target === '_blank' || target.hasAttribute('download') || target.getAttribute('aria-disabled') === 'true') {
        return;
      }

      const nextUrl = new URL(target.href, window.location.href);
      if (nextUrl.origin !== window.location.origin || nextUrl.pathname === window.location.pathname) {
        return;
      }

      start();
    };

    const handlePopState = () => start();
    document.addEventListener('click', handleClick, true);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('popstate', handlePopState);
      clearTimers();
    };
  }, [clearTimers, start]);

  if (state === 'idle') return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-1" aria-hidden="true">
      <motion.div
        className="h-full origin-left bg-accent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: progress, opacity: state === 'complete' ? 0 : 1 }}
        transition={{ duration: reduceMotion ? 0 : state === 'complete' ? 0.18 : 0.24, ease: [0.16, 1, 0.3, 1] }}
      />
      <span className="sr-only" role="status" aria-live="polite">
        {state === 'complete' ? 'Conteúdo carregado' : 'Carregando conteúdo'}
      </span>
    </div>
  );
}
