import type { Metadata } from 'next';
import { PageIntro, Section, CTA, Cards, Status } from '@/components/UI';
import { Pipeline } from '@/components/Scrollytelling';
import { pipeline } from '@/data/content';
export const metadata: Metadata = { title: 'Technology' };
const layers = [
  { title: 'Sentence-first matching', description: 'Look for the most contextual available unit before falling back to smaller units.' },
  { title: 'Phrase-level retrieval', description: 'Use indexed multi-sign sequences where whole-sentence coverage is unavailable.' },
  { title: 'Word-level retrieval', description: 'Retrieve individual catalogued assets when sentence and phrase units are missing.' },
  { title: 'Fingerspelling fallback', description: 'Handle some unmatched names or tokens through alphabet-level assets, subject to context and review.' },
];
export default function TechnologyPage(){return <div className="subpage subpage--technology">
  <PageIntro number="03 / 09" eyebrow="UNDER THE SURFACE" title="A structured path from announcement to motion." lead="The SIGNORA AI research architecture combines content processing, hierarchical motion retrieval and 3D sequence playback. It does not claim to solve the full linguistic complexity of Indian Sign Language."/>
  <Section title="Follow the announcement." intro="Explore each stage below. Text can bypass speech-to-text, while visual output depends on available motion content, sequence quality and verification."><Pipeline/></Section>
  <Section tone="sage" number="01" eyebrow="HIERARCHICAL RETRIEVAL" title="Look for the whole before the pieces." intro="Retrieval is prioritized across multiple levels rather than relying only on isolated word substitutions."><Cards items={layers} columns={2}/></Section>
  <Section number="02" eyebrow="THE MOTION LIBRARY" title="A library of reusable movement." intro="Motion assets are indexed by canonical terms and aliases for retrieval. Coverage, version control, validation and licensing must be managed as the library grows."><div className="technical-overview"><div className="technical-visual" aria-hidden="true"><span className="technical-root">MOTION LIBRARY</span><span>Sentence</span><span>Phrase</span><span>Word</span><span>Alphabet</span></div><div><Status>Research-led implementation</Status><h3>GLB assets. Ordered sequencing. 3D playback.</h3><p>The broader system explores asset selection, animation transitions, sequential rendering and operator-driven multi-screen workflows. The quality of individual signs and transitions requires systematic evaluation.</p></div></div></Section>
  <Section number="03" eyebrow="SYSTEM INTEGRATION" title="From content systems to public displays." intro="Potential integrations include operator announcement consoles, passenger-information feeds and compatible display clients. Every operational integration would need authorization, safety policies and extensive testing."><Cards items={pipeline.slice(0,3)} columns={3}/></Section>
  <Section tone="sage" title="Clear boundaries build trust." intro="An architectural animation is not proof of translation quality. One real-user test is an early signal for research, not statistically meaningful validation."><div className="statement-strip"><span>RETRIEVAL ≠ COMPLETE LINGUISTIC UNDERSTANDING</span><span>PROTOTYPE ≠ VERIFIED DEPLOYMENT</span></div></Section>
  <CTA title="Help shape the research." body="We are interested in technical partnerships, ISL linguistic review and carefully designed comprehension studies."/>
</div>;}
