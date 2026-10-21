# Motion audit — 2026-10-21

Reference: [kylezantos/design-motion-principles](https://github.com/kylezantos/design-motion-principles)

## Context

- Project: localized creative portfolio, Next.js App Router, Framer Motion.
- Weighting applied: Jakub Krehel for production polish, Jhey Tompkins for selective portfolio delight, Emil Kowalski for frequent interactions and restraint.
- Locked behavior: `src/components/ui/reveal.tsx` keeps `viewport={{ once: false, amount: 0.18 }}` so the existing reveal continues to work when scrolling down and up.

## Findings and actions

- Critical: no route-level loading coverage — fixed with root, locale, child-route and dynamic-segment `loading.tsx` fallbacks.
- Critical: async navigation had no explicit progress feedback — fixed with a deterministic top progress bar that completes on pathname change.
- Important: below-the-fold media did not declare its loading intent — fixed with `loading="lazy"` on non-hero images; the hero remains priority-loaded.
- Important: reduced-motion hydration could disagree between server and client — fixed with mount guards in page transition and skeleton components.
- Kept existing page entry/exit transition and menu/chat transitions; no scroll reveal logic was changed.

## Quality gates

- No layout properties are animated by the new primitives; motion uses opacity, transform and a non-layout progress scale.
- No new stagger system, pulse indicator, `scale(0)`, or indiscriminate hover animation was introduced.
- Skeleton opacity loop is functional loading feedback and is disabled under `prefers-reduced-motion`.
- Playwright: 10 localized routes returned 200; no horizontal overflow at 320, 390, 768, 1024, 1440 or 1920px; 37 images were observed as lazy; reduced motion set scroll behavior to `auto`.
- Repository gate: `npm run main-agent:verify` and `git diff --check` passed.
