import type { Metadata } from 'next';
import { PageIntro, Section, CTA, Status, TextLink } from '@/components/UI';
import { SolutionShowcase } from '@/components/Scrollytelling';
import { products } from '@/data/content';
export const metadata: Metadata = { title: 'Solutions' };
export default function SolutionsPage() { return <div className="subpage subpage--solutions">
  <PageIntro number="02 / 09" eyebrow="THE ECOSYSTEM" title="One purpose. Three directions." lead="SIGNORA AI begins with accessibility research and explores adjacent communication and applied-AI services. Product maturity is shown for each offering." />
  <Section title="From research to real settings." intro="Select an offering to change the conceptual environment. These visuals explain intentions and do not show a deployed system."><SolutionShowcase/></Section>
  {products.map((product, i) => <Section key={product.id} id={product.id} tone={i===1?'sage':'light'} number={`0${i+1} / 03`} eyebrow={product.status.toUpperCase()} title={product.name} intro={product.description}><div className="solution-detail"><div className="detail-art"><span className="detail-art-index">{product.index}</span><span className="detail-art-symbol" aria-hidden="true">{i===0?'⌁':i===1?'◈':'✳'}</span><span className="detail-art-label">CONCEPT / {product.id.toUpperCase()}</span></div><div className="detail-info"><Status>{product.status}</Status><h3>{product.tagline}</h3>{product.details.map((detail,index)=><div className="number-line" key={detail}><span>0{index+1}</span><p>{detail}</p></div>)}<TextLink href="/partners">Start a conversation</TextLink></div></div></Section>)}
  <CTA title="Build public information more people can understand." body="Ask about exploratory research, integrations or a possible future pilot." />
</div>; }
