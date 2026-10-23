"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState, type ComponentType, type KeyboardEvent } from "react";

import type { Locale } from "@/lib/i18n/config";
import styles from "./interactive-lanyard.module.css";

type ReactBitsLanyardProps = {
  frontImage?: string;
  backImage?: string;
  imageFit: "cover" | "contain";
  cardColor: string;
  orientation: "portrait" | "landscape";
  finish: "glossy" | "matte" | "holographic" | "metallic";
  size: number;
  strapLength: number;
  strapColor: string;
  strapWidth: number;
  metal: "silver" | "gold" | "graphite";
  gravity: number;
  damping: number;
  elasticity: number;
  breeze: number;
  interactive: boolean;
  intro: boolean;
  className: string;
};

const ReactBitsLanyard = dynamic(
  () =>
    // @ts-expect-error Official React Bits source is JavaScript without declarations.
    import("./react-bits-lanyard").then((module) => module.default) as Promise<{
      default: ComponentType<ReactBitsLanyardProps>;
    }>,
  {
    ssr: false,
    loading: () => <div className={styles.loadingState} aria-hidden="true" />,
  },
);

export type LanyardLink = {
  label: string;
  href: string;
};

export type InteractiveLanyardProps = {
  locale: Locale;
  name: string;
  role: string;
  organization?: string;
  avatar?: string;
  avatarAlt?: string;
  accent?: string;
  links?: readonly LanyardLink[];
  frontLabel?: string;
  backTitle?: string;
  staticFallback?: boolean;
  className?: string;
};

export type InteractiveLanyardLabels = {
  badge: (name: string) => string;
  hint: string;
  contacts: string;
  keyboard: string;
};

const labelsByLocale = {
  "pt-BR": {
    badge: (name: string) => `Crachá Lanyard de ${name}`,
    hint: "Arraste, clique ou use Enter para virar o crachá.",
    contacts: "Contatos profissionais",
    keyboard: "Use Enter, espaço ou F para interagir.",
  },
  en: {
    badge: (name: string) => `Lanyard badge for ${name}`,
    hint: "Drag, click or press Enter to flip the badge.",
    contacts: "Professional contacts",
    keyboard: "Use Enter, Space or F to interact.",
  },
  es: {
    badge: (name: string) => `Credencial Lanyard de ${name}`,
    hint: "Arrastra, haz clic o pulsa Enter para girar la credencial.",
    contacts: "Contactos profesionales",
    keyboard: "Usa Enter, espacio o F para interactuar.",
  },
} satisfies Record<Locale, Record<string, string | ((name: string) => string)>>;

function drawCover(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number,
) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const drawnWidth = image.naturalWidth * scale;
  const drawnHeight = image.naturalHeight * scale;
  context.drawImage(
    image,
    x + (width - drawnWidth) / 2,
    y + (height - drawnHeight) / 2,
    drawnWidth,
    drawnHeight,
  );
}

function createArtwork(
  avatar: string | undefined,
  name: string,
  role: string,
  backTitle: string,
  links: readonly LanyardLink[],
  onReady: (front: string, back: string) => void,
) {
  const image = new window.Image();
  image.decoding = "async";
  image.onload = () => {
    const front = document.createElement("canvas");
    front.width = 1024;
    front.height = 1440;
    const frontContext = front.getContext("2d");
    if (!frontContext) return;

    frontContext.fillStyle = "#f7f6f0";
    frontContext.fillRect(0, 0, front.width, front.height);
    frontContext.fillStyle = "#15121d";
    frontContext.font = "700 34px Arial, sans-serif";
    frontContext.fillText("PORTFOLIO", 72, 104);
    frontContext.font = "600 30px Arial, sans-serif";
    frontContext.fillStyle = "#6d6579";
    frontContext.fillText("@heriv", 790, 104);

    frontContext.save();
    frontContext.shadowColor = "rgba(18, 13, 31, 0.26)";
    frontContext.shadowBlur = 24;
    frontContext.shadowOffsetY = 18;
    frontContext.beginPath();
    frontContext.roundRect(136, 210, 752, 770, 130);
    frontContext.clip();
    drawCover(frontContext, image, 136, 210, 752, 770);
    frontContext.restore();

    frontContext.strokeStyle = "#e2b54e";
    frontContext.lineWidth = 16;
    frontContext.beginPath();
    frontContext.roundRect(136, 210, 752, 770, 130);
    frontContext.stroke();

    frontContext.fillStyle = "#15121d";
    frontContext.font = "700 48px Arial, sans-serif";
    frontContext.fillText(name, 72, 1105);
    frontContext.fillStyle = "#625a6e";
    frontContext.font = "500 30px Arial, sans-serif";
    frontContext.fillText(role, 72, 1160);
    frontContext.fillStyle = "#e2b54e";
    frontContext.fillRect(72, 1220, 880, 8);

    const back = document.createElement("canvas");
    back.width = 1024;
    back.height = 1440;
    const backContext = back.getContext("2d");
    if (!backContext) return;
    backContext.fillStyle = "#191522";
    backContext.fillRect(0, 0, back.width, back.height);
    backContext.fillStyle = "#e2b54e";
    backContext.font = "700 34px Arial, sans-serif";
    backContext.fillText(backTitle.toUpperCase(), 72, 120);
    backContext.fillStyle = "#f7f6f0";
    backContext.font = "600 36px Arial, sans-serif";
    links.forEach((link, index) => backContext.fillText(link.label, 72, 280 + index * 88));
    backContext.fillStyle = "#8e8799";
    backContext.font = "500 28px Arial, sans-serif";
    backContext.fillText("@heriv", 72, 1240);
    backContext.fillStyle = "#e2b54e";
    backContext.fillRect(72, 1280, 880, 8);

    onReady(front.toDataURL("image/png"), back.toDataURL("image/png"));
  };
  image.src = avatar ?? "/assets/profile/hercules-profile.png";
}

