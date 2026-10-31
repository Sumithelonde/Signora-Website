'use client';

import { useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { pipeline, products } from '@/data/content';

function moveTabFocus(
  event: KeyboardEvent<HTMLButtonElement>,
  index: number,
  count: number,
  orientation: 'horizontal' | 'vertical',
  select: (next: number) => void,
) {
  const previousKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
  const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
  let next = index;

  if (event.key === previousKey) next = (index - 1 + count) % count;
  else if (event.key === nextKey) next = (index + 1) % count;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = count - 1;
  else return;

  event.preventDefault();
  select(next);
  const tabs = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
  tabs?.[next]?.focus();
}

export function Pipeline({ compact = false }: { compact?: boolean }) {
  const [activeStep, setActiveStep] = useState(0);
  const active = pipeline[activeStep];

  return (
    <div className={`architecture-map ${compact ? 'architecture-map--compact' : ''}`}>
      <div className="architecture-map__rail" role="tablist" aria-label="Conceptual system architecture">
        {pipeline.map((step, index) => (
          <button
            key={step.title}
            type="button"
            role="tab"
            id={`architecture-tab-${index}`}
            aria-controls="architecture-panel"
            aria-selected={activeStep === index}
            tabIndex={activeStep === index ? 0 : -1}
            onClick={() => setActiveStep(index)}
            onKeyDown={(event) => moveTabFocus(event, index, pipeline.length, 'vertical', setActiveStep)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <small>{step.tag}</small>
            <strong>{step.title}</strong>
          </button>
        ))}
      </div>

      <section
        id="architecture-panel"
        role="tabpanel"
        aria-labelledby={`architecture-tab-${activeStep}`}
        className="architecture-map__panel"
      >
        <div className="architecture-map__signal" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, index) => <i key={index} />)}
        </div>
        <p className="architecture-map__label">Architectural overview</p>
        <h3>{active.title}</h3>
        <p>{active.description}</p>
        <div className="architecture-map__boundary">
          <strong>Evidence boundary</strong>
          <span>This explains the intended workflow. It is not a live translation demo or a performance claim.</span>
        </div>
      </section>
    </div>
  );
}

export function SolutionShowcase() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <div className="product-ledger">
      <div className="product-ledger__visual" aria-hidden="true">
        <div className={`product-ledger__scene product-ledger__scene--${active + 1}`}>
          <span className="product-ledger__frame" />
          <span className="product-ledger__screen"><i /><i /><i /></span>
          <span className="product-ledger__route" />
          <span className="product-ledger__figure" />
        </div>
        <p>Conceptual environment, not a deployed interface</p>
      </div>

      <div className="product-ledger__content">
        <div className="product-ledger__tabs" role="tablist" aria-label="SIGNORA AI directions">
          {products.map((item, index) => (
            <button
              type="button"
              role="tab"
              id={`solution-tab-${item.id}`}
              aria-controls="solution-panel"
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              key={item.id}
              onClick={() => setActive(index)}
              onKeyDown={(event) => moveTabFocus(event, index, products.length, 'horizontal', setActive)}
            >
              <span>0{index + 1}</span>
              <strong>{item.name}</strong>
            </button>
          ))}
        </div>

        <div
          id="solution-panel"
          className="product-ledger__detail"
          role="tabpanel"
          aria-labelledby={`solution-tab-${product.id}`}
        >
          <span className="product-ledger__status">{product.status}</span>
          <h3>{product.tagline}</h3>
          <p>{product.description}</p>
          <ul>{product.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
          <Link href={`/solutions#${product.id}`}>Read the offering <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </div>
  );
}
