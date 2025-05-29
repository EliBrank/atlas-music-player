import { useEffect, useRef } from "react"

type AudioPlayerProps = {
  playing: boolean;
  volume: number;
  speed: 0.5 | 1.0 | 2.0;
  song: string;
  onEnd: () => void;
}

const AudioPlayer = ({ playing, volume, speed, song, onEnd }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // handle song URL change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !song) return;

    audio.src = song;
    audio.load();

    if (playing) {
      audio.play().catch(e => console.warn('Playback failed: ', e));
    }
  }, [song]);

  // handle play/pause
  useEffect(() => {
    if (playing) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [playing]);

  // handle volume change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // handle speed change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  // handle song end
  useEffect(() => {
    const current = audioRef.current;
    current?.addEventListener('ended', onEnd);

    return () => {
      current?.removeEventListener('ended', onEnd);
    }
  }, [audioRef, onEnd]);

  return (
    <audio ref={audioRef}>
      <source
        src={song}
        type="audio/mpeg"
      />
    </audio>
  );
}

export default AudioPlayer;