function flipCanvas(canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect();
  const point = {
    bubbles: true,
    button: 0,
    clientX: rect.left + rect.width / 2,
    clientY: rect.top + rect.height / 2,
    pointerId: 1,
    pointerType: "keyboard",
  };
  canvas.dispatchEvent(new PointerEvent("pointerdown", point));
  canvas.dispatchEvent(new PointerEvent("pointerup", point));
}

export function InteractiveLanyard({
  locale,
  name,
  role,
  organization,
  avatar,
  avatarAlt,
  links = [],
  backTitle,
  className,
}: InteractiveLanyardProps) {
  const [artwork, setArtwork] = useState<{ front: string; back: string } | null>(null);
  const labels = labelsByLocale[locale];
  const resolvedBackTitle = backTitle ?? labels.contacts;

  useEffect(() => {
    let alive = true;
    createArtwork(avatar, name, role, resolvedBackTitle, links, (front, back) => {
      if (alive) setArtwork({ front, back });
    });
    return () => {
      alive = false;
    };
  }, [avatar, links, name, resolvedBackTitle, role]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!['Enter', ' ', 'f', 'F'].includes(event.key)) return;
    const canvas = event.currentTarget.querySelector("canvas");
    if (!canvas) return;
    event.preventDefault();
    flipCanvas(canvas);
  };

  return (
    <div className={`${styles.lanyard} ${className ?? ""}`.trim()}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.backdropImage}>
          <Image
            src={avatar ?? "/assets/profile/hercules-profile.png"}
            alt=""
            fill
            sizes="(max-width: 1024px) 92vw, 30rem"
            className={styles.backdropPhoto}
          />
        </div>
        <div className={styles.backdropCaption}>
          <span>{name}</span>
          <small>{role}</small>
        </div>
      </div>

      <div
        className={styles.stage}
        role="group"
        tabIndex={0}
        aria-label={labels.badge(name)}
        onKeyDown={handleKeyDown}
      >
        <ReactBitsLanyard
          frontImage={artwork?.front}
          backImage={artwork?.back}
          imageFit="cover"
          cardColor="#f7f6f0"
          orientation="portrait"
          finish="glossy"
          size={0.62}
          strapLength={0.5}
          strapColor="#17141f"
          strapWidth={0.65}
          metal="gold"
          gravity={1}
          damping={0.55}
          elasticity={0.5}
          breeze={0.35}
          interactive
          intro
          className={styles.reactBitsLanyard}
        />
      </div>

      <div className={styles.accessibleContent}>
        <p>{labels.hint}</p>
        {organization ? <span>{organization}</span> : null}
        <span className={styles.keyboardHint}>{labels.keyboard}</span>
        <nav aria-label={labels.contacts}>
          {links.map((link) => (
            <a key={`${link.label}-${link.href}`} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
        <span className={styles.srOnly}>{avatarAlt ?? name}</span>
      </div>
    </div>
  );
}
