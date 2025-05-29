import { PlaylistSong } from "@/api/musicService";
import PlaylistItem from "./PlaylistItem";

type PlaylistProps = {
  songs: PlaylistSong[];
  currentSongId: string;
  onSelectSong: (songId: string) => void;
}

const Playlist = ({ songs, currentSongId, onSelectSong }: PlaylistProps) => {
  return (
    <div className="w-full border-t border-detail-light p-6 md:flex-1 md:border-t-0 md:border-l dark:border-detail-dark">
      <h3 className="pb-4 text-lg font-bold">Playlist</h3>
      {songs.map(song => (
        <PlaylistItem
          key={song.id}
          songTitle={song.title}
          artistName={song.artist}
          songLength={song.duration}
          isSelected={song.id === currentSongId}
          onClick={() => onSelectSong(song.id)}
        />
      ))}
    </div>
  );
};

export default Playlist;
