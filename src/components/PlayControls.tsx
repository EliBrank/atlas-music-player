import { Rewind, Play, FastForward, Shuffle } from 'lucide-react';

const PlayControls = () => {
  return (
    <div className="mb-4 flex items-center justify-between px-2">
      <button className="playControlsButton">1x</button>
      <button className="playControlsButton"><Rewind /></button>
      <button className="playControlsButton min-h-12 min-w-12 outline-2 outline-primary-light"><Play /></button>
      <button className="playControlsButton"><FastForward /></button>
      <button className="playControlsButton"><Shuffle /></button>
    </div>
  );
}

export default PlayControls;
