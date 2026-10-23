'use client';

import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

const DEFAULT_CHARACTERS = '.·:+*#@';
const DEFAULT_COLORS = ['hsl(var(--accent) / 0.72)', 'hsl(var(--fg) / 0.18)'] as const;

function resolveCanvasColor(color: string, host: HTMLElement) {
  const resolved = color.replace(/var\(\s*(--[\w-]+)\s*(?:,\s*([^)]*))?\)/g, (_match, variable: string, fallback?: string) => {
    const value = getComputedStyle(host).getPropertyValue(variable).trim();
    return value || fallback?.trim() || 'transparent';
  });

  return /^\d+\s+\d+%\s+\d+%$/.test(resolved.trim()) ? `hsl(${resolved.trim()})` : resolved;
}

export type GradientAsciiProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  characters?: string;
  colors?: readonly string[];
  density?: number;
  fallback?: ReactNode;
  label?: string;
  speed?: number;
};

/** A small, decorative canvas that only animates while it is visible. */
export function GradientAscii({
  characters = DEFAULT_CHARACTERS,
  className,
  colors = DEFAULT_COLORS,
  density = 14,
  fallback,
  label,
  speed = 0.35,
  style,
  ...props
}: GradientAsciiProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const safeColors = colors.length > 0 ? colors : DEFAULT_COLORS;
  const primaryColor = safeColors[0] ?? DEFAULT_COLORS[0];
  const secondaryColor = safeColors.at(-1) ?? DEFAULT_COLORS[1];
  const colorKey = safeColors.join('|');
  const safeCharacters = characters || DEFAULT_CHARACTERS;
  const safeDensity = Math.max(8, density <= 1 ? 8 + density * 10 : density);
  const safeSpeed = Math.max(0, speed);
  const fallbackStyle = {
    backgroundColor: secondaryColor,
    backgroundImage: `radial-gradient(circle at 18% 22%, ${primaryColor}, transparent 46%), linear-gradient(135deg, ${secondaryColor}, transparent 72%)`,
  } as CSSProperties;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '120px 0px', threshold: 0.01 },
    );

    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas || !isVisible) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    const resolvedColors = safeColors.map((color) => resolveCanvasColor(color, host));

    const draw = (timestamp: number) => {
      if (!width || !height) return;

      const time = prefersReducedMotion ? 0 : timestamp * 0.001 * safeSpeed;
      const gradient = context.createLinearGradient(0, 0, width, height);
      try {
        resolvedColors.forEach((color, index) => {
          gradient.addColorStop(index / Math.max(1, resolvedColors.length - 1), color);
        });
      } catch {
        gradient.addColorStop(0, 'rgba(109, 93, 252, 0.72)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.18)');
      }

      context.clearRect(0, 0, width, height);
      context.fillStyle = gradient;
      context.font = `${safeDensity}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
      context.textBaseline = 'top';
      context.globalAlpha = 0.88;

      const columnWidth = safeDensity * 0.72;
      const columns = Math.ceil(width / columnWidth);
      const rows = Math.ceil(height / safeDensity);

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const wave = Math.sin(column * 0.42 + row * 0.2 + time * 1.8) * 2;
          const characterIndex = Math.abs(Math.floor(column * 17 + row * 31 + wave)) % safeCharacters.length;
          context.fillText(safeCharacters[characterIndex], column * columnWidth, row * safeDensity);
        }
      }

      context.globalAlpha = 1;
    };

    const resize = () => {
      const nextWidth = Math.max(1, Math.round(host.clientWidth));
      const nextHeight = Math.max(1, Math.round(host.clientHeight));
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw(0);
    };

    const frame = (timestamp: number) => {
      draw(timestamp);
      if (!prefersReducedMotion) animationFrame = window.requestAnimationFrame(frame);
    };

    const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(resize) : undefined;
    resizeObserver?.observe(host);
    resize();

    if (!prefersReducedMotion) animationFrame = window.requestAnimationFrame(frame);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      context.clearRect(0, 0, width, height);
    };
  }, [colorKey, isVisible, prefersReducedMotion, primaryColor, safeCharacters, safeColors, safeDensity, safeSpeed, secondaryColor]);

  return (
    <div
      ref={hostRef}
      className={cn('relative isolate min-h-32 overflow-hidden', className)}
      style={style}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...props}
    >
      <div className="absolute inset-0" style={fallbackStyle} aria-hidden="true">
        {fallback}
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 max-w-full" aria-hidden="true" />
    </div>
  );
}
