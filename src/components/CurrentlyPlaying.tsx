import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle"
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

const CurrentlyPlaying = () => {
  return (
    <div className="flex w-full flex-1 flex-col justify-center p-6">
      <CoverArt />
      <SongTitle
        songName="Hello Test"
        artistName="The Testers"
      />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}

export default CurrentlyPlaying;
