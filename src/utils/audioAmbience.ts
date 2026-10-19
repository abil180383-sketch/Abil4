/**
 * Synthetic ambient soundscape for Baoli Highvill Lounge using Web Audio API.
 * Generates an ultra-warm, low-volume harmonic ambient drone and vinyl texture.
 */

class LoungeAmbienceGenerator {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private gainNode: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private noiseNode: AudioBufferSourceNode | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      this.ctx = new AudioCtx();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const masterGain = this.ctx.createGain();
      // Low volume for subtle lounge relaxation
      masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 2);
      masterGain.connect(this.ctx.destination);
      this.gainNode = masterGain;

      // Chord frequencies: Warm F-minor / Ab-major luxury lounge pads
      const frequencies = [174.61, 220.0, 261.63, 329.63, 440.0];

      this.oscillators = frequencies.map((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const panner = 'createStereoPanner' in this.ctx! ? this.ctx!.createStereoPanner() : null;
        const filter = this.ctx!.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + idx * 80, this.ctx!.currentTime);

        const subGain = this.ctx!.createGain();
        subGain.gain.setValueAtTime(0.03 / (idx + 1), this.ctx!.currentTime);

        osc.connect(filter);
        filter.connect(subGain);

        if (panner) {
          panner.pan.setValueAtTime((idx % 2 === 0 ? -0.3 : 0.3), this.ctx!.currentTime);
          subGain.connect(panner);
          panner.connect(masterGain);
        } else {
          subGain.connect(masterGain);
        }

        osc.start();
        return osc;
      });

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.ctx || !this.isPlaying) return;

    try {
      if (this.gainNode) {
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      }
      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {}
        });
        this.oscillators = [];
        if (this.ctx) {
          this.ctx.close();
          this.ctx = null;
        }
        this.isPlaying = false;
      }, 500);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const loungeAudio = new LoungeAmbienceGenerator();
