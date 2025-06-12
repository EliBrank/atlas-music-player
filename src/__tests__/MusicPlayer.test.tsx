import { describe, test, expect, beforeEach, beforeAll, afterEach, afterAll } from 'vitest';
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react';
import MusicPlayer from '@/components/MusicPlayer';
import { server } from './mocks/mock';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

describe('MusicPlayer', () => {
  // beforeEach(async () => {
  //   render(<MusicPlayer />);
  //   // wait for initial load to complete
  //   await waitFor(() => {
  //     expect(screen.findByText("Playlist")).toBeInTheDocument();
  //   });
  // });

  test('Loads, displays first song by default', async () => {
    render(<MusicPlayer />)

    const songTitle = await screen.findByText('Back to Testing');
    await waitFor(() => {
      expect(songTitle).toBeInTheDocument();
    });
  });

  test('Play/Pause toggles on click', async () => {
    render(<MusicPlayer />)

    const playButton = screen.getByRole('button', { name: /play|pause/i });

    expect(playButton).toHaveAttribute('aria-label', 'Play');
    fireEvent.click(playButton);
    expect(playButton).toHaveAttribute('aria-label', 'Pause');
    fireEvent.click(playButton);
    expect(playButton).toHaveAttribute('aria-label', 'Play');
  });

  test('Next song loaded when next song button pressed', async () => {
    render(<MusicPlayer />);

    await screen.findByText('Back to Testing');

    const nextButton = screen.getByLabelText('Next');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByLabelText('Now Playing')).toHaveTextContent('I Find Myself Testing');
    });
  });

  test('Previous song loaded when previous song button pressed', async () => {
    render(<MusicPlayer />);

    await screen.findByText('Back to Testing');

    const nextButton = screen.getByLabelText('Next');
    const prevButton = screen.getByLabelText('Previous');
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    await waitFor(() => {
      expect(screen.getByLabelText('Now Playing')).toHaveTextContent("Back to Testing");
      expect(screen.getByLabelText('Now Playing')).not.toHaveTextContent("I Find Myself Testing");
    });
  });

  test('Song loaded when selected from playlist', async () => {
    render(<MusicPlayer />);

    const nextSongPlaylist = await screen.findByText('I Find Myself Testing');

    fireEvent.click(nextSongPlaylist);

    await waitFor(() => {
      expect(screen.getByLabelText('Now Playing')).toHaveTextContent('I Find Myself Testing');
    });
  });
});
