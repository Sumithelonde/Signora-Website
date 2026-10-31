# SIGNORA AI cinematic refinement specification

## 0. Brief

Refine the existing nine-route Next.js website for SIGNORA AI, a student-founded accessibility research company speaking to Deaf-community collaborators, transport institutions, researchers and technical partners. The mood is **cinematic, calm, credible**. The signature idea is a sound signal that becomes visible: it begins as the typed station headline, continues through the unchanged platform display, becomes the dark waveform reveal, and resolves into the page-wide progress trace.

This is a refinement of the current light sage design, not a replacement. It keeps the problem-first story, honest maturity labels and all accessibility controls. No generic stock video, fake product UI, neon AI styling, unverified signing or invented evidence.

## 1. Stack and files

- Existing Next.js 15, React 19, TypeScript, GSAP and ScrollTrigger.
- Existing CSS vector station scene is the hero media plane.
- Existing ThreeUI `CharacterCarousel` remains the team artwork, with pause and reduced-motion behavior.
- No new runtime dependency and no remote asset requirement.
- Primary implementation files: `src/app/globals.css`, `src/components/ScrollNarrative.tsx`, `src/components/SiteChrome.tsx`, `src/components/hero/HeroExperience.tsx`, `src/components/StationCinematic.tsx`, and `src/components/TeamGrid.tsx`.

## 2. Type

- Display: `Avenir Next`, then `Segoe UI Variable Display`, then `Segoe UI`.
- Body: `Aptos`, then `Segoe UI Variable Text`, then `Segoe UI`.
- Labels: `Cascadia Mono`, then system monospace.
- Hero headline: `clamp(38px, 5.2vw, 68px)`, weight 800, line-height 1.1, tracking `-0.06em`.
- Subpage H1: `clamp(48px, 5.6vw, 76px)`, line-height 0.96, tracking `-0.055em`, max 14 characters per line where natural.
- Body: 16px minimum, line-height 1.62; supporting card text 14px minimum.
- Mono labels: 10-12px, tracking `0.12em` to `0.18em`, used only for chapters, status and technical metadata.

## 3. Colour and material

- Canvas `#F8FAF6`; subtle canvas `#F1F5EE`; stage sage `#EAF0E6`.
- Ink `#141F18`; secondary `#334439`; muted `#576C5F`.
- Accent forest `#265E45`; bright accent `#388460`.
- Contrast stage `#112018`; contrast ink `#F0F4F1`.
- Glass panel: white at 72-88%, 16px blur, a white highlight edge and a forest outer hairline. Large glass panels use no more than 24px blur. Repeated cards retain 16px blur for performance.
- Grain: a fixed 200px SVG turbulence tile at about 2% effective opacity. It is static, pointer-events none and sits below the header.
- Shadows stay diffuse: `0 10px 30px -4px rgba(20,36,26,.05)` at rest and `0 20px 40px -8px rgba(20,36,26,.09)` on hover.

## 4. Hero composition

The hero remains one inset cinematic frame. Desktop frame width is `min(100% - 2*gutter, 1240px)` and height is `clamp(540px, calc(100svh - 150px), 680px)`. Mobile frame is `calc(100% - 32px)` and 580-600px tall on standard phones.

Reading order:

1. Mono scenario label.
2. Selectable H1 `NOT EVERY ANNOUNCEMENT IS HEARD.` typed character by character from 1.3s to 4.3s.
3. Station plane settles from scale 1.035 to 1 over 1.8s as it appears.
4. At 6.2s the caption and unchanged display explain the audio-only mismatch.
5. At 8.1s other passengers move; the lead commuter remains by the unchanged board.
6. At 10s a concise resolution card appears above the controls without covering the board.

The hero starts automatically but silently. Controls remain pause/replay, sound opt-in, captions and skip. The sound engine defaults muted. The mobile board uses separate aligned rows and never compresses labels together. Caption and resolution use explicit width rather than shrink-to-fit. Their bottom edge stays at least 14px above the control dock.

## 5. Scroll story

- Problem and technology runways: 135svh; dark signature runway: 145svh.
- Sticky stage top equals the 68px header on desktop and 60px on mobile where applicable.
- GSAP owns scroll-linked transforms; CSS owns visual material and rest states.
- Signature sequence: intro copy fades upward, waveform compresses, route stroke draws, response copy enters. No visible copy may intersect the waveform or path.
- Technology pipeline activates one card at a time. Inactive cards remain readable at reduced opacity; selected card lifts 4px with a controlled shadow.
- Contexts are a native responsive grid: four columns at laptop, three under 1080px, two under 880px and one under 600px. No horizontal translation.

## 6. Entrance and interaction motion

- Default ease: `cubic-bezier(.16,1,.3,1)` for entrances; `cubic-bezier(.4,0,.2,1)` for state changes.
- Page intro: chapter label at 80ms, H1 blur-rise at 160ms, lead fade-rise at 300ms. Complete by 1.25s.
- Below-fold `.reveal` elements: opacity 0, translateY 28px, blur 6px to rest over 720ms. Grid siblings stagger 80ms, capped at 240ms. IntersectionObserver threshold 0.12, once.
- Hover: cards translateY -4px and shadows deepen over 260ms; buttons move at most 2px; active press scale 0.98.
- Mobile drawer: 260ms opacity and translate, links stagger 55ms. It locks body scroll, traps focus, supports Escape, includes the close toggle in the focus cycle and restores focus.
- Pointer support is limited to a faint hero light falloff; disabled for coarse pointers and reduced motion.
- No `transition: all`, infinite pulsing, decorative bouncing, scroll cues or autoplay audio.

## 7. Responsive and accessibility

- Primary visual targets: 1366x768 and 1440x900.
- Validate at 390x844 and 320px minimum width.
- All interactive controls are at least 44px high where space permits and never below the WCAG 24px minimum.
- Reduced motion renders the hero in its completed state, disables autonomous team motion, removes blur/translate entrances and keeps scroll content readable.
- The team shader has an explicit pause/resume control.
- Tabs use roving tabindex, Home/End and orientation-appropriate arrow keys with complete `aria-controls` and `aria-labelledby` relationships.
- The mobile menu makes the background inert while open.
- The station illustration is exposed as one labelled image; decorative children remain hidden.

## 8. Acceptance

- One clear focal point in every viewport; no overlay collision or compressed labels.
- No horizontal overflow, console errors, failed requests, placeholder copy or external font dependency.
- All nine routes have one visible H1 and coherent top composition.
- Hero autoplay, pause/resume, skip, captions and sound opt-in work.
- Signature, problem and technology scroll stages remain smooth at target laptop sizes and readable under reduced motion.
- Mobile navigation, tab systems, education companion control and contact validation are keyboard operable.
- Production build and TypeScript checks pass.

