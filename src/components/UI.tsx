'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import type { ContentCard } from '@/data/content';
import { sound } from './SoundEngine';

export function Chapter({ number, label }: { number: string; label: string }) {
  return (
    <div className="chapter-label">
      <span className="chapter-num" aria-hidden="true">{number}</span>
      <span className="chapter-divider" aria-hidden="true" />
      <span className="chapter-text">{label}</span>
    </div>
  );
}

export function PageIntro({
  number,
  eyebrow,
  title,
  lead,
}: {
  number: string;
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="page-intro wrap">
      <div className="page-intro-ambient" aria-hidden="true" />
      <Chapter number={number} label={eyebrow} />
      <h1 className="display page-display">{title}</h1>
      <p className="lead">{lead}</p>
    </header>
  );
}

export function Section({
  id,
  number,
  eyebrow,
  title,
  intro,
  children,
  tone = 'light',
}: {
  id?: string;
  number?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  tone?: 'light' | 'sage' | 'dark';
}) {
  return (
    <section id={id} className={`section section--${tone}`}>
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-head-main">
            {number && eyebrow && <Chapter number={number} label={eyebrow} />}
            <h2 className="display section-title">{title}</h2>
          </div>
          {intro && <p className="section-lead">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Cards({
  items,
  columns = 3,
}: {
  items: ReadonlyArray<ContentCard>;
  columns?: 2 | 3;
}) {
  return (
    <div className={`card-grid card-grid--${columns}`}>
      {items.map((item, i) => (
        <article
          className="info-card glass-panel reveal"
          key={item.title}
        >
          <div className="card-top">
            <span className="card-index">
              0{i + 1} {item.tag ? ` / ${item.tag}` : ''}
            </span>
            <span className="card-corner-dot" aria-hidden="true" />
          </div>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-description">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function TextLink({
  href,
  children,
  inverse = false,
}: {
  href: string;
  children: ReactNode;
  inverse?: boolean;
}) {
  return (
    <Link
      className={`luxury-pill-btn ${inverse ? 'luxury-pill-btn--inverse' : ''}`}
      href={href}
      onClick={() => sound.playClick(1300)}
    >
      <span>{children}</span>
      <span className="pill-arrow" aria-hidden="true">↗</span>
    </Link>
  );
}

export function CTA({
  eyebrow = 'THE NEXT HORIZON',
  title,
  body,
  href = '/partners',
  label = 'Partner with us',
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="cta-section">
      <div className="cta-ambient-glow" aria-hidden="true" />
      <div className="wrap cta-content reveal">
        <div className="cta-glass-card glass-panel">
          <Chapter number="NEXT" label={eyebrow} />
          <h2 className="display cta-title">{title}</h2>
          {body && <p className="cta-body">{body}</p>}
          <div className="cta-action-row">
            <TextLink inverse href={href}>
              {label}
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Status({ children }: { children: ReactNode }) {
  return (
    <span className="status-badge">
      <span className="badge-dot" aria-hidden="true" />
      <span className="badge-text">{children}</span>
    </span>
  );
}

export function ResourceEmpty({
  title,
  kind,
  note,
}: {
  title: string;
  kind: string;
  note: string;
}) {
  return (
    <article className="resource-card glass-panel reveal">
      <div className="resource-top">
        <span className="resource-kind">{kind}</span>
        <span className="resource-tag-index">RESEARCH SPEC</span>
      </div>

      <div className="resource-art-frame" aria-hidden="true">
        <div className="resource-art-grid" />
        <div className="resource-geometry">
          <span className="geom-line geom-1" />
          <span className="geom-circle" />
          <span className="geom-line geom-2" />
        </div>
      </div>

      <h3 className="resource-title">{title}</h3>
      <p className="resource-note">{note}</p>

      <div className="resource-status-pill">
        <span className="pill-beacon" aria-hidden="true" />
        <span>Awaiting verified release</span>
      </div>
    </article>
  );
}
