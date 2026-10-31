import Link from 'next/link';
import HeroExperience from '@/components/hero/HeroExperience';
import ScrollNarrative from '@/components/ScrollNarrative';
import SolutionsExplorer from '@/components/SolutionsExplorer';
import { collaborators, futureDirections, products } from '@/data/content';

const pipeline = [
  ['Input', 'Voice or text announcement', 'An approved operator feed or structured message enters the workflow.'],
  ['Optional', 'Speech-to-text', 'Audio can be transcribed. Text input moves directly to content structuring.'],
  ['Structure', 'Language processing', 'The message is normalised and important announcement entities are identified.'],
  ['Core research', 'Hierarchical motion retrieval', 'The system searches sentence, phrase, word and fingerspelling levels.'],
  ['Assembly', 'Motion sequence', 'Available reviewed motion assets are ordered and transitions are prepared.'],
  ['Output', '3D visual rendering', 'The resulting sequence can be presented on an appropriate public display.'],
] as const;

const contexts = [
  ['Rail & Metro', 'Passengers', 'Platforms and service changes', 'Reviewed transit display content'],
  ['Airports', 'Travellers', 'Gate and boarding updates', 'Passenger-information displays'],
  ['Hospitals', 'Patients and visitors', 'Queues and public notices', 'Selected visual information'],
  ['Campuses', 'Students and visitors', 'Instructions and notices', 'ISL-supported displays'],
  ['Public Service', 'Community members', 'Directions and services', 'Accessible public screens'],
  ['Events & Retail', 'Visitors and audiences', 'Event information', 'Screen or spatial display'],
] as const;

const researchPillars = [
  ['Hierarchical retrieval', 'Matching the most complete reviewed motion asset available.'],
  ['Motion library', 'Indexing reusable 3D motion assets and identifying coverage gaps.'],
  ['Sequence continuity', 'Researching ordering, transitions and coherent playback.'],
  ['Human evaluation', 'Planning linguistic review and comprehension studies with Deaf and ISL-proficient collaborators.'],
] as const;

