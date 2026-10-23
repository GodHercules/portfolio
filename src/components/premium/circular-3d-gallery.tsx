"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import styles from "./circular-3d-gallery.module.css";

export type CircularGalleryItem = {
  id: string;
  title: string;
  summary: string;
  category: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export type Circular3DGalleryProps = {
  items: readonly CircularGalleryItem[];
  locale: Locale;
  ariaLabel?: string;
  className?: string;
  initialItemId?: string;
  onItemChange?: (item: CircularGalleryItem) => void;
};

export type Circular3DGalleryLabels = {
  emptyState: string;
  eyebrow: string;
  carouselRoleDescription: string;
  counter: (current: number, total: number) => string;
  itemAriaLabel: (item: CircularGalleryItem, isFeatured: boolean) => string;
  featured: string;
  openDetails: string;
  previousItem: string;
  nextItem: string;
  swipeHint: string;
  closeDetails: string;
  previous: string;
  next: string;
};

type PointerStart = {
  pointerId: number;
  x: number;
};

const SWIPE_THRESHOLD = 44;

const labelsByLocale = {
  "pt-BR": {
    emptyState: "Nenhum trabalho disponível.",
    eyebrow: "Seleção em foco",
    carouselRoleDescription: "carrossel circular",
    counter: (current: number, total: number) => `${current} / ${total}`,
    itemAriaLabel: (item: CircularGalleryItem, featured: boolean) => `${item.title}, ${item.category}${featured ? ", destaque" : ""}`,
    featured: "Destaque",
    openDetails: "Abrir detalhes",
    previousItem: "Trabalho anterior",
    nextItem: "Próximo trabalho",
    swipeHint: "Arraste ou use as setas",
    closeDetails: "Fechar detalhes",
    previous: "Anterior",
    next: "Próximo",
  },
  en: {
    emptyState: "No work available.",
    eyebrow: "Selected focus",
    carouselRoleDescription: "circular carousel",
    counter: (current: number, total: number) => `${current} / ${total}`,
    itemAriaLabel: (item: CircularGalleryItem, featured: boolean) => `${item.title}, ${item.category}${featured ? ", featured" : ""}`,
    featured: "Featured",
    openDetails: "Open details",
    previousItem: "Previous work",
    nextItem: "Next work",
    swipeHint: "Drag or use the arrows",
    closeDetails: "Close details",
    previous: "Previous",
    next: "Next",
  },
  es: {
    emptyState: "No hay trabajos disponibles.",
    eyebrow: "Selección en foco",
    carouselRoleDescription: "carrusel circular",
    counter: (current: number, total: number) => `${current} / ${total}`,
    itemAriaLabel: (item: CircularGalleryItem, featured: boolean) => `${item.title}, ${item.category}${featured ? ", destacado" : ""}`,
    featured: "Destacado",
    openDetails: "Abrir detalles",
    previousItem: "Trabajo anterior",
    nextItem: "Siguiente trabajo",
    swipeHint: "Arrastra o usa las flechas",
    closeDetails: "Cerrar detalles",
    previous: "Anterior",
    next: "Siguiente",
  },
} satisfies Record<Locale, Circular3DGalleryLabels>;

function wrapIndex(index: number, length: number) {
  return (index + length) % length;
}

export function Circular3DGallery({
  items,
  locale,
  ariaLabel = "Galeria circular de projetos",
  className,
  initialItemId,
  onItemChange,
}: Circular3DGalleryProps) {
  const baseId = useId();
  const reduceMotion = useReducedMotion();
  const resolvedLabels = labelsByLocale[locale];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pointerStartRef = useRef<PointerStart | null>(null);
  const suppressClickRef = useRef(false);
  const initialIndex = useMemo(() => {
    if (initialItemId) {
      const explicitIndex = items.findIndex((item) => item.id === initialItemId);
      if (explicitIndex >= 0) return explicitIndex;
    }

    const featuredIndex = items.findIndex((item) => item.featured);
    return featuredIndex >= 0 ? featuredIndex : 0;
  }, [initialItemId, items]);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeItem = items[activeIndex];
  const lightboxItem = lightboxIndex === null ? undefined : items[lightboxIndex];
  const titleId = `${baseId}-title`;
  const dialogTitleId = `${baseId}-dialog-title`;

  useEffect(() => {
    if (!items.length) return;
    setActiveIndex((currentIndex) =>
      currentIndex >= items.length ? initialIndex : currentIndex,
    );
  }, [initialIndex, items.length]);

  useEffect(() => {
    if (activeItem) onItemChange?.(activeItem);
  }, [activeItem, onItemChange]);

  const selectIndex = useCallback(
    (index: number) => {
      if (!items.length) return;
      setActiveIndex(wrapIndex(index, items.length));
    },
    [items.length],
  );

  const move = useCallback(
    (direction: 1 | -1) => {
      selectIndex(activeIndex + direction);
    },
    [activeIndex, selectIndex],
  );

  useEffect(() => {
    if (!lightboxItem) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    function handleDialogKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setLightboxIndex(null);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleDialogKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleDialogKeyDown);
      previousActiveElement?.focus();
    };
  }, [lightboxItem]);

  const handleGalleryKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        move(-1);
        break;
      case "ArrowRight":
        event.preventDefault();
        move(1);
        break;
      case "Home":
        event.preventDefault();
        selectIndex(0);
        break;
      case "End":
        event.preventDefault();
        selectIndex(items.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        setLightboxIndex(activeIndex);
        break;
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStartRef.current = { pointerId: event.pointerId, x: event.clientX };
    suppressClickRef.current = false;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = pointerStartRef.current;
    if (!start || start.pointerId !== event.pointerId) return;

    const delta = event.clientX - start.x;
    pointerStartRef.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;

    suppressClickRef.current = true;
    move(delta < 0 ? 1 : -1);
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  };

  if (!items.length) {
    return (
      <section className={`${styles.gallery} ${className ?? ""}`} aria-label={ariaLabel}>
        <p className={styles.emptyState}>{resolvedLabels.emptyState}</p>
      </section>
    );
  }

  return (
    <section className={`${styles.gallery} ${className ?? ""}`} aria-label={ariaLabel}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>{resolvedLabels.eyebrow}</p>
          <h2 className={styles.heading} id={titleId}>
            {activeItem.title}
          </h2>
        </div>
        <span className={styles.counter} aria-live="polite">
          {resolvedLabels.counter(activeIndex + 1, items.length)}
        </span>
      </div>

      <div
        className={styles.viewport}
        role="region"
        aria-labelledby={titleId}
        aria-roledescription={resolvedLabels.carouselRoleDescription}
        tabIndex={0}
        onKeyDown={handleGalleryKeyDown}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className={styles.orbit}>
          {items.map((item, index) => {
            const angle = ((index - activeIndex + items.length) % items.length) * (360 / items.length);
            const normalizedAngle = angle > 180 ? angle - 360 : angle;
            const distance = Math.abs(normalizedAngle);
            const isActive = index === activeIndex;
            const depth = Math.max(0.38, 1 - distance / 220);

            return (
              <motion.div
                className={styles.cardShell}
                key={item.id}
                style={{
                  transform: `rotateY(${normalizedAngle}deg) translateZ(var(--carousel-radius)) rotateY(${-normalizedAngle}deg)`,
                }}
                animate={{
                  opacity: isActive ? 1 : depth,
                  scale: isActive ? 1 : 0.88,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.48, ease: "easeOut" }}
              >
                <button
                  className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                  type="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={resolvedLabels.itemAriaLabel(item, Boolean(item.featured))}
                  onClick={() => {
                    if (suppressClickRef.current) {
                      suppressClickRef.current = false;
                      return;
                    }
                    selectIndex(index);
                    setLightboxIndex(index);
                  }}
                >
                  <span className={styles.imageFrame}>
                    <Image
                      className={styles.image}
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 38rem) 68vw, 18rem"
                    />
                    <span className={styles.imageShade} aria-hidden="true" />
                    <span className={styles.cardCategory}>{item.category}</span>
                    {item.featured ? <span className={styles.featured}>{resolvedLabels.featured}</span> : null}
                  </span>
                  <span className={styles.cardContent}>
                    <strong>{item.title}</strong>
                    <span>{item.summary}</span>
                    <span className={styles.openHint}>
                      <Maximize2 size={14} aria-hidden="true" />
                      {resolvedLabels.openDetails}
                    </span>
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className={styles.controls}>
          <button className={styles.controlButton} type="button" onClick={() => move(-1)} aria-label={resolvedLabels.previousItem}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <span className={styles.swipeHint}>{resolvedLabels.swipeHint}</span>
          <button className={styles.controlButton} type="button" onClick={() => move(1)} aria-label={resolvedLabels.nextItem}>
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className={styles.summary} aria-live="polite">
        <span>{activeItem.category}</span>
        {activeItem.summary}
      </p>

      <AnimatePresence>
        {lightboxItem ? (
          <motion.div
            className={styles.lightboxBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setLightboxIndex(null);
            }}
          >
            <motion.div
              ref={dialogRef}
              className={styles.lightbox}
              role="dialog"
              aria-modal="true"
              aria-labelledby={dialogTitleId}
              tabIndex={-1}
              initial={{ y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : 0.96 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className={styles.lightboxToolbar}>
                <span className={styles.lightboxCategory}>{lightboxItem.category}</span>
                <button
                  ref={closeButtonRef}
                  className={styles.controlButton}
                  type="button"
                  aria-label={resolvedLabels.closeDetails}
                  onClick={() => setLightboxIndex(null)}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              <div className={styles.lightboxImageFrame}>
                <Image
                  className={styles.lightboxImage}
                  src={lightboxItem.image}
                  alt={lightboxItem.alt}
                  fill
                  sizes="(max-width: 42rem) 100vw, 42rem"
                />
              </div>
              <div className={styles.lightboxCopy}>
                <h3 id={dialogTitleId}>{lightboxItem.title}</h3>
                <p>{lightboxItem.summary}</p>
              </div>
              <div className={styles.lightboxNavigation}>
                <button className={styles.secondaryButton} type="button" onClick={() => setLightboxIndex(wrapIndex((lightboxIndex ?? 0) - 1, items.length))} aria-label={resolvedLabels.previous}>
                  <ChevronLeft size={16} aria-hidden="true" />
                  {resolvedLabels.previous}
                </button>
                <span aria-live="polite">{resolvedLabels.counter((lightboxIndex ?? 0) + 1, items.length)}</span>
                <button className={styles.secondaryButton} type="button" onClick={() => setLightboxIndex(wrapIndex((lightboxIndex ?? 0) + 1, items.length))} aria-label={resolvedLabels.next}>
                  {resolvedLabels.next}
                  <ChevronRight size={16} aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
