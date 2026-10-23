# Design gallery content guide

The home gallery is powered by `src/data/design-projects.ts` and exposed to the circular presentation through `src/data/design-gallery.ts`.

To add a new piece:

1. Add the real image under `public/assets/projects/` (SVG is preferred for artwork that is already vector-based).
2. Add one `DesignProject` entry in `src/data/design-projects.ts` with the existing localized fields and the image path.
3. Add the matching category key to `src/lib/i18n/dictionaries.ts` only when it is a new, factual category.
4. Set `featured: true` only when the work should be highlighted in the featured project surfaces.
5. `src/data/design-gallery.ts` derives `order` from the data array. Move the entry in `design-projects.ts` to change its order.

Optional metadata such as year or tools is intentionally not added until those facts are available. The gallery uses the existing title, summary, category, cover and tags without inventing project history.
