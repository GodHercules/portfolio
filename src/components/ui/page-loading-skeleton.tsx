'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const pulseTransition = {
  duration: 1.45,
  ease: [0.16, 1, 0.3, 1] as const,
  repeat: Infinity,
  repeatType: 'mirror' as const,
};

export function PageLoadingSkeleton() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const pulse = mounted && !reduceMotion ? { opacity: [0.55, 0.9, 0.55] } : undefined;

  return (
    <div className="content-grid min-h-[60vh] py-10 sm:py-16" aria-busy="true" role="status">
      <span className="sr-only">Carregando conteúdo. Loading content. Cargando contenido.</span>
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]">
        <div className="space-y-6">
          <motion.div animate={pulse} transition={pulseTransition} className="h-5 w-28 bg-muted" />
          <motion.div animate={pulse} transition={pulseTransition} className="h-16 w-full max-w-3xl bg-muted sm:h-24" />
          <motion.div animate={pulse} transition={pulseTransition} className="h-4 w-full max-w-2xl bg-muted" />
          <motion.div animate={pulse} transition={pulseTransition} className="h-4 w-4/5 max-w-xl bg-muted" />
          <div className="grid gap-4 pt-6 sm:grid-cols-2">
            {[0, 1, 2, 3].map((item) => (
              <motion.div
                key={item}
                animate={pulse}
                transition={{ ...pulseTransition, delay: item * 0.05 }}
                className="h-24 bg-muted"
              />
            ))}
          </div>
        </div>
        <motion.div animate={pulse} transition={pulseTransition} className="aspect-[4/3] min-h-56 bg-muted xl:aspect-auto" />
      </div>
    </div>
  );
}
