'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const chapters = [
  ['01', 'The gap'],
  ['02', 'The response'],
  ['03', 'The method'],
  ['04', 'Solutions'],
  ['05', 'Contexts'],
  ['06', 'Research'],
  ['07', 'Future'],
  ['08', 'Collaborate'],
] as const;

export default function ScrollNarrative() {
  const [active, setActive] = useState(-1);
  const [ready, setReady] = useState(false);
  const traceRef = useRef<SVGPathElement>(null);

  useEffect(() => setReady(true), []);

  useLayoutEffect(() => {
    if (!ready) return;
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      document.documentElement.classList.add('motion-reduced');
      document.querySelectorAll<HTMLElement>('[data-enter]').forEach((element) => {
        element.style.opacity = '1';
        element.style.transform = 'none';
      });
      return () => document.documentElement.classList.remove('motion-reduced');
    }

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-enter]').forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 42 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        });
      });

      const chapterElements = gsap.utils.toArray<HTMLElement>('[data-chapter]');
      chapterElements.forEach((element, index) => {
        ScrollTrigger.create({
          trigger: element,
          start: 'top 52%',
          end: 'bottom 52%',
          onEnter: () => setActive(Math.min(index, chapters.length - 1)),
          onEnterBack: () => setActive(Math.min(index, chapters.length - 1)),
        });
      });

      const trace = traceRef.current;
      if (trace) {
        const length = trace.getTotalLength();
        gsap.set(trace, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(trace, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
        });
      }

      const problemSteps = gsap.utils.toArray<HTMLElement>('.problem-step');
      const problemPeople = gsap.utils.toArray<HTMLElement>('.problem-scene .scene-people i:not(.scene-person--still)');
      ScrollTrigger.create({
        trigger: '.problem-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: ({ progress }) => {
          const step = Math.min(problemSteps.length - 1, Math.floor(progress * problemSteps.length));
          problemSteps.forEach((element, index) => gsap.to(element, { autoAlpha: index === step ? 1 : 0.22, x: index === step ? 0 : 16, duration: 0.28, overwrite: true }));
          problemPeople.forEach((element, index) => gsap.to(element, { x: progress > 0.58 ? (index % 2 ? 110 : -110) : 0, duration: 0.5, overwrite: true, ease: 'power2.out' }));
        },
      });

      const signatureTimeline = gsap.timeline({
        scrollTrigger: { trigger: '.signature-section', start: 'top top', end: 'bottom bottom', scrub: 0.65 },
      });
      signatureTimeline
        .fromTo('.signature-intro', { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -36, duration: 0.18 })
        .to('.signal-bar', { scaleY: 0.14, stagger: 0.018, duration: 0.2, ease: 'power2.inOut' }, 0.08)
        .fromTo('.signature-route', { strokeDashoffset: 950 }, { strokeDashoffset: 0, duration: 0.52, ease: 'power2.inOut' }, 0.18)
        .to('.signal-cluster', { x: '42vw', scale: 0.42, duration: 0.42, ease: 'power3.inOut' }, 0.14)
        .to('.signal-cluster', { autoAlpha: 0, duration: 0.14 }, 0.28)
        .fromTo('.signature-response', { autoAlpha: 0, y: 45 }, { autoAlpha: 1, y: 0, duration: 0.18 }, 0.24)
        .fromTo('.signature-wordmark', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.1 }, 0.29);

      const pipelineSteps = gsap.utils.toArray<HTMLElement>('.pipeline-step');
      ScrollTrigger.create({
        trigger: '.technology-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: ({ progress }) => {
          const step = Math.min(pipelineSteps.length - 1, Math.floor(progress * pipelineSteps.length));
          document.documentElement.style.setProperty('--pipeline-p', String(progress));
          pipelineSteps.forEach((element, index) => element.toggleAttribute('data-active', index === step));
        },
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        gsap.fromTo(element, { yPercent: -5 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: 0.7 } });
      });
    });

    document.fonts.ready.then(() => ScrollTrigger.refresh());
    return () => context.revert();
  }, [ready]);

  return (
    <>
      <div className="sound-trace" aria-hidden="true">
        <svg viewBox="0 0 1000 44" preserveAspectRatio="none">
          <path className="sound-trace__ghost" d="M0 24 C45 24 52 8 74 24 S112 39 134 24 S174 14 194 24 C244 24 248 5 274 24 S312 43 338 24 S390 10 412 24 C470 24 476 3 506 24 S548 41 576 24 S628 12 650 24 C708 24 718 6 744 24 S786 42 812 24 S864 12 886 24 C930 24 948 18 1000 24" />
          <path ref={traceRef} className="sound-trace__live" d="M0 24 C45 24 52 8 74 24 S112 39 134 24 S174 14 194 24 C244 24 248 5 274 24 S312 43 338 24 S390 10 412 24 C470 24 476 3 506 24 S548 41 576 24 S628 12 650 24 C708 24 718 6 744 24 S786 42 812 24 S864 12 886 24 C930 24 948 18 1000 24" />
        </svg>
          <div className="sound-trace__markers">{chapters.map(([number], index) => <span key={number} className={active >= 0 && index <= active ? 'is-passed' : ''} />)}</div>
      </div>
    </>
  );
}
