# SIGNORA AI design system

## Direction

Architectural restraint, editorial hierarchy, and cinematic transitions for a research-led accessibility company. The system avoids dashboard styling, generic SaaS cards, decorative glass, and unverified technical spectacle.

## Palette

| Role | Value | Use |
|---|---|---|
| Obsidian | `#0D1115` | Primary dark ground, navigation, hero transitions |
| Graphite | `#20282E` | Secondary dark sections and elevated fields |
| Porcelain | `#F0EDE6` | Editorial ground and primary light-on-dark ink |
| Champagne | `#B5A38A` | Selective emphasis, focus, progress, primary signal |
| Mineral sage | `#829B99` | Functional diagrams and technology states |

Obsidian and porcelain dominate. Champagne is a deliberate highlight. Sage belongs to functional information. Gradients, if any, may only clarify lighting in the existing station illustration.

## Typography

- Display: Avenir Next or Segoe UI Variable Display fallback.
- Body: Aptos or Segoe UI Variable Text fallback.
- Data labels: IBM Plex Mono or Cascadia Mono fallback, only for real labels and states.
- Display line-height: 0.88 to 1.02. Body line-height: 1.6 to 1.72.
- Body measure: 45 to 70 characters. Oversized type is reserved for title pages and one narrative peak.

## Grid and rhythm

- Content max width: 1320px.
- Fluid gutter: 22px to 68px.
- Twelve-column editorial grid on desktop; one column below 768px.
- Section space: 92px to 176px desktop, 78px mobile.
- More space before a section heading than between its heading and supporting copy.
- Hard ground changes separate chapters. Do not blur section boundaries together.

## Surfaces and components

- Default surfaces are flat. Use a hairline or proximity before a container.
- Radius is 2px to 6px for media and editorial panels. Pills are reserved for controls and status labels.
- Header blur is the only persistent glass treatment.
- Collections use ruled editorial indices, asymmetric ledgers, diagrams, or timelines instead of repeated icon cards.
- Primary collaboration wording is always `Partner with us`.

## Motion

- Shared ease: `cubic-bezier(0.23, 1, 0.32, 1)`.
- UI state changes: 150 to 220ms. Scroll movement is driven by the visitor's hand.
- Transform, opacity, and SVG stroke only for continuous motion.
- Homepage peak: the spoken waveform becomes a visible path.
- Mobile removes pinned gap, technology, and contexts sequences. Reduced motion renders all content in its final readable state.

## Accessibility and evidence

- Body text contrast at least 4.5:1 and controls/focus at least 3:1.
- Every control has visible hover, focus-visible, active, and disabled states where relevant.
- No invented metrics, deployments, testimonials, customers, validated signing, or performance figures.
- Concept visuals are labelled as concepts and never presented as live product interfaces.
- Audio is opt-in; captions, silent playback, skip, replay, and reduced motion remain available.

## Page composition

- Home: problem-led scroll narrative with the signal trace as the recurring motif.
- Solutions: contextual product gallery and alternating offering ledgers.
- Technology: operable architecture map and motion-library diagram.
- Industries: vertical context index and deployment method.
- Research: research question, investigation ledger, approved-material placeholders, evidence boundary.
- Impact: paired access comparison and restrained milestone record.
- About: manifesto, mission/vision split, illustrative team carousel, grounded timeline.
- Future Scope: honest companion schematic and opportunity index.
- Partner With Us: collaboration modes and focused mailto-based enquiry.
