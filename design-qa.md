# Design QA — React Bits Lanyard

## Source visual truth

- React Bits reference: `https://reactbits.dev/components/lanyard?metal=gold`.
- User reference screenshot: `C:/Users/Hercules/AppData/Local/Temp/codex-clipboard-b4e6823f-388a-4cab-a9bb-ad0cdc7ca452.png`.
- Composition reference: `C:/Users/Hercules/AppData/Local/Temp/codex-clipboard-6b03cddc-be6a-4871-af64-21f7b5763557.png`.
- Required fidelity: official swinging 3D Lanyard behavior, woven strap, gold metal connector, portrait badge, drag/throw/click-to-flip interaction, the user's real profile photo, `@heriv`, and the existing name/role strip visually behind the badge.

## Rendered implementation evidence

- URL: `http://localhost:3001/pt-BR`.
- Focused browser capture: `output/playwright/page-about-v2.png`.
- Screenshot viewport: `1920x1080`, CSS scale 1.
- Implementation source: `src/components/premium/react-bits-lanyard.jsx` with the official React Bits physics/rendering base, wrapped by `src/components/premium/interactive-lanyard.tsx`.

## Interactions and checks

- Canvas created successfully with Three.js and no browser errors.
- Portuguese, English, and Spanish routes render the localized Lanyard label and hint.
- Click and keyboard activation (`Enter`) were exercised in Playwright.
- Professional contact links remain available in an accessible navigation layer below the visual stage.
- The backdrop photo and purple name/role strip remain behind the badge and do not cover the card interaction.
- Playwright console check: 0 errors.

## Required fidelity surfaces

- Official Lanyard rope, gold connector, physics, and pointer interaction are used.
- The real profile asset is used as the card artwork and in the behind-card portrait.
- The badge artwork contains `@heriv` and localized front/back content.
- Existing About copy and the name/role strip remain in place.

## Findings resolved

- `[P2]` Contact links overlapped the purple caption at the bottom of the About visual. The stage/backdrop height relationship was adjusted so the links sit below the visual while the caption stays behind the badge.
- `[P2]` The official canvas sizing rules were added globally so the Three.js canvas fills its wrapper reliably across route and viewport changes.

## Final result

`passed`

The requested Lanyard surface is aligned with the React Bits reference and the supplied screenshots. Differences such as the user's original portrait, localized copy, and the existing About layout are intentional content adaptations rather than component substitutions.
