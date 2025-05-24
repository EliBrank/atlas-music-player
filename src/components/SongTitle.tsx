type SongTitleTypes = {
  songName: string,
  artistName: string,
}

const SongTitle = ({songName, artistName}: SongTitleTypes) => {
  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold">{songName}</h2>
      <p className="text-secondary mb-4">{artistName}</p>
    </div>
  );
}

export default SongTitle;
