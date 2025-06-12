type SongTitleTypes = {
  songName: string,
  artistName: string,
}

const SongTitle = ({songName, artistName}: SongTitleTypes) => {
  return (
    <div>
      <h2 aria-label="Now Playing" className="mb-2 text-2xl font-bold">{songName}</h2>
      <p className="mb-4 text-tertiary-light dark:text-tertiary-dark">{artistName}</p>
    </div>
  );
}

export default SongTitle;
