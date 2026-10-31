'use client';

import { useState } from 'react';
import type { products as productData } from '@/data/content';

type Product = (typeof productData)[number];

export default function SolutionsExplorer({ products }: { products: readonly Product[] }) {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <div className="solutions-explorer">
      <div className={`solution-scene solution-scene--${active + 1}`} aria-hidden="true">
        <div className="solution-environment">
          <span className="solution-ceiling" />
          <span className="solution-display"><i /><i /><i /></span>
          <span className="solution-figure"><i /><i /><i /></span>
          <span className="solution-pulse"><i /><i /><i /></span>
        </div>
        <p>Concept illustration · {product.name}</p>
      </div>
      <div className="solution-tabs" role="tablist" aria-label="SIGNORA AI solution areas">
        {products.map((item, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="homepage-solution-panel"
            id={`solution-tab-${item.id}`}
            tabIndex={active === index ? 0 : -1}
            key={item.id}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              let next = active;
              if (event.key === 'ArrowDown') next = (active + 1) % products.length;
              else if (event.key === 'ArrowUp') next = (active - 1 + products.length) % products.length;
              else if (event.key === 'Home') next = 0;
              else if (event.key === 'End') next = products.length - 1;
              else return;
              event.preventDefault();
              setActive(next);
              document.getElementById(`solution-tab-${products[next].id}`)?.focus();
            }}
          >
            <span className="solution-tab__top"><b>0{index + 1}</b><small>{item.status}</small></span>
            <strong>{item.name}</strong>
          </button>
        ))}
        <div id="homepage-solution-panel" role="tabpanel" aria-labelledby={`solution-tab-${product.id}`} className="solution-panel">
          <p className="solution-tagline">{product.tagline}</p>
          <p>{product.description}</p>
          <ul>{product.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          <a href="#contact" className="text-action">{active === 2 ? 'Discuss an AI workflow' : `Explore ${active === 0 ? 'Transit' : 'Spatial & Display'}`} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
  );
}
