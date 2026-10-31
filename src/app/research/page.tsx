import type { Metadata } from 'next';
import { PageIntro, Section, CTA, ResourceEmpty, Cards, Status } from '@/components/UI';
import { researchResources } from '@/data/content';
export const metadata: Metadata = { title: 'Research & Innovation' };
const questions = [
  {title:'Coverage & fallback', description:'How well do sentence, phrase, word and fingerspelling levels cover public-announcement content?'},
  {title:'Sequence continuity', description:'How can retrieved animation clips be arranged with coherent transitions and appropriate timing?'},
  {title:'Comprehension', description:'How do Deaf and ISL-proficient viewers understand complete sequences without audio?'},
  {title:'Operational reliability', description:'What is required for repeatable playback, resource management and responsible public-information use?'},
];
export default function ResearchPage(){return <div className="subpage subpage--research">
  <PageIntro number="05 / 09" eyebrow="METHOD BEFORE CLAIMS" title="Built on motion. Grounded in communication." lead="Our research explores how structured public announcements can be matched with indexed ISL motion assets and presented as coherent 3D sequences."/>
  <Section title="The research question." intro="How can a limited, structured domain be translated into accessible visual communication through retrieval rather than generating new motions for every message?"><div className="research-statement"><span>INPUT</span><strong>Understand content</strong><span className="research-arrow">→</span><strong>Retrieve motion</strong><span className="research-arrow">→</span><strong>Assemble sequence</strong><span className="research-arrow">→</span><strong>Evaluate comprehension</strong></div></Section>
  <Section tone="sage" title="What we are investigating." intro="The following areas frame current and planned engineering and linguistic questions."><Cards items={questions} columns={2}/></Section>
  <Section title="Research materials." intro="Research documents, diagrams, publications and video links will be released only after final review and approval."><div className="resources-grid">{researchResources.map(item=><ResourceEmpty key={item.title} {...item}/>)}</div></Section>
  <Section tone="sage" title="Early evidence, clear limitations." intro="The team reports a prototype test involving one real user. No generalizable comprehension statistic is claimed from that test."><div className="research-constraints"><div><Status>Reported early evaluation</Status><h3>One real-user test</h3><p>Early qualitative feedback is valuable for identifying issues. A larger documented evaluation with Deaf/ISL users, appropriate protocols and comparison conditions remains necessary.</p></div><div><Status>Pending publication</Status><h3>Results and methodology</h3><p>Final research papers, numerical outcomes, diagrams and approved videos will be added when supplied. Nothing on this page represents a peer-reviewed publication.</p></div></div></Section>
  <CTA title="Research is stronger together." body="We welcome ISL experts, Deaf community participants, researchers and institutional collaborators."/>
</div>;}
