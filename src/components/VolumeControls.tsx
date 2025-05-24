import { Volume2 } from 'lucide-react';

const VolumeControls = () => {
  return (
    <div className="flex gap-2">
      <Volume2 />
      <input
        type="range"
        min="1"
        max="100"
        defaultValue="50"
        className="w-full"
      />
    </div>
  );
}

export default VolumeControls;
