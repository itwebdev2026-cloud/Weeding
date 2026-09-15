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

      audio.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };
    window.addEventListener('pointerdown', startMusic, { once: true });
    window.addEventListener('touchstart', startMusic, { once: true, passive: true });
    window.addEventListener('keydown', startMusic, { once: true });

    return () => {
      window.removeEventListener('pointerdown', startMusic);
      window.removeEventListener('touchstart', startMusic);
      window.removeEventListener('keydown', startMusic);
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
