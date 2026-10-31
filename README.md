# SIGNORA AI — Official Website (development draft)

A responsive, statically exported nine-page website for the student-founded SIGNORA AI initiative. It follows `design.md`, including the light sage/off-white design system and the problem-first railway announcement story. It does **not** contain a working text-to-ISL translator or simulate a live prototype.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate and export

```bash
npm run typecheck
npm run build
```

The static website appears in `out/`, suitable for hosting on a static hosting platform. For deployment, replace the placeholder `metadataBase` and review robots settings in `src/app/layout.tsx` before making the site public.

## Required final content

- Replace portrait placeholders in the team section with approved, optimized photo assets; add official roles to `src/data/content.ts`.
- Add approved papers, video URLs and architectural diagrams to `src/data/content.ts`.
- Supply and verify a complete public phone number before publishing it.
- Confirm research-award materials and claims prior to public release.
- Add a real contact endpoint *only if needed*; the current form uses a truthful `mailto:` draft rather than faking a backend submission.

## Hero media

`src/components/HeroExperience.tsx` provides an original SVG/CSS station fallback. To enable your optional approved short film:

1. Place the licensed/owned, optimized video at `public/media/hero-station.mp4`.
2. Add `NEXT_PUBLIC_HERO_VIDEO_SRC=/media/hero-station.mp4` to `.env.local`.
3. Keep the image/video **problem-only**; the exact English headline is HTML and must never be baked into the film.

Sound is generated through Web Audio on the visitor's explicit action; no autoplay audio.

## Notes

`SIGNORA AI` is presented as student-founded and developing toward commercialization; it is not yet legally registered. The reported prototype test involved one person; no statistical translation or comprehension accuracy is claimed. Product extensions and holographic/education experiences are concepts rather than deployed services.
