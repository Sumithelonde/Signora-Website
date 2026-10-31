import type { Metadata } from 'next';
import { PageIntro, Section, CTA, Cards } from '@/components/UI';
import { industries } from '@/data/content';
export const metadata: Metadata = { title: 'Industries' };
export default function IndustriesPage(){return <div className="subpage subpage--industries">
  <PageIntro number="04 / 09" eyebrow="WHERE COMMUNICATION HAPPENS" title="Information is everywhere. Access should be too." lead="Seven proposed application sectors. Each offers a different route to more inclusive information and each has distinct validation and deployment requirements."/>
  <Section title="One idea. Many real-world contexts." intro="Illustrative use cases, not customer deployments."><Cards items={industries} columns={3}/></Section>
  <Section tone="sage" title="A useful deployment starts with the context." intro="The same motion assets cannot automatically cover all settings or sign languages. Every new sector requires a scope of approved messages, users and operational constraints."><div className="steps-row"><article><span>01</span><h3>Understand the information</h3><p>What changes, who needs it, how quickly and in which environment?</p></article><article><span>02</span><h3>Check available coverage</h3><p>Assess content, ISL assets, linguistic review and appropriate output surfaces.</p></article><article><span>03</span><h3>Evaluate with people</h3><p>Co-design and comprehension testing with Deaf users before deployment claims.</p></article></div></Section>
  <CTA title="Have an industry-specific problem?" body="We welcome exploratory discussions to understand the communication requirements in your environment."/>
</div>;}
