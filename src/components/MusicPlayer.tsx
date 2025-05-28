import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import { useState, useEffect } from "react";
import { fetchPlaylist, fetchSongDetails, SongDetails, PlaylistSong } from "@/api/musicService";

function MusicPlayer() {
  const [playlist, setPlaylist] = useState<PlaylistSong[]>([]);
  const [currentSong, setCurrentSong] = useState<SongDetails | null>(null);
  // type inference can handle simple types like booleans
  const [isLoading, setIsLoading] = useState(true);

  const [playbackState, setPlaybackState] useState({
    currentSongId: '',
    isPlaying: false,
    volume: 50,
    playBackSpeed: 1,
    shuffle: false,
  });

  useEffect(() => {
    const loadPlaylist = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPlaylist();
        setPlaylist(data);

        if (data.length > 0) {
          // in this syntax, "prev" refers to most recent State
          setPlaybackState(prev => ({ ...prev, currentSongId: data[0].id });
        }
      } catch (err) {
        console.error('Failed to load playlist: ', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadPlaylist();
  }, []);

  useEffect(() => {
    if (!playbackState.currentSongId) return;

    const loadSongDetails = () => {
      try {
        setIsLoading(true);
        const details = await fetchSongDetails(playbackState.currentSongId);
        setCurrentSong(details);
      } catch (err) {
        console.error('Failed to load song details: ', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadSongDetails();
  }, [playbackState.currentSongId]); // update when current song changes

  return (
    <div className="mx-auto flex w-full max-w-114 flex-col justify-between rounded-lg bg-primary-light drop-shadow-xl drop-shadow-secondary-light md:max-w-4xl md:flex-row dark:bg-primary-dark">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}

export default MusicPlayer;
