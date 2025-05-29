import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import AudioPlayer from "./AudioPlayer";
import { useState, useEffect } from "react";
import { fetchPlaylist, fetchSongDetails, SongDetails, PlaylistSong } from "@/api/musicService";

function MusicPlayer() {
  const [playlist, setPlaylist] = useState<PlaylistSong[]>([]);
  const [currentSong, setCurrentSong] = useState<SongDetails | null>(null);
  // type inference can handle simple types like booleans
  const [isLoading, setIsLoading] = useState(true);

  type playbackStateProps = {
    currentSongId: string;
    isPlaying: boolean;
    volume: number;
    playbackSpeed: 0.5 | 1 | 2;
    isShuffling: boolean
  }

  const [playbackState, setPlaybackState] = useState<playbackStateProps>({
    currentSongId: '',
    isPlaying: false,
    volume: 50,
    playbackSpeed: 1,
    isShuffling: false,
  });

  // fetch playlist on mount
  useEffect(() => {
    const loadPlaylist = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPlaylist();
        setPlaylist(data);

        if (data.length > 0) {
          // in this syntax, "prev" refers to most recent State
          setPlaybackState(prev => ({ ...prev, currentSongId: data[0].id }));
        }
      } catch (err) {
        console.error('Failed to load playlist: ', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadPlaylist();
  }, []);

  // fetch song details
  useEffect(() => {
    if (!playbackState.currentSongId) return;

    const loadSongDetails = async () => {
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

  useEffect(() => {
    console.log('Current song details:', currentSong); // Check if song URL exists
  }, [currentSong]);

  const currentSongIndex = playlist.findIndex((song) => (
    song.id === playbackState.currentSongId
  ));
  const isFirstSong = currentSongIndex <= 0;
  const isLastSong = currentSongIndex >= (playlist.length - 1);

  const handlePreviousSong = () => {
    if (isFirstSong) return;

    setPlaybackState(prev => ({
      ...prev,
      currentSongId: playlist[currentSongIndex - 1]?.id || '',
      isPlaying: true
    }));
  };

  const handleNextSong = () => {
    if (playbackState.isShuffling) {
      handleShuffleNext();
    } else {
      handleLinearNext();
    }
  };

  const handleLinearNext = () => {
    if (isLastSong) {
      setPlaybackState(prev => ({ ...prev, isPlaying: false }));
      return;
    }

    setPlaybackState(prev => ({
      ...prev,
      currentSongId: playlist[currentSongIndex + 1]?.id || '',
      isPlaying: true
    }));
  }

  const handleShuffleNext = () => {
    const availableSongs = playlist.filter(song => song.id !== playbackState.currentSongId);
    if (availableSongs.length === 0) {
      setPlaybackState(prev => ({ ...prev, isPlaying: false }));
      return;
    }

    const randomSong = availableSongs[Math.floor(Math.random() * availableSongs.length)];
    setPlaybackState(prev => ({
      ...prev,
      currentSongId: randomSong.id,
      isPlaying: true
    }));
  }

  const handleSpeedChange = () => {
    setPlaybackState(prev => {
      switch (prev.playbackSpeed) {
        case 0.5: return { ...prev, playbackSpeed: 1 };
        case 1: return { ...prev, playbackSpeed: 2 };
        case 2: return { ...prev, playbackSpeed: 0.5 };
        default: return prev;
      }
    });
  };

  const handleShuffleToggle = () => {
    setPlaybackState(prev => ({
      ...prev,
      isShuffling: !prev.isShuffling
    }));
  };

  const handleVolumeChange = (volume: number) => {
    setPlaybackState(prev => ({
      ...prev,
      volume: Math.max(0, Math.min(100, volume))
    }));
  };

  const handleSongEnd = () => {
    if (isLastSong) {
      setPlaybackState(prev => ({ ...prev, isPlaying: false }));
    } else {
      handleNextSong();
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-114 flex-col justify-between rounded-lg bg-primary-light drop-shadow-xl drop-shadow-secondary-light md:max-w-4xl md:flex-row dark:bg-primary-dark">
      <CurrentlyPlaying
        song={currentSong}
        isPlaying={playbackState.isPlaying}
        playbackSpeed={playbackState.playbackSpeed}
        volume={playbackState.volume}
        onPlayPause={() => setPlaybackState(prev => ({
          ...prev,
          isPlaying: !prev.isPlaying
        }))}
        isShuffling={playbackState.isShuffling}
        hasPrevious={currentSongIndex > 0}
        hasNext={currentSongIndex < playlist.length - 1}
        onPrevious={handlePreviousSong}
        onNext={handleNextSong}
        onSpeedChange={handleSpeedChange}
        onShuffleToggle={handleShuffleToggle}
        onVolumeChange={handleVolumeChange}
      />
      <Playlist
        songs={playlist}
        currentSongId={playbackState.currentSongId}
        onSelectSong={(songId) => setPlaybackState(prev => ({
          ...prev,
          currentSongId: songId
        }))}
      />
      {currentSong?.song &&
        (<AudioPlayer
          playing={playbackState.isPlaying}
          volume={playbackState.volume}
          speed={playbackState.playbackSpeed}
          song={currentSong?.song} // get song URL from song details
          onEnd={handleSongEnd}
        />
      )}
    </div>
  );
}

export default MusicPlayer;
