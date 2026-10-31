'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import StationCinematic from '@/components/StationCinematic';
import { sound } from '@/components/SoundEngine';

const HEADLINE = 'NOT EVERY ANNOUNCEMENT IS HEARD.';
const DURATION = 10;
type Phase = 'playing' | 'paused' | 'complete';

export default function HeroExperience() {
  const [phase, setPhase] = useState<Phase>('playing');
  const [elapsed, setElapsed] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [captions, setCaptions] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const startedAt = useRef(0);
  const previousCount = useRef(0);
  const characters = useMemo(() => Array.from(HEADLINE), []);
  const words = useMemo(() => {
    let cursor = 0;
    return HEADLINE.split(' ').map((word) => {
      const start = cursor;
      cursor += word.length + 1;
      return { word, start };
    });
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    sound.setMuted(true);
    if (media.matches) {
      setElapsed(DURATION);
      setPhase('complete');
    } else {
      startedAt.current = performance.now();
    }
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (phase !== 'playing') return;
    let frame = 0;
    const update = () => {
      const next = Math.min(DURATION, (performance.now() - startedAt.current) / 1000);
      setElapsed(next);
      if (next >= DURATION) setPhase('complete');
      else frame = window.requestAnimationFrame(update);
    };
    frame = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frame);
  }, [phase]);

  const letterCount = reducedMotion || phase === 'complete' || elapsed >= 4.3
    ? characters.length
    : Math.max(0, Math.min(characters.length, Math.floor(((elapsed - 1.3) / 3) * characters.length)));

  useEffect(() => {
    if (phase === 'playing' && soundEnabled && letterCount > previousCount.current && elapsed < 4.3) {
      sound.playClick(950 + (letterCount % 4) * 45);
    }
    previousCount.current = letterCount;
  }, [elapsed, letterCount, phase, soundEnabled]);

  function play(withSound: boolean) {
    setSoundEnabled(withSound);
    sound.setMuted(!withSound);
    previousCount.current = 0;
    if (reducedMotion) {
      setElapsed(DURATION);
      setPhase('complete');
      if (withSound) sound.playStationChime();
      return;
    }
    setElapsed(0);
    startedAt.current = performance.now();
    setPhase('playing');
    if (withSound) sound.playStationChime();
  }

  function resume() {
    startedAt.current = performance.now() - elapsed * 1000;
    setPhase('playing');
  }

  function skip() {
    setElapsed(DURATION);
    setPhase('complete');
  }

  const showStation = phase === 'complete' || elapsed >= 4.3;

  return (
    <section className={`hero${showStation ? ' hero--station' : ''}${phase === 'complete' ? ' hero--complete' : ''}`} aria-labelledby="hero-title">
      <div className="hero-stage">
        <div className="hero-ripple" aria-hidden="true"><i /><i /><i /></div>
        <div className={`hero-copy${showStation ? ' is-hidden' : ''}`}>
          <p className="hero-context">An illustrated accessibility scenario</p>
          <h1 id="hero-title" className="hero-title" aria-label={HEADLINE}>
            <span className="sr-only">{HEADLINE}</span>
            <span className="hero-title-visual" aria-hidden="true">
              {words.map(({ word, start }) => (
                <span className="hero-word" key={word}>
                  {Array.from(word).map((character, index) => {
                    const characterIndex = start + index;
                    return <span key={`${character}-${characterIndex}`} className={`hero-letter${characterIndex < letterCount || phase === 'complete' ? ' is-visible' : ''}${start >= 26 ? ' is-accent' : ''}`}>{character}</span>;
                  })}
                </span>
              ))}
            </span>
          </h1>
        </div>

        <div className={`station-wrap${showStation ? ' is-visible' : ''}`}>
          <StationCinematic elapsed={elapsed} isPlaying={phase === 'playing'} />
          {captions && phase !== 'complete' ? <div className="hero-caption" role="status"><span>{elapsed < 6.2 ? 'Sound description' : 'Audio announcement'}</span><p>{elapsed < 6.2 ? 'A two-tone railway announcement chime.' : '“Attention please. The train will now depart from platform four.” The nearby visual board still shows platform two.'}</p></div> : null}
          {(phase === 'complete' || reducedMotion) ? <div className="hero-resolution"><span>The communication gap</span><p>Essential information was delivered through sound. The nearby visual display did not change, leaving some passengers without the same update.</p><a href="#approach">Understand the impact</a></div> : null}
        </div>

        <div className="hero-controls" role="group" aria-label="Introduction controls">
          <button type="button" onClick={() => phase === 'playing' ? setPhase('paused') : phase === 'paused' ? resume() : play(soundEnabled)}>{phase === 'playing' ? 'Pause' : phase === 'paused' ? 'Resume' : 'Replay'}</button>
          <button type="button" aria-pressed={soundEnabled} onClick={() => { const next = !soundEnabled; setSoundEnabled(next); sound.setMuted(!next); if (next) sound.playStationChime(); }}>{soundEnabled ? 'Sound on' : 'Sound off'}</button>
          {phase !== 'complete' ? <button type="button" aria-pressed={captions} onClick={() => setCaptions(!captions)}>{captions ? 'Captions on' : 'Captions off'}</button> : null}
          {phase !== 'complete' ? <button type="button" onClick={skip}>Skip intro</button> : null}
        </div>
        {phase === 'playing' ? <div className="hero-progress" role="progressbar" aria-label="Introduction progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(elapsed * 10)}><span style={{ transform: `scaleX(${elapsed / DURATION})` }} /></div> : null}
      </div>
    </section>
  );
}
