'use client';

export interface StationCinematicProps { elapsed: number; isPlaying: boolean; }

export default function StationCinematic({ elapsed, isPlaying }: StationCinematicProps) {
  const announcement = elapsed >= 6.2 || elapsed >= 9.9;
  const moving = elapsed >= 8.1 || elapsed >= 9.9;
  return (
    <div className={`station-cinematic${isPlaying ? ' is-playing' : ''}${announcement ? ' has-announcement' : ''}${moving ? ' crowd-moves' : ''}`} role="img" aria-label="Illustrated Indian railway platform. An audio-only platform change causes nearby passengers to move while one commuter continues to rely on the unchanged display.">
      <div className="station-sky" aria-hidden="true"><i /><i /><i /></div>
      <div className="station-roof" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="station-sign" aria-hidden="true"><span>NAVAPUR JUNCTION</span><small>Fictional station</small></div>
      <div className="station-board" aria-hidden="true"><div><span>12626</span><strong>NEW DELHI</strong></div><div><small>ON TIME</small><b>PLATFORM 02</b></div>{announcement ? <em>VISUAL INFORMATION UNCHANGED</em> : null}</div>
      <div className="pa-chime" aria-hidden="true"><i /><i /><i /></div>
      <div className="platform" aria-hidden="true"><span /><span /></div>
      <div className="commuters" aria-hidden="true">
        <div className="commuter commuter--one"><i className="head" /><i className="body" /><i className="legs" /></div>
        <div className="commuter commuter--lead"><i className="head" /><i className="hair" /><i className="body" /><i className="backpack" /><i className="legs" /><span>Waiting by the unchanged board</span></div>
        <div className="commuter commuter--two"><i className="head" /><i className="body" /><i className="legs" /></div>
        <div className="commuter commuter--three"><i className="head" /><i className="body" /><i className="legs" /></div>
      </div>
      <div className="station-label" aria-hidden="true"><span>Illustrative scenario</span><b>{announcement ? 'Audio: platform changed to 04' : 'Visual board: platform 02'}</b></div>
    </div>
  );
}
