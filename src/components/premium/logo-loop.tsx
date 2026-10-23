'use client';

import { useState, type CSSProperties, type FocusEvent, type HTMLAttributes, type MouseEvent } from 'react';
import { useReducedMotion } from 'framer-motion';
import {
  siDocker,
  siGit,
  siGithub,
  siJavascript,
  siJest,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostman,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';

import { cn } from '@/lib/utils';

const LOGO_LOOP_STYLES = `
  @keyframes premium-logo-loop {
    from { transform: translate3d(0, 0, 0); }
    to { transform: translate3d(-50%, 0, 0); }
  }
`;

export type LogoLoopItem = {
  href?: string;
  icon?: SimpleIcon;
  mark?: string;
  name: string;
  tone?: string;
};

export type LogoLoopProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  ariaLabel?: string;
  direction?: 'left' | 'right';
  duration?: number;
  gap?: number;
  items: readonly LogoLoopItem[];
  pauseOnFocus?: boolean;
  pauseOnHover?: boolean;
};

function getMark(name: string) {
  return Array.from(name.trim()).slice(0, 2).join('').toUpperCase();
}

const officialIconByName: Record<string, SimpleIcon> = {
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
  JavaScript: siJavascript,
  Jest: siJest,
  MySQL: siMysql,
  NestJS: siNestjs,
  'Next.js': siNextdotjs,
  'Node.js': siNodedotjs,
  Postman: siPostman,
  PostgreSQL: siPostgresql,
  Python: siPython,
  React: siReact,
  TailwindCSS: siTailwindcss,
  TypeScript: siTypescript,
};

function LogoItem({ item, duplicate }: { item: LogoLoopItem; duplicate: boolean }) {
  const icon = item.icon ?? officialIconByName[item.name];
  const content = (
    <>
      <span
        className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-current/25 bg-bg/75 text-[0.65rem] font-semibold tracking-[0.08em] text-[var(--logo-tone)]"
        aria-hidden="true"
      >
        {icon ? (
          <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
            <path d={icon.path} />
          </svg>
        ) : item.mark || getMark(item.name)}
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-fg/80">{item.name}</span>
    </>
  );

  const itemStyle = { '--logo-tone': item.tone || 'hsl(var(--accent))' } as CSSProperties;

  return (
    <li className="flex shrink-0 items-center gap-3" style={itemStyle}>
      {item.href ? (
        <a
          href={item.href}
          tabIndex={duplicate ? -1 : undefined}
          className="focus-ring inline-flex items-center gap-3 rounded-full py-1 pr-3"
          aria-hidden={duplicate ? true : undefined}
        >
          {content}
        </a>
      ) : (
        <span aria-hidden={duplicate ? true : undefined} className="inline-flex items-center gap-3 rounded-full py-1 pr-3">
          {content}
        </span>
      )}
    </li>
  );
}

export function LogoLoop({
  ariaLabel = 'Technologies',
  className,
  direction = 'left',
  duration = 30,
  gap = 28,
  items,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  pauseOnFocus = true,
  pauseOnHover = true,
  style,
  ...props
}: LogoLoopProps) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  if (items.length === 0) return null;

  const isPaused = (pauseOnHover && hovered) || (pauseOnFocus && focused);
  const trackStyle = {
    '--premium-logo-loop-duration': `${Math.max(8, duration)}s`,
    animationDirection: direction === 'right' ? 'reverse' : 'normal',
    animationName: reduceMotion ? 'none' : 'premium-logo-loop',
    animationPlayState: isPaused ? 'paused' : 'running',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationDuration: `var(--premium-logo-loop-duration)`,
  } as CSSProperties;

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    setHovered(true);
    onMouseEnter?.(event);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    setHovered(false);
    onMouseLeave?.(event);
  };

  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
    onBlur?.(event);
  };

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={style}
      role="region"
      aria-label={ariaLabel}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <style>{LOGO_LOOP_STYLES}</style>
      <div
        className="flex w-max items-center"
        style={{ ...trackStyle, gap: 0 }}
      >
        <ul className="flex shrink-0 items-center" style={{ gap: `${Math.max(0, gap)}px` }} aria-label={ariaLabel}>
          {items.map((item) => <LogoItem key={item.name} item={item} duplicate={false} />)}
        </ul>
        <ul className="flex shrink-0 items-center" style={{ gap: `${Math.max(0, gap)}px` }} aria-hidden="true">
          {items.map((item) => <LogoItem key={`${item.name}-duplicate`} item={item} duplicate />)}
        </ul>
      </div>
    </div>
  );
}
