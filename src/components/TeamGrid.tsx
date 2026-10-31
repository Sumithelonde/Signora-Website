'use client';

import { useEffect, useState } from 'react';
import { CharacterCarousel } from '@designcodeio/threeui/components/CharacterCarousel';
import '@designcodeio/threeui/style.css';
import { team } from '@/data/content';

const memberDetails: Record<string, { role: string; focus: string }> = {
  'Sumit Helonde': { role: 'Lead AI Research & Neural Systems', focus: 'Founder & research' },
  'Palak Batra': { role: 'Product Architecture & User Experience', focus: 'Product & experience' },
  'Hrutuja Wankhede': { role: 'Motion Intelligence & ISL Linguistics', focus: 'Motion & language' },
  'Shravan Sapate': { role: 'Systems Architecture & Deployment', focus: 'Systems & rendering' },
};

export function TeamGrid() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <div className="threeui-team">
      <div className="shader-frame">
        <CharacterCarousel
          variant="wave"
          speed={reducedMotion || paused ? 0 : 1.00}
          scale={1.00}
          opacity={1.00}
          hue={0}
          saturation={1.00}
          brightness={1.00}
        />
        <button
          className="shader-frame__motion-control"
          type="button"
          aria-pressed={paused || reducedMotion}
          disabled={reducedMotion}
          onClick={() => setPaused(value => !value)}
        >
          {reducedMotion ? 'Motion paused' : paused ? 'Resume motion' : 'Pause motion'}
        </button>
        <div className="shader-frame__label" aria-hidden="true">
          <span>Interactive character study</span>
          <small>Illustrative portraits · character study only</small>
        </div>
      </div>

      <div className="threeui-team__roster" role="list" aria-label="SIGNORA AI founding team">
        {team.map((member, index) => {
          const details = memberDetails[member.name];
          return (
            <article className="threeui-team__member glass-panel" role="listitem" key={member.name}>
              <span className="threeui-team__number">0{index + 1}</span>
              <span className="threeui-team__initials" aria-hidden="true">{member.initials}</span>
              <div>
                <small>{details.focus}</small>
                <h3>{member.name}</h3>
                <p>{details.role}</p>
              </div>
              <span className="pending-pill">Illustrative profile</span>
            </article>
          );
        })}
      </div>
    </div>
  );
}
