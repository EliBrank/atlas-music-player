import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle"
import PlayControls from "./PlayControls";

export default function MusicPlayer() {
  return (
    <div>
      <CoverArt></CoverArt>
      <SongTitle artistName="The Testers">Hello Test</SongTitle>
      <PlayControls></PlayControls>
    </div>
  );
}
