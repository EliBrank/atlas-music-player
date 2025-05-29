import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle"
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

type CurrentlyPlayingProps = {
  song: {
    id: string,
    title: string,
    artist: string,
    cover: string,
  } | null;
  isPlaying: boolean;
  playbackSpeed: 0.5 | 1 | 2;
  volume: number;
  isShuffling: boolean;
  hasPrevious: boolean;
  hasNext: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSpeedChange: () => void;
  onShuffleToggle: () => void;
  onVolumeChange: (volume: number) => void;
}

const CurrentlyPlaying = ({
  song,
  isPlaying,
  playbackSpeed,
  volume,
  isShuffling,
  hasPrevious,
  hasNext,
  onPlayPause,
  onPrevious,
  onNext,
  onSpeedChange,
  onShuffleToggle,
  onVolumeChange
}: CurrentlyPlayingProps) => {
  return (
    <div className="flex w-full flex-1 flex-col justify-center p-6">
      <CoverArt coverArtURL={song?.cover || ''} />
      <SongTitle
        songName={song?.title || 'No song selected'}
        artistName={song?.artist || ''}
      />
      <PlayControls
        isPlaying={isPlaying}
        playbackSpeed={playbackSpeed}
        isShuffling={isShuffling}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        onPlayPause={onPlayPause}
        onPrevious={onPrevious}
        onNext={onNext}
        onSpeedChange={onSpeedChange}
        onShuffleToggle={onShuffleToggle}
      />
      <VolumeControls
        volume={volume}
        onVolumeChange={onVolumeChange}
      />
    </div>
  );
}

export default CurrentlyPlaying;
