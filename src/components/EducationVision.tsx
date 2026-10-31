'use client';

import { useState } from 'react';

const positions = ['lower right', 'lower left', 'upper right'] as const;

export function EducationVision() {
  const [position, setPosition] = useState(0);

  return (
    <div className="education-vision">
      <div className="education-vision__canvas">
        <div className="education-vision__bar">
          <span>Supported lesson</span>
          <span>Concept study</span>
        </div>
        <div className="education-vision__lesson" aria-hidden="true">
          <span className="lesson-orbit lesson-orbit--one" />
          <span className="lesson-orbit lesson-orbit--two" />
          <span className="lesson-planet" />
          <span className="lesson-caption">Educational content</span>
        </div>
        <div className={`education-vision__companion education-vision__companion--${position + 1}`}>
          <span>ISL companion area</span>
          <i aria-hidden="true" />
          <small>Verified motion would appear here</small>
        </div>
        <button type="button" onClick={() => setPosition((position + 1) % positions.length)}>
          Move companion to {positions[(position + 1) % positions.length]}
        </button>
      </div>

      <div className="education-vision__copy">
        <p className="chapter-label-text">Accessible education vision</p>
        <h3>The lesson and its visual interpreter can share one adaptable canvas.</h3>
        <p>This is a future research direction, not a released browser extension. It would depend on permitted content access, reliable timing, reviewed motion coverage and evaluation with Deaf learners and educators.</p>
        <dl>
          <div><dt>Placement</dt><dd>Move or resize the companion so it does not obstruct learning material.</dd></div>
          <div><dt>Synchronization</dt><dd>Align supported transcript segments with reviewed motion sequences.</dd></div>
          <div><dt>Responsibility</dt><dd>Respect copyright, consent, language nuance and evidence boundaries.</dd></div>
        </dl>
      </div>
    </div>
  );
}