function ChapterHeading({ title, body, label }: { title: string; body?: string; label?: string }) {
  return (
    <div className="chapter-heading" data-enter>
      <div>{label ? <p className="chapter-label-text">{label}</p> : null}<h2>{title}</h2></div>
      {body ? <p className="chapter-lead">{body}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <ScrollNarrative />
      <HeroExperience />

      <section id="approach" className="problem-section" data-chapter="01">
        <div className="problem-track">
          <div className="problem-stage shell">
            <div className="problem-copy">
              <p className="chapter-label-text">The communication gap</p>
              <h2>The information was broadcast. Access wasn&apos;t guaranteed.</h2>
              <p>When essential updates are audio-only, or the visual information is missing, Deaf and Hard-of-Hearing travellers can miss the message.</p>
              <div className="problem-step-list">
                <article className="problem-step"><span>01</span><div><h3>A platform changes</h3><p>The essential update is delivered over the public-address system.</p></div></article>
                <article className="problem-step"><span>02</span><div><h3>The crowd responds</h3><p>Travellers who receive the message move toward another platform.</p></div></article>
                <article className="problem-step"><span>03</span><div><h3>Someone remains uninformed</h3><p>The nearby visual board has not changed, so no equivalent update reaches every passenger.</p></div></article>
              </div>
            </div>
            <div className="problem-scene glass-frame" aria-hidden="true">
              <div className="scene-roof" data-parallax />
              <div className="scene-board"><span>TRAIN 12626</span><strong>PLATFORM 02</strong><small>VISUAL BOARD UNCHANGED</small></div>
              <div className="sound-ribbon"><i /><i /><i /><i /><i /><i /></div>
              <div className="scene-people"><i /><i /><i className="scene-person--still" /><i /><i /></div>
              <span className="scene-audio-label">Audio says platform 04</span>
            </div>
          </div>
        </div>
      </section>

      <section id="response" className="signature-section" data-chapter="02">
        <div className="signature-stage">
          <div className="signature-intro">
            <p>One message. Two very different experiences.</p>
            <h2>Sound travelled across the station. Access did not.</h2>
          </div>
          <div className="signal-cluster" aria-hidden="true">{Array.from({ length: 17 }).map((_, index) => <i className="signal-bar" key={index} />)}</div>
          <svg className="signature-route" viewBox="0 0 1200 420" aria-hidden="true"><path d="M30 240 C170 240 180 90 310 210 S510 340 620 210 S820 70 930 210 S1080 260 1170 170" /></svg>
          <div className="signature-response">
            <p className="chapter-label-text">Our response</p>
            <h2>What if public announcements could be seen?</h2>
            <p>Working toward more accessible public communication through AI-assisted Indian Sign Language experiences.</p>
            <strong className="signature-wordmark">SIGNORA AI</strong>
            <span>Every announcement deserves to be understood.</span>
          </div>
        </div>
      </section>

      <section id="technology" className="technology-section" data-chapter="03">
        <div className="technology-track">
          <div className="technology-stage shell">
            <div className="technology-intro">
              <p className="chapter-label-text">The method</p>
              <h2>From an announcement to a visual language.</h2>
              <p>This is a conceptual architecture explainer, not a live translation demo.</p>
              <div className="pipeline-progress"><i /></div>
            </div>
            <div className="pipeline" role="list" aria-label="Conceptual system workflow">
              {pipeline.map(([tag, title, copy], index) => (
                <article className="pipeline-step glass-panel" role="listitem" key={title}>
                  <span className="pipeline-index">{String(index + 1).padStart(2, '0')}</span>
                  <div><span className="status-tag">{tag}</span><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
            <div className="honesty-note"><strong>Conceptual architecture</strong><p>Motion retrieval and sequence assembly are not equivalent to fully validated continuous ISL translation. Linguistic quality requires further evaluation.</p></div>
          </div>
        </div>
      </section>

      <section id="solutions" className="story-section section-sage" data-chapter="04">
        <div className="shell">
          <ChapterHeading label="Three directions" title="Designed for public spaces. Built to expand." body="Each direction is clearly labelled according to its current maturity, without presenting conceptual work as a deployed product." />
          <SolutionsExplorer products={products} />
        </div>
      </section>

      <section id="contexts" className="contexts-section" data-chapter="05">
        <div className="contexts-sticky">
          <div className="context-track" aria-label="Potential application environments">
            <header className="context-intro-card"><p className="chapter-label-text">Real-world contexts</p><h2>Information should reach the whole room.</h2><p>Different settings create different communication requirements.</p></header>
            {contexts.map(([title, people, info, format], index) => (
              <article className="context-card glass-panel" key={title}>
                <span className="context-number">{String(index + 1).padStart(2, '0')}</span>
                <div className={`context-art context-art--${index + 1}`} aria-hidden="true"><i /><i /><i /></div>
                <h3>{title}</h3>
                <dl><div><dt>Who</dt><dd>{people}</dd></div><div><dt>Information</dt><dd>{info}</dd></div><div><dt>Possible format</dt><dd>{format}</dd></div></dl>
              </article>
            ))}
            <aside className="context-end-card"><p>Every deployment needs suitable content, linguistic review, accessibility testing and institutional approval.</p></aside>
          </div>
        </div>
      </section>

      <section id="research" className="story-section research-section" data-chapter="06">
        <div className="shell">
          <ChapterHeading label="Research and development" title="Built on motion. Grounded in communication." body="Our research explores how structured announcement content can align with a library of Indian Sign Language motion assets and become coherent 3D animation sequences." />
          <div className="research-grid">
            {researchPillars.map(([title, copy], index) => <article className="glass-panel" data-enter key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="homepage-evidence" data-enter>
            <div><p className="chapter-label-text">Evidence boundary</p><h3>Early work, stated precisely.</h3></div>
            <p>One real-user test is an early research signal, not generalisable evidence. The team reports recognition at AI Hackathon 2026; supporting materials remain pending publication.</p>
            <Link href="/research">Read the research position <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section id="future" className="story-section future-preview" data-chapter="07">
        <div className="shell future-preview__layout">
          <ChapterHeading label="Future possibilities" title="A wider horizon, grounded by evidence." body="Education, spatial displays and multimodal systems are research directions. They become product commitments only after the content, language quality, rights and user value are verified." />
          <div className="future-preview__list">
            {futureDirections.slice(0, 3).map((direction, index) => (
              <article data-enter key={direction.title}>
                <span>0{index + 1}</span>
                <h3>{direction.title}</h3>
                <p>{direction.description}</p>
              </article>
            ))}
          </div>
          <Link className="text-action" href="/future">Explore future scope <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section id="contact" className="story-section collaborate-section" data-chapter="08">
        <div className="shell collaboration-plate glass-panel" data-enter>
          <p className="chapter-label-text">The next chapter</p>
          <h2>Let&apos;s make essential information more accessible.</h2>
          <p>We welcome conversations with transit organisations, display manufacturers, accessibility researchers, Deaf community experts, institutions and potential pilot collaborators.</p>
          <div className="collaborator-row" aria-label="Potential collaborators">{collaborators.slice(0, 4).map((item) => <span key={item.title}>{item.title}</span>)}</div>
          <div className="cta-row"><a className="button button--primary" href="mailto:sumithelonde2005@gmail.com?subject=Collaboration%20with%20SIGNORA%20AI">Partner with us <span aria-hidden="true">↗</span></a><a className="button button--outline" href="#research">Explore research</a><Link className="button button--text" href="/about/">Meet the team <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
    </>
  );
}
