import { Rewind, Play, Pause, FastForward, Shuffle } from 'lucide-react';

type PlayControlsProps = {
  isPlaying: boolean;
  playbackSpeed: 0.5 | 1 | 2;
  isShuffling: boolean;
  hasPrevious: boolean;
  hasNext: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSpeedChange: () => void;
  onShuffleToggle: () => void;
}

const PlayControls = ({
  isPlaying,
  playbackSpeed,
  isShuffling,
  hasPrevious,
  hasNext,
  onPlayPause,
  onPrevious,
  onNext,
  onSpeedChange,
  onShuffleToggle
}: PlayControlsProps) => {
  return (
    <div className="mb-4 flex items-center justify-between px-2">
      <button
        className="playControlsButton"
        onClick={onSpeedChange}
        aria-label="Change Speed"
      >
        {playbackSpeed}x
      </button>
      <button
        className={`playControlsButton ${!hasPrevious ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={onPrevious}
        disabled={!hasPrevious}
        aria-label="Previous"
      >
        <Rewind />
      </button>
      <button
        className="playControlsButton min-h-12 min-w-12 outline-2 outline-primary-light"
        onClick={onPlayPause}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause/> : <Play/>}
      </button>
      <button
        className={`playControlsButton ${!hasNext ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next"
      >
        <FastForward />
      </button>
      <button
        className={`playControlsButton ${isShuffling ? 'text-accent-light dark:text-accent-dark' : ''}`}
        onClick={onShuffleToggle}
        aria-label="Shuffle"
      >
        <Shuffle />
      </button>
    </div>
  );
}

export default PlayControls;
