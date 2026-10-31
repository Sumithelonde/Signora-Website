// Web Audio synthesis for luxury interactive feedback and realistic transit station announcements

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Original two-tone station-inspired chime. It is only called after user interaction.
  public playStationChime() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const ctx = this.ctx;
      const now = ctx.currentTime;

      // Master gain
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.12, now);
      master.connect(ctx.destination);

      const sequence = [
        { freq: 659.25, start: 0.0, dur: 0.58 },
        { freq: 493.88, start: 0.46, dur: 0.82 },
      ];

      sequence.forEach(({ freq, start, dur }) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        // Warm sine with subtle triangle overtone
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + start);

        noteGain.gain.setValueAtTime(0, now + start);
        noteGain.gain.linearRampToValueAtTime(0.18, now + start + 0.03);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + start + dur);

        osc.connect(noteGain);
        noteGain.connect(master);

        osc.start(now + start);
        osc.stop(now + start + dur + 0.1);
      });
    } catch {
      // Audio fallback gracefully handled
    }
  }

  // Subtle luxury UI click
  public playClick(freq = 1200) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const ctx = this.ctx;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.4, now + 0.04);

      gain.gain.setValueAtTime(0.025, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Audio fallback
    }
  }

  // Soft atmospheric pulse
  public playPulse() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const ctx = this.ctx;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.25);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {
      // Audio fallback
    }
  }
}

export const sound = new SoundEngine();

