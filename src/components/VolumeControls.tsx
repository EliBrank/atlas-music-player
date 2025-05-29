import { Volume2 } from 'lucide-react';

type VolumeControlsProps = {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

const VolumeControls = ({ volume, onVolumeChange }: VolumeControlsProps) => {
  return (
    <div className="flex gap-2">
      <Volume2 />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        className="w-full accent-accent-light dark:accent-accent-dark"
        // set volume value to reflect slider position
        onChange={(e) => onVolumeChange(Number(e.target.value))}
      />
    </div>
  );
}

export default VolumeControls;
