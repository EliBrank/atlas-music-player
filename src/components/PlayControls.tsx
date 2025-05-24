import { Rewind, Play, FastForward, Shuffle } from 'lucide-react';

const PlayControls = () => {
  return (
    <div className="mb-4 flex items-center justify-between px-2">
      <button className="min-w-10">1x</button>
      <button className="min-w-10"><Rewind /></button>
      <button className="min-w-10"><Play /></button>
      <button className="min-w-10"><FastForward /></button>
      <button className="min-w-10"><Shuffle /></button>
    </div>
  );
}

export default PlayControls;
