# Design QA — fluid viewport pass

## Source visual truth

- Direction contract: `.taste-skill/direction/direction.json` (`name-as-monument`, seed `1740728158`).
- The previous external source screenshot is unavailable in this environment, so exact source-to-render fidelity cannot be certified by `product-design:design-qa`.
- Reference principles used for this pass: full-width editorial framing, asymmetric grids, tunable source-first components, and restrained interaction states. No external branding, code, copy, or proprietary assets were copied.

## Rendered implementation evidence

- URL: `http://localhost:3000/pt-BR`
- Browser-rendered screenshots: `output/playwright/after-fluid/mobile-320.png`, `mobile-390.png`, `tablet-768.png`, `tablet-1024.png`, `desktop-1440.png`, and `desktop-1920.png`.
- CSS viewport and device scale: `320x844`, `390x844`, `768x900`, `1024x900`, `1440x900`, and `1920x1000`; Playwright screenshot scale `css` with device scale factor 1.
- State: localized Portuguese homepage, default dark theme in the final fluid capture, page at top, menu and chatbot closed.
- Full-view comparison: inspected the 768px, 1024px, 1440px, and 1920px captures; the frame now uses the viewport instead of a centered `90rem` shell, while readable text blocks retain local measures.
- Focused comparison: inspected the hero at 768px and 1024px because the previous 1024px implementation clipped the display name; the revised hero stacks before `xl` and no longer clips.

## Interactions and checks

- Playwright confirmed menu availability at 768px and below, theme toggle labels, localized controls, skip link, and no console errors.
- Playwright measured no horizontal overflow at all six target widths using `scrollWidth <= innerWidth`.
- Taste inspector final: 0 FAIL at `1440/768/390`; remaining WARNs are repeated card rows, ten type sizes, no honest video asset, and intentionally editorial left-edge variation.
- Impeccable detector: 0 findings.
- Evidence checker: passed for all six viewport artifacts.

## Required fidelity surfaces

- Typography: display name remains dominant; tablet breakpoint avoids clipping; body copy stays readable.
- Spacing/layout: outer frame is fluid; media and hero fields use the available width; text measures remain locally constrained.
- Colors/tokens: existing theme and blue accent preserved; no new gradient or decorative surface added.
- Image quality: existing portrait and project artwork preserved with responsive sizing and cropping.
- Copy/content: factual localized content and routes preserved.

## Findings and history

- `[P2]` 1920px frame was overly centered by `max-w-[90rem]`; fixed by making `.content-grid` fluid with responsive gutters.
- `[P2]` 1024px hero title clipped behind the image; fixed by moving the split layout to `xl`.
- `[P2]` 768px navigation labels wrapped; fixed by keeping the mobile menu through `lg`.
- `[P2]` root horizontal clipping could mask defects; replaced hidden overflow with explicit `clip` after measuring intentional project reels and confirming no horizontal overflow at all target widths.
- Post-fix evidence: `output/playwright/after-fluid/tablet-768.png`, `tablet-1024.png`, and `desktop-1920.png`.

## Final result

`blocked`

Blocker documental: the source visual target required by `product-design:design-qa` is unavailable, so pixel-level fidelity comparison cannot be marked `passed`. The fluid implementation, browser review, accessibility checks, responsive measurements, and automated visual gates passed without a remaining P0/P1/P2 implementation defect.
