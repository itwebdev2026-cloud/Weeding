import { useEffect, useRef, useState } from 'react';
import { assetPath } from '../../config/asset-path';

interface MusicPlayerProps {
  isPlaying: boolean;
}

const tracks = [assetPath('/music/cNGjD0VG4R8-82a3e11cca15526844d6bb1a0f696407389.mp3')];

export default function MusicPlayer({ isPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(isPlaying);

  useEffect(() => {
    setPlaying(isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.25;

    if (playing) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, [playing, trackIndex]);

  useEffect(() => {
    const startMusic = () => {
      const audio = audioRef.current;
      if (!audio) return;

      void audio.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };
    const captureOptions = { capture: true };
    const touchOptions = { capture: true, passive: true };
    window.addEventListener('pointerdown', startMusic, captureOptions);
    window.addEventListener('pointerup', startMusic, captureOptions);
    window.addEventListener('touchstart', startMusic, touchOptions);
    window.addEventListener('touchend', startMusic, touchOptions);
    window.addEventListener('click', startMusic, captureOptions);
    window.addEventListener('keydown', startMusic, captureOptions);

    return () => {
      window.removeEventListener('pointerdown', startMusic, captureOptions);
      window.removeEventListener('pointerup', startMusic, captureOptions);
      window.removeEventListener('touchstart', startMusic, touchOptions);
      window.removeEventListener('touchend', startMusic, touchOptions);
      window.removeEventListener('click', startMusic, captureOptions);
      window.removeEventListener('keydown', startMusic, captureOptions);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={tracks[trackIndex]}
      autoPlay
      playsInline
      onEnded={() => setTrackIndex((current) => (current + 1) % tracks.length)}
      preload="auto"
    />
  );
}
