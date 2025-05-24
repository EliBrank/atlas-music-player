import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

function MusicPlayer() {
  return (
    <div className="mx-auto flex w-full max-w-114 flex-col justify-between rounded-lg bg-primary-light drop-shadow-xl md:max-w-4xl md:flex-row">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}

export default MusicPlayer;
