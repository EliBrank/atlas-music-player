import { describe, test, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
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
  test('Loads, displays first song by default', async () => {
    render(<MusicPlayer />);

    // Wait for the song title to appear with a longer timeout
    const songTitle = await screen.findByText('Back to Testing', {}, { timeout: 3000 });
    expect(songTitle).toBeInTheDocument();
  });
});
