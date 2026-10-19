# Design QA — cinematic portfolio pass

## Comparison target

- Source visual truth: `C:/Users/Hercules/AppData/Local/Temp/codex-clipboard-21ad6680-0e58-4501-ab09-898b32a929d3.png`
- Implementation capture: Chrome at `http://localhost:3000/pt-BR`
- State: dark theme, desktop hero and featured-work hover preview; mobile hero.
- Normalization: the source is a tall editorial reference, not a page specification. The review compares its intended visual language — noir field, red typographic hierarchy, dense grid, portrait integration and animated work samples — rather than literal content or exact layout.

## Comparison history

1. The first implementation had an oversized name and excessive blank hero space. The hero was rebuilt into a dense black/red editorial composition with a portrait crop and a supporting red panel.
2. The initial mobile title overflowed. It now uses a phone-specific scale and fits within the frame.
3. The project list was converted from static cards to a three-frame preview reel. Four first-frame artboards now depict Atlas, Flow, Nova and Social Campaign as distinct product/design surfaces; hover or keyboard focus animates their reel, while reduced-motion users retain the first frame.

## Required fidelity surfaces

- Typography: giant red display wordmark, serif project titles and compact utility labels create the intended editorial hierarchy.
- Layout and spacing: the hero, proof strip and selected-work grid use a constrained, dense rhythm with editorial dividers instead of broad empty fields.
- Color: near-black foundation, soft neutral text and a single `#0A0483` action color reflect the current brand direction without copying the source palette.
- Image quality: the hero uses the supplied portfolio portrait. Project previews use purpose-built vector artboards that communicate the repository's existing, localized case-study content; they are presented as previews, not evidence of a deployed product.
- Copy: all project and profile copy remains grounded in the repository's localized content.

## Interaction checks

- Chrome console: no errors after final reload.
- Hover and keyboard focus: every project preview reel has matching hover and `:focus-within` activation; the visible Chrome pass confirmed the animated reel surface and arrow affordance.
- Responsive Chrome checks: 1440 px desktop, 768 px tablet and 390 px mobile. The hero title remains unclipped, the primary action remains reachable and the mobile language control collapses to flags.
- Scroll motion: reveal sections replay while entering the viewport in either scroll direction, and remain suppressed for reduced-motion preferences.
- Reduced motion: the reel animation and transitions are suppressed by the global preference override.

## Findings

No actionable P0, P1 or P2 issue remained in the final Chrome review. The source's exact portrait treatment and specific project art are intentionally not cloned; the repository has its own portrait and project media.

final result: passed
