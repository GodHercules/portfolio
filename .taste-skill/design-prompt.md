You are the lead frontend designer and accessibility-minded engineer working directly in the existing Next.js repository at C:\Users\PC\Documents\portfolio.

## Goal
Raise the public portfolio homepage to a 9/10+ bar across visual design, hierarchy, accessibility, responsiveness, performance, and interaction quality without changing the product's facts, routes, locale support, or working behavior.

## Context
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, lucide-react.
- Surface: multilingual personal portfolio for a full-stack developer who also presents graphic design work.
- Existing identity: dark/light theme support, near-black/near-white surfaces, deep blue accent, supplied portrait and project artwork.
- Chosen direction: name-as-monument. Make the real name the memorable device; use scale, disciplined spacing, and evidence-led sections. Keep the palette/type roles unless a measurable contrast or readability defect requires a token adjustment.
- Audit evidence: tiny 14px running text, 11 kicker labels, decorative index numbers, repeated 1px rules/outlines, one gradient, weak blue-on-dark text contrast, oversized/overlong headings at 390px and 768px, four sections leaving about half the width empty, and only two raster media assets detected.

## Scope
- Inspect and improve the homepage and shared UI primitives under `src/app`, `src/components`, `src/data`, and `src/lib`.
- Preserve all factual localized copy unless a layout-only rewrite is necessary; if a copy change is necessary, keep the same claim and meaning in pt-BR, en, and es.
- Keep all existing routes, links, theme toggle, locale switcher, mobile menu, chat trigger, project data, and image assets working.
- Use existing dependencies. Do not add packages.

## Constraints
- Use semantic HTML, visible keyboard focus, meaningful alt text, reduced-motion support, touch targets of at least 44px, and no horizontal overflow at 320, 390, 768, 1024, and 1440px.
- Use CSS tokens for color, spacing, radii, type, and motion. Avoid new gradients, glass effects, decorative blobs, generic icon cards, duplicated card shells, and tiny uppercase labels.
- Prefer stronger composition over more decoration: make section headers and proof content do the work. Keep one dominant visual moment in the hero.
- Improve contrast to WCAG AA, wrap headings intentionally, use `text-wrap: balance`/`text-pretty` where supported, and keep body text at 16px or larger except genuinely compact metadata.
- Use flat surfaces or existing project imagery; do not invent testimonials, metrics, clients, or deployed-product claims.

## Verification
Before editing, inspect the current page at 1440x900, 768x900, and 390x844 in a real browser and save screenshots under `output/playwright/`. After editing, repeat the same captures, run the taste inspector and lint, exercise navigation, mobile menu, theme toggle, locale switcher, project links, keyboard focus, and reduced motion, then run `npm run main-agent:verify`.

## Done
- No taste inspector FAILs at 1440, 768, or 390; defend any remaining WARN.
- No horizontal overflow, clipped text, inaccessible controls, missing image alt, or console errors.
- The first viewport states who Hercules is, what he does, and the next action within five seconds.
- Desktop, tablet, and mobile compositions feel intentionally related but not merely scaled.
- Report changed files, measured before/after findings, screenshots, verification commands, and any remaining limitation. Do not claim checks that were not run.

This is an agentic coding task. Review the scope, forbidden actions, and stop conditions before editing. Ask before deleting files, adding dependencies, changing factual claims, or touching database/infrastructure configuration.
