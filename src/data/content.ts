export const brand = {
  name: 'SIGNORA AI',
  tagline: 'Every announcement deserves to be understood.',
  description: 'A student-founded startup developing AI-assisted Indian Sign Language communication toward responsible commercialization.',
  stage: 'Student-founded · Not yet legally registered',
  email: 'sumithelonde2005@gmail.com',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Technology', href: '/technology' },
  { label: 'Industries', href: '/industries' },
  { label: 'Research', href: '/research' },
  { label: 'Impact', href: '/impact' },
  { label: 'Future Scope', href: '/future' },
  { label: 'About', href: '/about' },
  { label: 'Partner With Us', href: '/partners' },
] as const;

export type ContentCard = { title: string; description: string; tag?: string };

export const products = [
  {
    id: 'transit',
    index: '01',
    name: 'SIGNORA Transit',
    status: 'Research-led prototype',
    tagline: 'Essential journeys. Accessible information.',
    description: 'An approach for translating structured text and spoken transport announcements into sequenced 3D Indian Sign Language motion content. Broader deployment requires domain coverage, integration, linguistic review, and safety testing.',
    details: ['Railway and metro announcements', 'Airports and bus terminals', 'Multi-display information workflows'],
  },
  {
    id: 'spatial',
    index: '02',
    name: 'SIGNORA Spatial & Display',
    status: 'Planned offering',
    tagline: 'One communication layer. Many surfaces.',
    description: 'A proposed format for presenting 3D communication on existing LCD/LED screens or suitable spatial and holographic installations, including public institutions, events, and exhibitions.',
    details: ['Existing public information screens', 'Event and exhibition installations', 'Concept-stage holographic experiences'],
  },
  {
    id: 'ai',
    index: '03',
    name: 'SIGNORA AI Services & API',
    status: 'Proposed services',
    tagline: 'Applied AI beyond a single use case.',
    description: 'A future service portfolio encompassing organizational chatbots, voice agents, automation workflows, and integration APIs. These are proposed business directions, not claims of commercially deployed products.',
    details: ['Domain-focused AI assistants', 'Voice and agent workflows', 'Partner integrations and APIs'],
  },
] as const;

export const pipeline: ContentCard[] = [
  { title: 'Voice or text announcement', description: 'An operator or information system supplies public announcement content.', tag: 'INPUT' },
  { title: 'Speech-to-text', description: 'Audio can be transcribed before further processing. Text input skips this step.', tag: 'OPTIONAL' },
  { title: 'Language processing', description: 'Normalize the message and identify announcement intent and structured entities.', tag: 'NLP' },
  { title: 'Hierarchical motion retrieval', description: 'Search reusable content at sentence, phrase, word, and fingerspelling levels.', tag: 'CORE RESEARCH' },
  { title: 'Motion sequence assembly', description: 'Arrange available GLB motion assets and manage transitions between clips.', tag: 'ANIMATION' },
  { title: '3D avatar and display', description: 'Render the resulting visual sequence for an appropriate screen or display environment.', tag: 'OUTPUT' },
];

export const industries: ContentCard[] = [
  { title: 'Railways & metro', description: 'Arrivals, departures, platforms, delays, and urgent service updates presented in accessible visual formats.' },
  { title: 'Airports & transportation', description: 'Potential integration with existing passenger information systems, subject to verification and approval.' },
  { title: 'Healthcare & hospitals', description: 'Appointment, queue, and service announcements on existing information displays.' },
  { title: 'Schools & universities', description: 'Campus announcements and future accessible educational content experiences.' },
  { title: 'Government & public infrastructure', description: 'Public service information, directions, and safety communication.' },
  { title: 'Advertising & retail', description: 'Conceptual branded 3D information experiences and inclusive public-facing messaging.' },
  { title: 'Exhibitions & events', description: 'Visual guides, scripted information, and possible future holographic installations.' },
];

export const team = [
  { name: 'Sumit Helonde', role: 'Lead AI Research & Neural Systems', initials: 'SH' },
  { name: 'Palak Batra', role: 'Product Architecture & User Experience', initials: 'PB' },
  { name: 'Hrutuja Wankhede', role: 'Motion Intelligence & ISL Linguistics', initials: 'HW' },
  { name: 'Shravan Sapate', role: 'Systems Architecture & Deployment', initials: 'SS' },
] as const;

export const researchResources = [
  { title: 'Research paper', kind: 'Document', url: null, note: 'Final paper and institutional permission pending' },
  { title: 'Research and development film', kind: 'Video', url: null, note: 'Approved public video URL pending release' },
  { title: 'System architecture diagrams', kind: 'Diagrams', url: null, note: 'Review and technical documentation release pending' },
  { title: 'Evaluation materials', kind: 'Research', url: null, note: 'Protocol and preliminary results pending formal review' },
] as const;

export const futureDirections: ContentCard[] = [
  { title: 'Accessible educational video companion', tag: 'PRIORITY VISION', description: 'Explore a browser extension or companion where a learner shares a supported video link and a synchronized, movable 3D ISL interpreter appears in a corner of the screen. This requires transcript access, alignment, linguistic research, and validation.' },
  { title: 'Advanced Indian Sign Language intelligence', description: 'Expand domain coverage, motion quality, and research-informed linguistic evaluation.' },
  { title: 'Holographic communication', description: 'Explore spatial representation of approved sign and information assets on next-generation displays.' },
  { title: 'Multimodal AI agents', description: 'Investigate coordinated language, visual, and voice workflows for defined enterprise and public use cases.' },
  { title: 'Voice assistants and conversational systems', description: 'Potential future services for organizations, independent of the sign language research prototype.' },
  { title: 'Smart infrastructure integration', description: 'Study integration patterns with public information and transportation control systems.' },
  { title: 'Next-generation display systems', description: 'Extend conventional display experiences to new public physical contexts.' },
  { title: 'AR, VR and immersive experiences', description: 'Research accessible visual communication in spatial and extended reality interfaces.' },
  { title: 'International research collaborations', description: 'Explore cross-border partnerships and language-specific research without assuming motion transfer across distinct sign languages.' },
  { title: 'API and ecosystem integrations', description: 'Investigate third-party developer integration, shared evaluation frameworks, and responsible commercialization.' },
];

export const collaborators: ContentCard[] = [
  { title: 'Transport and public institutions', description: 'Explore accessible information workflows, operational requirements, and potential supervised pilot evaluations.' },
  { title: 'Deaf community experts & educators', description: 'Co-design, linguistic guidance, comprehension studies, and accessibility evaluation throughout development.' },
  { title: 'Universities and research labs', description: 'Methodology, motion-language research, evaluation protocols, and academic publication collaboration.' },
  { title: 'Technology and display partners', description: 'Assess integration with public displays, spatial hardware, and approved content pipelines.' },
  { title: 'Commercial and investment partners', description: 'Discuss market exploration and future startup development without claiming current deployments.' },
];
