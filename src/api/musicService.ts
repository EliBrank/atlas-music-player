export type PlaylistSong = {
  id: string,
  title: string,
  artist: string,
  genre: string,
  duration: number
};

export type SongDetails = PlaylistSong & {
  cover: string,
  song: string,
};

export type Lyrics = {
  lyrics: string
};

export const fetchPlaylist = async (): Promise<PlaylistSong[]> => {
  const response = await fetch('/api/v1/playlist');
  // "ok" response indicates 200-299 code
  if (!response.ok) throw new Error('Failed to fetch Playlist');
  return await response.json();
}

export const fetchSongDetails = async (songId: string): Promise<SongDetails> => {
  const response = await fetch(`/api/v1/songs/${songId}`);
  if (!response.ok) throw new Error('Failed to fetch song details');
  return await response.json();
}

export const fetchLyrics = async (songId: string): Promise<Lyrics> => {
  const response = await fetch(`/api/v1/songs/${songId}`);
  if (!response.ok) throw new Error('Failed to fetch lyrics');
  return await response.json();
}
