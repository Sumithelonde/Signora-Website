# SIGNORA AI — Website Design System & Experience Blueprint

> **Document type:** `design.md` — source-of-truth design and implementation specification for Google Antigravity (and other AI coding agents).  
> **Project:** SIGNORA AI  
> **Version:** 1.0 — 28 October 2026  
> **Site type:** Static, responsive, cinematic storytelling and company website  
> **Primary inspiration:** [eigi.ai](https://eigi.ai/) — **interpret the narrative principles, do not reproduce its interface, branding, characters, layouts, copy, or assets.**

---

## 0. Read this first — non-negotiable constraints

1. **Brand name is `SIGNORA AI`** (not merely “Signora” in formal headings or product identity).
2. Design an original premium website for SIGNORA AI, informed by Eigi's **guided chapters, sticky scenes, narrative interactions, progressive disclosure, personable illustration and visual product storytelling**. Do not clone Eigi.
3. The user-selected visual reference is **light off-white, charcoal text, muted/sage green, clean outlined UI, rounded product cards**. **No cyberpunk / blue-neon / black-everywhere aesthetic.** Use one controlled dark contrast section only if it improves rhythm.
4. **The entire hero is the PROBLEM.** No SIGNORA AI logo reveal inside the hero story, no signing avatar, no AI pipeline, no solution, no product UI and no prototype demo there. A small brand wordmark in the site navigation is acceptable; it must not interrupt the story.
5. The user can generate only **one 10-second cinematic/cartoon video at a time**. Architect the hero around one optional ten-second stylized video asset plus **web-native typography and audio**, not a mandatory 30-second video.
6. Opening sequence: blank off-white stage → recognizable original **two-tone Indian railway PA-style “ding-dong”** → exact headline **“NOT EVERY ANNOUNCEMENT IS HEARD.”** types **character by character**, each character with a tasteful synced tick → animated Indian railway station → young Deaf commuter doesn't receive an **audio-only platform-change notice** → other passengers move while they remain waiting. Finish on an **unresolved problem**.
7. The opening line is **visual text**, not spoken narration. The headline must be **real selectable HTML**, not letters baked into the AI-generated video.
8. Do not claim that Deaf people inherently cannot understand travel information: this scenario is a failure of **audio-only announcements and missing/inadequate visual updates**, not of the person.
9. **No public-facing simulated/live prototype UI.** The site is a static brand, research and capability explainer. Motion diagrams and conceptual illustrations are permitted when labelled appropriately.
10. Respect audio autoplay policies: default muted, with a prominent **“Enable sound”** action; never promise sound before interaction. Always offer **Skip intro**, subtitles/captions, pause/replay and reduced-motion support.
11. Avoid unsupported numerical performance claims, invented pilots, fake customer names, unapproved partner logos, and invented ISL output. Distinguish **working prototype**, **research**, **planned commercialization** and **future vision**.
12. Read installed `.agents/skills/ui-ux-pro-max/SKILL.md` and `.agents/skills/scroll-craft/SKILL.md` if present, then apply their relevant procedures. If absent, follow this file without pretending the skills were read.

---

## 1. The creative north star

### One-sentence concept

**“A railway announcement travels through a station — but not to everyone — and the rest of the site reveals how SIGNORA AI intends to make public communication accessible.”**

### The feeling

A high-quality **2.5D / stylized-3D animated short** meets a meticulously designed **modern product website**. Empathetic, inventive, calm, credible and memorable. It should feel made by an ambitious accessibility-tech startup, not like a college assignment, a generic SaaS template, or a futuristic AI landing page.

### The story arc (site-wide, not all in the hero)

| Chapter | Visitor feels | Core point | Interaction |
|---|---|---|---|
| 00. The announcement | Surprise, curiosity | Not every announcement is heard | Two-tone chime, tactile character reveal, 10s animation |
| 01. The gap | Empathy, understanding | Audio-only public information excludes passengers | Sticky scroll vignette + concise proof/context |
| 02. What if information could be seen? | Possibility | Introduce SIGNORA AI | Distinctive full-bleed typographic transition |
| 03. Our approach | Clarity | Voice/text → language processing → motion retrieval → 3D rendering | Interactive **conceptual** layered pipeline |
| 04. Where it works | Relevance | Transport, public displays, spatial/holographic communication, AI services | Chapter-driven service cards and settings |
| 05. The research | Trust | Hierarchical motion retrieval, motion library and research materials | Research library, methodology and publications |
| 06. What we're building toward | Scale | B2B deployments, partnerships, multi-domain growth | Realistic roadmap and industry map |
| 07. Join the mission | Action | Research collaboration / pilot conversations | Contact CTAs |

### Primary success metrics

- A visitor understands the **problem in ≤ 10 seconds** without sound.
- A judge understands what SIGNORA AI is, what is implemented vs planned, and why it matters by scrolling the next 2–3 chapters.
- A potential B2B collaborator can find the service offerings and a contact path quickly.
- Site is legible and functional on low-powered mobile devices and with reduced motion.

---

## 2. Visual identity

### Palette — exact design tokens

| Token | Hex | Purpose |
|---|---|---|
| `--canvas` | `#F7F8F3` | Primary warm off-white background |
| `--surface` | `#FFFFFF` | Cards and panels |
| `--surface-alt` | `#EFF4EC` | Sage-tinted panels |
| `--ink` | `#17231E` | Headlines/body high contrast |
| `--ink-muted` | `#5C6A62` | Secondary text |
| `--accent` | `#2F7455` | Deep fern green primary action |
| `--accent-bright` | `#62A989` | Animated highlights |
| `--accent-soft` | `#DCECE1` | Accent backgrounds / tags |
| `--line` | `#DDE4DD` | Card outlines and separators |
| `--dark-stage` | `#172B22` | Optional dramatic transition only |
| `--warning` | `#B47942` | Carefully used caution / status |

Gradient policy: restrained, primarily ambient radial glows such as pale sage into warm white. No rainbow glows or electric blue as the dominant color.

### Typography

- **Display:** `Manrope`, weight 600–800; alternatively `Sora` if the product brand prefers slightly more geometric personality.
- **Body/UI:** `Inter`, weights 400–600.
- **Technical labels and timestamps:** `IBM Plex Mono`, 400–500 (small, sparingly).
- **Hero statement:** uppercase, 700–800, tight but readable tracking; responsive clamp; **the typewriter effect is letter-by-letter, not a monospace coding-terminal look**.
- Preferred reading widths: headings `max-width: 16ch–21ch`, prose `max-width: 58ch–70ch`.
- Minimum body type: 16px. Avoid tiny gray text and low-contrast accents.

### Surfaces and geometry

- Global content max width **1280px**; page gutters desktop **64px**, tablet **32px**, phone **20px**.
- Section spacing desktop **112–160px**, tablet **80–112px**, mobile **64–88px**.
- Card radius **20–24px**; button radius **999px** or **14px** depending on hierarchy; illustration windows radius **28px**.
- Borders 1px `--line`, shadows light and diffuse only on elevated UI.
- Consistent chapter indexing `01 / 07`, running progress, small chapter captions.
- Navigation: minimal fixed header with SIGNORA AI wordmark, `Technology`, `Solutions`, `Research`, `About`, `Contact`, and one emphasized `Collaborate` CTA.

### Imagery and illustration

- Stylized **3D animated characters** (premium cartoon, not childish): refined material shading, soft global illumination, expressive but understated posture, slightly simplified faces.
- India-aware rail environment: realistic arrangement of platforms, rails, signage, luggage, roof structure and commuter attire. Use original fictional station names, avoid impersonating official railway interfaces.
- Lead character continuity: young Indian Deaf commuter, **sage/mint hoodie, navy backpack, charcoal trousers**, same appearance across all hero story frames.
- Hero scenes should have pale cream light with gentle sage, charcoal and muted warm-yellow accents.
- **Do not depict disability with stereotypical icons, hearing aids, sad faces, broken ears or forced sign-language gestures.** The environmental communication gap carries the story.
- Product imagery later in the page can use **conceptual motion-pipeline diagrams**, 3D avatar artwork **only if clearly marked as concept/validated content**, noninteractive screen illustrations and original station-display compositions.

---

## 3. Hero — exact behavior and 10-second storyboard

### Hero boundaries

The hero is an immersive **problem-only introduction**, ideally a pinned full-viewport sequence with no solution shown. Keep menu compact and avoid distracting CTAs during the first seconds. Render an optional **“Scroll to discover why”** hint at the end. The reveal of SIGNORA AI as a solution begins **after** crossing the hero boundary.

### Timeline

| Time | Visual | Audio | Implementation note |
|---|---|---|---|
| 0.0–1.3s | Empty warm-white background; barely visible expanding pale-green ripple. **No speaker, sign-language icon or logo**. | Original station-inspired two-tone **ding-dong**. | On sound-enabled user gesture; silent caption fallback `Railway announcement chime`. |
| 1.3–4.3s | Headline types **character by character**: `NOT EVERY ANNOUNCEMENT IS HEARD.` across 2–3 responsive lines. `HEARD` becomes green. | Subtle tick per visible character with tiny variation; tasteful final low emphasis. | Accessible HTML animated via GSAP; sound synced programmatically; **not generated into video**. |
| 4.3–6.2s | Headline dissolves/parts and stylized 3D cartoon Indian station glides into view; introduce protagonist waiting at platform. | Airy station ambience, footsteps, luggage. | Background video starts on correct first frame. |
| 6.2–8.2s | Announcement starts; nearby visual display does **not update** to reflect platform change; commuters respond. | Optional PA voice: “Attention please, the train will now depart from platform four.” Captions available. | Avoid unreadable AI-generated signage. Overlay platform indicator with real HTML if needed. |
| 8.2–10.0s | Other commuters move. The main character stays where they are, looking at unchanged information. Hold on a quiet close-up or medium-wide shot. | Audio recedes; faint room tone. | End on **unresolved** moment. Hold last frame for scroll transition. |

### Hero interaction state machine

```text
READY (static poster, no autoplay audio)
 ├─ user selects Enable Sound → SOUND_ENABLED
 ├─ user selects Play Silently → MUTED_PLAY
 └─ user selects Skip Intro → FINAL_HERO_FRAME

SOUND_ENABLED or MUTED_PLAY
 → CHIME (0.0–1.3)
 → TYPED_HEADLINE (1.3–4.3)
 → CHARACTER_STORY (4.3–10.0)
 → HOLD_FINAL_FRAME
 → Scroll starts chapter 01
```

- The **Play** affordance should not obscure the typography once the sequence starts.
- Sound effects **must not replay on every scroll reversal**. Replay only through explicit control.
- Use **real HTML** for headline, captions, controls, and final message, even when a video is present.
- If video missing, slow or blocked, show fallback illustrated **poster / CSS animation** without breaking layout.
- Mobile: render character in central safe area, avoid crop clipping head/backpack, preserve subtitle legibility, allow skip.
- Reduced motion: replace typing/scene transitions with a still image and fully readable headline, plus a `Continue` control.

### Hero final copy

Primary: **NOT EVERY ANNOUNCEMENT IS HEARD.**  
Optional caption after 10s: **“When essential information is delivered only through sound, some passengers are left without an update.”**  
**Do not** put the complete solution or the SIGNORA AI feature list here.

### Video production guidance

- Generate **one video asset** containing ONLY character/environment material, approximately **5.7 seconds** that occupies the last part of the 10s web experience. Alternatively, generate a full 10s clip with **0–4.3s deliberately blank** so web text can overlay cleanly; then edit/truncate if necessary.
- Video should **not contain baked-in headlines, UI panels, fake sign animation, random signs, logos or watermarks**.
- Master: 16:9, 1920×1080 minimum where supported; delivery: optimized MP4/H.264 + WebM optional; poster JPG/AVIF; short, loop-safe **ending hold** but not a constantly looping human story.
- If precise PA audio cannot be synthesized in the video, make it a separate controlled audio track. Use or compose an original station-inspired chime, not unauthorized borrowed audio.
- Supply captions for the platform-change announcement. Provide a transcript or succinct on-screen label for silent users.
- Treat the sequence as an **illustrative scenario**, not footage documenting an actual incident.

### Hero cinematic image prompt (for artwork only)

> Premium stylized 3D animated short film, fictional modern Indian railway station, creamy off-white daylight, muted sage and warm neutral palette, soft realistic global illumination, carefully designed architectural details, young Indian Deaf commuter wearing sage-green hoodie and navy backpack waiting near an unchanged platform information display. Other commuters react to an audio-only platform change and walk away; the main character remains waiting. Empathetic restraint, natural posture, no exaggerated distress, calm high-end animated-film rendering, coherent art direction, panoramic 16:9 framing, center-safe composition, subtle depth of field. No textual overlays, no logo, no sign-language avatar, no futuristic science fiction, no watermark.

---

## 4. Site architecture and full content map

### Navigation

`SIGNORA AI` / `Our Approach` / `Solutions` / `Research` / `About` / `Contact` + `Let's Collaborate`

### Section 01 — Problem, after hero

**Eyebrow:** `01 / THE COMMUNICATION GAP`  
**Headline:** `The information was broadcast. Access wasn't guaranteed.`  
**Body:** `In busy public spaces, announcements change journeys. When critical updates are delivered only as audio—or visual information is delayed or missing—Deaf and Hard-of-Hearing travellers can miss the message.`  

**Animation:** sticky station environment breaks into three subtle contextual cards:
- `A platform changes` — the essential update.
- `The crowd responds` — travellers move as they receive information.
- `Someone remains uninformed` — no accessible equivalent reaches them.

**Evidence policy:** Prefer verified accessibility standards and responsibly sourced facts; do not invent Indian disability statistics. If statistics are used, add citations with dates and sources.

### Section 02 — The reveal (first time to explain solution)

**Eyebrow:** `02 / OUR RESPONSE`  
**Headline:** `What if public announcements could be seen?`  
**Subline:** `Meet SIGNORA AI — working toward more accessible public communication through AI-assisted Indian Sign Language experiences.`  

**Motion:** pass the final hero's pale-green ripple into a visible motion path; controlled reveal of **SIGNORA AI** wordmark and brand phrase. Keep type direct, not marketing hype.  
**Brand line:** `Every announcement deserves to be understood.`

### Section 03 — How it works (conceptual, not a fake demo)

**Eyebrow:** `03 / THE TECHNOLOGY`  
**Headline:** `From an announcement to a visual language.`  

Show a responsive, **editable DOM/SVG pipeline**, with subtle connectors and active-step emphasis:

```text
Voice / Text Announcement
       ↓
Speech-to-Text (when input is audio)
       ↓
Language Processing / Content Structuring
       ↓
Hierarchical Motion Retrieval
       ↓
Motion Sequence Assembly / GLB Stitching
       ↓
3D ISL Avatar Rendering
       ↓
Public Display / Transit Screen / Spatial Display
```

**Technical positioning:** retrieval-based system with ISL motion assets and sequential animation; do not imply generic English-to-ISL word mapping is linguistically complete or that continuous ISL translation is fully validated. Annotate the pipeline as an architectural overview and distinguish implemented modules from ongoing research (using project-confirmed status only).

**Motion interaction:** chapter-controlled pipeline highlighting, animated motion tokens and persistent explanatory card; do not mock a live translation output.

### Section 04 — Solutions (three business pillars)

**Eyebrow:** `04 / WHERE SIGNORA AI GOES`  
**Headline:** `Designed for public spaces. Built to expand.`

#### A. SIGNORA Transit

**Positioning:** public announcement accessibility for rail, metro, airports and bus terminals.  
**Explain:** voice/text feed → retrieval-based ISL visual information, subject to integration, quality assurance and stakeholder validation.  
**Concept visual:** station departures board and optional signing-content pane.  
**CTA:** `Explore Transit`.

#### B. SIGNORA Spatial & Display

*Single combined service formerly described separately as Holo and Display.*  
**Positioning:** visual communication on **existing LCD/LED screens** and, where appropriate, **3D/holographic display installations** for exhibitions, events, retail, hospitals, campuses, public-sector spaces and advertising.  
**Explain:** one visual communication layer, adaptable to conventional screens and spatial showcase installations; do not suggest the hologram is already deployed if it is only conceptual.  
**Concept visual:** one continuous scene morphs between station LCD, hospital display and event-based holographic installation.  
**CTA:** `Explore Spatial & Display`.

#### C. SIGNORA AI Services & API

**Positioning:** broader AI solutions for organizations, including domain-specific chatbots, voice agents, automation/agent workflows, multimodal interfaces and integrations/API access **as proposed service capabilities**.  
**Explain:** the brand can serve sectors beyond accessibility, but avoid implying every offering is already developed or deployed.  
**Concept visual:** calm modular ecosystem map rather than unverified live screenshots.  
**CTA:** `Discuss an AI Workflow`.

**Card motion:** Eigi-inspired **story-driven, one-at-a-time attention**, not three generic feature cards. Example: a fixed illustrative public-space scene changes context as cards become active. Keep original layout and illustration language.

### Section 05 — Use cases

**Eyebrow:** `05 / REAL-WORLD CONTEXTS`  
**Headline:** `Information should reach the whole room.`

Contexts: Rail & Metro; Airports & Bus Terminals; Hospitals; Colleges & Campuses; Government & Public Service; Events, Exhibitions & Retail.

For each show **who needs information**, **what kind of information**, **a plausible SIGNORA service format**, and **deployment assumptions/constraints** (screens, content coverage, sign-linguistic validation, approvals). Use brief scenarios, not invented customer testimonials.

**Interaction:** horizontally progressing illustrated environmental cards or scroll-snapped scenes with clear keyboard alternative and no scroll trapping.

### Section 06 — Research and method

**Eyebrow:** `06 / RESEARCH & DEVELOPMENT`  
**Headline:** `Built on motion. Grounded in communication.`  
**Body:** `Our research explores how structured announcement content can be aligned with a library of Indian Sign Language motion assets and assembled into coherent 3D animation sequences.`

Recommended explainer modules:
1. **Hierarchical retrieval** — input decomposition and asset matching.
2. **Motion library** — motion asset indexing and coverage.
3. **Sequence continuity** — GLB stitching/transitions and playback.
4. **Linguistic evaluation** — Deaf/ISL expert validation and comprehension testing (planned/ongoing; avoid claiming completed studies without evidence).

**Research materials UI:** featured video tile, document/publication cards, architecture diagrams, downloadable materials or external links. This section must be **content-driven**; represent user-supplied videos and documents as **placeholders until the final URLs and permissions are supplied**. No invented research-paper links or results.

Possible card titles:
- `System architecture`
- `Hierarchical retrieval & fallback`
- `Motion library design`
- `Animation sequencing and rendering`
- `Research paper & methodology`
- `Project film / explainer`

For external Google Drive assets: require link sharing permission. Use proper document title, date, file type and source. Host media responsibly; don't embed inaccessible Drive folder links as though they were direct videos.

### Section 07 — Recognition & progress

**Eyebrow:** `07 / MILESTONES`  
**Headline:** `A student research idea. A larger ambition.`

Project-provided achievement to verify before publishing: **1st place in AI for Social Impact, 2nd overall among 152 teams at AI Hackathon 2026 (“AI in India, AI for India”), St. Vincent Pallotti College of Engineering and Technology, Nagpur.**

Visual pattern: restrained editorial timeline with exact dates, photos/certificates only when available. Add research outcomes, talks or prototypes only after team verification. Avoid fake investors, partner badges, claims of deployment or “certified accurate” labels.

### Section 08 — Vision and collaboration

**Eyebrow:** `08 / NEXT CHAPTER`  
**Headline:** `Let's make essential information more accessible.`  
**Supporting:** `We welcome conversations with transit organizations, display manufacturers, accessibility researchers, Deaf community experts, institutions and potential pilot collaborators.`

CTAs: `Partner With Us` / `Explore Research` / `Contact the Team`. Connect to verified channels only; if no email is available, use a simple prefilled `mailto:` placeholder for configuration or a static contact section with no fake submission success.

### Footer

SIGNORA AI wordmark; short description; anchors; research/contact links; `© {current year} SIGNORA AI`; optional `Made in India` if approved; accessibility statement; privacy link only if a real privacy policy exists.

---

## 5. Signature interactions inspired by Eigi's story structure

**Borrow principles, never identity.** Eigi uses long-form chapter framing, evolving explanatory scenes, progress counters, illustrative characters, contextual interfaces, and sticky visual storytelling. Adapt these mechanics into SIGNORA's original language:

1. **The station as the anchor:** the environment introduced in the hero remains a conceptual motif across problem-to-solution transitions.
2. **A progressing motion ribbon:** pale-green sound pulse becomes a motion-sequence track after the solution reveal. The visual metaphor changes meaning across chapters.
3. **Numbered chapters:** `01 / 08` markers with a slim vertical progress rail that updates as the user scrolls.
4. **Sticky story stage:** short pinned viewport sequences for the hero, problem and pipeline; regular scrolling for research and contact.
5. **Living cards:** use subtle UI simulations (e.g., an information board with illustrative statuses) only as conceptual, not real prototype screenshots.
6. **An evolving environment:** transit screen → hospital screen → event/spatial display as visitors switch solutions.
7. **Outcome-first copy:** large one-line statements, short supporting paragraphs, purposeful details in expandable cards.
8. **Visual rhythm:** not every section needs motion. Alternate cinematic moments with editorial content and whitespace.
9. **Tiny human moments:** the Deaf traveller is a normal commuter with agency, not an object of pity. The research and solution chapters can show collaboration and accessibility design without staging a miraculous cure.

### Rules for motion

- Animate **meaning**, not decorations. Movement should mark a state change in the story.
- Prefer `transform`/`opacity` animation; avoid scroll listeners that reflow the page.
- Typical micro-animation `180–360ms`; text entrances `400–650ms`; large transition `700–1200ms`, interruptible.
- Use ease curves such as `power2.out` / `power3.inOut`; scroll linked sequences should use scrub smoothing where appropriate.
- Animate typography **only once** per explicit hero play. Every letter has its own HTML node with an accessible full string equivalent.
- No forced horizontal scrolling on mobile. No permanent scroll-jacking. No animation that blocks reading.

---

## 6. Responsive design behavior

| Element | Desktop ≥ 1024px | Tablet 768–1023px | Mobile ≤ 767px |
|---|---|---|---|
| Header | Full anchor links, CTA | Compact links | Wordmark + menu + sound control |
| Hero | Full-viewport story; central-safe 16:9 film | 16:9 cover with responsive padding | Cinematic crop with poster/portrait-safe composition; avoid illegible overlay |
| Headline | 64–104px (`clamp`) | 48–72px | 34–52px, natural line wrap |
| Story | Pinned stage + text rail | Simplified pinned transitions | Short native scroll blocks + optional silent replay |
| Solutions | Context artwork with adjacent narrative | Stacked two-column | One card per view, accessible tabs/details |
| Research | 3-column library grid | 2-column | 1-column |
| Animation | Full if preference allows | Optimized | Reduced video bitrate, smaller particle budget |

**No critical information should depend on a specific screen size, hover behavior, or audio access.**

---

## 7. Frontend architecture / implementation spec

### Preferred stack

- **Next.js + TypeScript** with static export (`output: 'export'`) for a simple marketing site; alternatively Vite + React + TypeScript if this better matches the existing codebase.
- **Tailwind CSS** with CSS variables/tokens in `globals.css`.
- **GSAP + ScrollTrigger** for chapter orchestration and pinned scenes; **SplitText only if licensing/availability is confirmed**, otherwise build a lightweight accessible grapheme splitter with `Intl.Segmenter`.
- **Framer Motion / Motion** optionally for small independent UI interactions, but don't duplicate GSAP timeline ownership.
- **React Three Fiber / Three.js** only for one high-impact, measured 3D scene if necessary. Prioritize the pre-rendered hero animation and lightweight SVG/DOM for performance.
- `next/image` or optimized image handling where compatible with static export; self-hosted compressed assets where appropriate.
- **No required backend, accounts, fake chatbots or interactive prototype**, as this is a static public website.

### Proposed project structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    site-header.tsx
    hero/
      HeroExperience.tsx
      CharacterHeadline.tsx
      AudioController.tsx
      HeroVideoStage.tsx
    chapters/
      ProblemChapter.tsx
      SolutionReveal.tsx
      TechnologyPipeline.tsx
      SolutionsChapter.tsx
      UseCasesChapter.tsx
      ResearchLibrary.tsx
      Milestones.tsx
      Collaborate.tsx
    primitives/
      ChapterLabel.tsx
      ProgressRail.tsx
      StoryCard.tsx
      MotionAccessible.tsx
  data/
    content.ts
    research.ts
  hooks/
    useReducedMotion.ts
    useScrollChapter.ts
  lib/
    animation.ts
    motion.ts
public/
  media/
    hero-station.mp4
    hero-station.webm          # optional
    hero-poster.avif
    railway-chime.mp3
    typography-tick.mp3
  images/
    illustrations/
    diagrams/
  fonts/
```

### Separation of concern

- `content.ts`: headings, descriptions, status labels, solution definitions — easy to edit without touching animation.
- `research.ts`: metadata for actual documents, videos and research links; include empty-state until assets are configured.
- `HeroExperience`: handles explicit play/skip/replay state; do not make playback timing depend on scroll while the intro is playing.
- `AudioController`: opt-in/mute, tracks, caption toggle, user preference during session.
- `TechnologyPipeline`: narrative illustration, no network calls, real semantic accessible descriptions.
- `ScrollTrigger` sections: register once, clean up on unmount, refresh after media loads, avoid overlapping pinned containers.

### Example chapter data shape (conceptual)

```ts
export type StoryChapter = {
  id: string;
  index: number;
  eyebrow: string;
  heading: string;
  body: string;
  media?: { type: 'video' | 'image' | 'svg'; src: string; alt?: string };
  motion?: 'pinned' | 'reveal' | 'static';
};
```

### Performance budgets and loading

- LCP target < 2.5 s on a representative 4G mobile test **as a goal, not a guaranteed result**.
- CLS target < 0.1; INP target < 200 ms where measured.
- Preload one lightweight hero poster and critical font; don't preload every chapter's images/videos.
- Load the MP4 lazily or with `preload="metadata"`; start only on user interaction or an explicitly muted cinematic intro if chosen. **Sound must require interaction**.
- Lazy load below-fold media and 3D modules; dynamically import optional heavyweight animations.
- Use AVIF/WebP for editorial images, compressed video, responsive source selection; design a still fallback.
- Consider `content-visibility: auto` for simple below-fold sections, but test against ScrollTrigger measurement.
- Do not force a loading screen that delays content indefinitely. Aim for fast first meaningful paint.

---

## 8. Accessibility is a core product value

- Target **WCAG 2.2 AA** where feasible, including semantic headings, focus states, keyboard navigation, visible labels and sufficient contrast.
- Provide **captions/transcripts for the station announcement** and text equivalent for the chime. Never assume an audio cue is accessible to every visitor.
- Explicit audio opt-in; clear mute and replay controls; controls remain reachable after playback.
- Respect `prefers-reduced-motion: reduce` and provide skip/stop for prolonged or moving content.
- Avoid flashing, motion-triggered nausea, excessively fast camera movement and text that becomes unreadable during transitions.
- `NOT EVERY ANNOUNCEMENT IS HEARD.` should be exposed once to assistive tech rather than read as separate letters. Render animated letters `aria-hidden="true"` and provide one full visually-hidden string or an accessible labelled container.
- Don't present **synthetic sign-language motions** as linguistically valid. Only show verified signing assets with appropriate review/context.
- On dark-stage sections, keep contrast high and restore visible focus rings.
- Avoid scroll traps, keyboard-only dead ends and hover-only explanations.

---

## 9. Content voice and editorial system

### Tone

Human, precise and empathetic. Short declarative headlines paired with plain-language explanations. Accessibility and AI both matter; neither should be exploited for drama. Claims must match the maturity of the actual research.

### Approved core lines

- **Hero:** `NOT EVERY ANNOUNCEMENT IS HEARD.`
- **Problem:** `The information was broadcast. Access wasn't guaranteed.`
- **Reveal:** `What if public announcements could be seen?`
- **Company intro:** `SIGNORA AI is exploring AI-assisted Indian Sign Language communication for essential public information.`
- **Brand tagline:** `Every announcement deserves to be understood.`
- **Technology:** `From spoken words and text to structured motion and visual communication.`
- **Services:** `One mission. Multiple ways to make communication more useful.`
- **Research:** `Built on motion. Grounded in communication.`
- **Contact:** `Let's make essential information more accessible.`

### Avoid

- “Revolutionizing accessibility for millions” without substantiation.
- “100% accurate real-time ISL translation” or “fully production-ready” unless independently validated.
- Equating sign language with basic English word substitution.
- Calling people “deaf and mute” or “suffering from deafness.” Prefer **Deaf and Hard-of-Hearing** unless stakeholders specify another terminology.
- “Our technology solves the problem completely.”

---

## 10. Research content configuration

Source materials will be provided by the SIGNORA AI team. Support a featured **research film** plus document cards. Until URLs are verified, show explicit placeholders in the content source, NOT broken buttons.

```ts
export const researchAssets = [
  {
    id: 'research-film',
    title: 'Research & Development Film',
    kind: 'video',
    url: null, // team to supply verified public viewing URL
    status: 'awaiting-asset',
  },
  {
    id: 'research-paper',
    title: 'Hierarchical Motion Retrieval Research Paper',
    kind: 'document',
    url: null,
    status: 'awaiting-asset',
  },
  {
    id: 'architecture-diagrams',
    title: 'Architecture and Motion Library Diagrams',
    kind: 'document',
    url: null,
    status: 'awaiting-asset',
  },
];
```

Potential editorial references from team history: `SIGNORA AI: An AI-Driven Hierarchical Motion Retrieval System for ISL Translation of Public Announcements`; final paper title, authors, publication status and permission must be confirmed. Avoid automatic download/embedding of private Google Drive files.

---

## 11. Build phases for Google Antigravity

**Phase 1 — Source and audit**
1. Inspect existing project, components and assets before editing.
2. Read installed UI UX Pro Max and Scroll Craft skill instructions if available.
3. Identify current framework, style tokens and routing. Preserve working structure.
4. Check real media files and research links. Record missing assets.

**Phase 2 — Design system & static page**
1. Establish tokens, font scale, spacing, button variants, card states and responsive grid.
2. Build site structure and all chapter copy before heavy animation.
3. Insert original illustrations or clearly marked placeholders; avoid fake prototype screenshots.
4. Test responsive breakpoints and keyboard behavior.

**Phase 3 — Hero introduction**
1. Build `READY → PLAY → HOLD` state machine.
2. Implement optional audio chime with explicit permission.
3. Implement grapheme-aware synchronized letter reveal (the headline stays HTML).
4. Add edited stylized hero station video and poster fallback.
5. Add captions, skip, replay, mute and reduced-motion branch.

**Phase 4 — Scroll craft**
1. Add numbered chapter markers and progress rail.
2. Add one story pin at a time; verify scroll distances across devices.
3. Build conceptual pipeline and 3-pillar service scene transitions.
4. Add restrained card, text and media animations.

**Phase 5 — Trust & conversion**
1. Populate verified research assets, awards and relevant collaborators.
2. Implement working navigation and real contact destinations.
3. Run accessibility, performance and layout reviews.
4. Ensure static export/deployment build succeeds.

---

## 12. Acceptance criteria / definition of done

### Hero
- [ ] Opening canvas has **no sign image, loudspeaker image, or SIGNORA logo reveal**.
- [ ] Recognizable original `ding-dong` railway-style chime plays **only after user sound opt-in**.
- [ ] Exact headline is spelled correctly, letter by letter, with synchronized subtle ticks.
- [ ] Headline text remains real HTML and is accessible as a full phrase.
- [ ] 10s experience transitions into the same cartoon character and station art direction.
- [ ] Clear audio-only information gap without stereotyping or depicting the protagonist as helpless.
- [ ] Only problem shown. No solution or signing avatar revealed inside hero.
- [ ] Caption, mute, skip, replay, reduced-motion and video fallback work.

### Site-wide
- [ ] Original composition inspired by Eigi's **narrative principles**, not a visual clone.
- [ ] Light sage/off-white visual system matches SIGNORA AI user-chosen reference.
- [ ] Site is a static company/research experience; **no fake live prototype**.
- [ ] Product pillars: **Transit**, **Spatial & Display (Holo + Display combined)**, **AI Services & API**.
- [ ] Research film and document library supports real links but never invents them.
- [ ] Technical pipeline is legible and honestly marked conceptual/verified.
- [ ] Recognition claims reviewed by team before public display.
- [ ] All CTAs resolve to actual on-page sections or verified external destinations.
- [ ] Responsive and keyboard accessible from 320px through desktop widths.
- [ ] No console errors, unresolved media paths, animation layout shifts or broken static build.

---

## 13. Handoff prompt for the Antigravity coding agent

> **Implement this document as the authoritative design specification for SIGNORA AI.** First inspect the existing repository and read relevant installed skill instructions. Use [eigi.ai](https://eigi.ai/) only as a reference for chapter-based scrollytelling, motion progression, and contextual explanation; do **not** copy its design. Preserve the user's sage/off-white brand language. Build an original, static, premium React-based marketing site with fully accessible 10-second problem-only hero (railway chime, character-by-character “NOT EVERY ANNOUNCEMENT IS HEARD.”, stylized Deaf commuter and audio-only platform-change scenario). Keep the video and sound as optional assets with proper fallbacks. After the hero, introduce SIGNORA AI, explain hierarchical motion retrieval, present Transit / Spatial & Display / AI Services & API, and then research, milestones and collaboration. Distinguish concept from implementation and never fabricate claims or fake a live prototype. Make the site performant, mobile-friendly, keyboard accessible, and reduced-motion aware. Implement in phases and verify the final build.

---

## Reference and attribution note

- [Eigi](https://eigi.ai/) — reference for **chapter storytelling**, guided interactive explanations, character-centric narrative and progressive reveal, not for reproduction of specific copyrighted visual assets or source code.
- User-provided SIGNORA AI project and design direction — foundation for product story, visual palette, business pillars, hero narrative and technical architecture.
- This document intentionally contains **implementation targets and suggested copy**, not claims that any proposed website section or product service has already been deployed.
