import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

type PlaylistSong = {
  id: string,
  title: string,
  artist: string,
  genre: string,
  duration: number
};

type SongDetails = PlaylistSong & {
  cover: string,
  song: string,
};

const mockPlaylist: PlaylistSong[] = [
  {
    id: "abc001",
    title: "Back to Testing",
    artist: "The Testers",
    genre: "Test Rock",
    duration: 200,
  },
  {
    id: "abc002",
    title: "I Find Myself Testing",
    artist: "The Testers",
    genre: "Test Rock",
    duration: 300
  },
];

const mockSongDetails: Record<string, SongDetails> = {
  "abc001": {
    id: "abc001",
    title: "Back to Testing",
    artist: "The Testers",
    genre: "Test Rock",
    duration: 200,
    cover: "/placeholder.svg",
    song: "https://example.com/songs/back-to-testing"
  },
  "abc002": {
    id: "abc002",
    title: "I Find Myself Testing",
    artist: "The Testers",
    genre: "Test Rock",
    duration: 300,
    cover: "/placeholder.svg",
    song: "https://example.com/songs/i-find-myself-testing"
  }
}

export const handlers = [
  http.get('*/api/v1/playlist', () => {
    return HttpResponse.json(mockPlaylist);
  }),

  http.get('*/api/v1/songs/:songId', ({ params }) => {
    const { songId } = params;
    const song = mockSongDetails[songId as string];

    if (!song) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(song);
  }),
];

export const server = setupServer(...handlers);
