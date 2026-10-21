# Responsive full-viewport redesign prompt

You are the lead frontend designer and responsive UI engineer working directly in `C:\Users\PC\Documents\portfolio`.

## Goal

Improve the existing localized Next.js portfolio so every viewport uses its available width intentionally. Replace the feeling of a narrow, centered template with a fluid editorial composition: full-width section fields, edge-to-edge media where appropriate, and asymmetric content grids that still preserve readable text measures.

## Context

- Existing direction: `name-as-monument`; preserve the visual identity, real copy, routes, assets, theme, locale switcher, mobile menu, chatbot, and project behavior.
- Reference principles: Refero's design-system browsing and React Bits' source-first, tunable component approach. Use principles only; do not copy branding, code, or proprietary assets.
- Existing issue to solve: `content-grid` currently applies `mx-auto max-w-[90rem]`, while many sections also use narrow `max-w-*` blocks. At wider screens this makes the page feel centered and leaves unused lateral space.

## Scope

- Inspect and improve shared layout tokens in `src/app/globals.css`, then adjust only the section/component classes that still create artificial centralization.
- Use full viewport width at 320, 390, 768, 1024, 1440, and 1920px without horizontal overflow.
- Keep body text readable with a deliberate measure; full-width means the frame and visual fields expand, not that paragraphs become unreadably long.
- Use responsive grid tracks, `minmax(0, 1fr)`, full-bleed surfaces, and media that can occupy the far side of the frame.
- Keep mobile composition intentional: compact gutters, one-column reading flow, reachable controls, no clipped headings, and no forced desktop whitespace.
- Do not add dependencies, fake assets, gradients, invented claims, or unrelated features.

## Required verification

- Capture and inspect the real browser at 320x844, 390x844, 768x900, 1024x900, 1440x900, and 1920x1000.
- Check `document.documentElement.scrollWidth <= window.innerWidth`, heading wrapping, primary CTA reachability, media crops, menu/theme/locale/chat interactions, focus visibility, and reduced motion.
- Run Taste inspector at its required widths and fix every FAIL; defend any remaining WARN with evidence.
- Run `npm run main-agent:verify` before reporting completion.

## Done

- The site visibly occupies the viewport instead of reading as one centered column.
- At least three sections use the full frame or a far-edge visual anchor while keeping text readable.
- No width, overflow, contrast, accessibility, or interaction regression is introduced.
- Report the changed files, before/after screenshots, measured overflow result, Taste findings, and verification results.

This is an agentic coding task. Only modify the scoped frontend files and local evidence artifacts. Ask before deleting files, adding dependencies, changing factual content, or touching backend/infrastructure configuration.
