type PlaylistItemProps = {
  songTitle: string,
  artistName: string,
  songLength: number,
  isSelected: boolean
}

const PlaylistItem = ({songTitle, artistName, songLength, isSelected}: PlaylistItemProps) => {
  const songLengthFormatted: string = getSongLengthFormatted(songLength);
  const bgClass: string = isSelected ? 'bg-selected-light dark:bg-selected-dark' : 'bg-none';

  return (
    <div className={`${bgClass} flex items-center justify-between`}>
      <div>
        <div className="text-base font-medium">
          {songTitle}
        </div>
        <div className="text-sm font-medium text-tertiary-light dark:text-tertiary-dark">
          {artistName}
        </div>
      </div>
      <div className="text-sm font-medium text-tertiary-light dark:text-tertiary-dark">
        {songLengthFormatted}
      </div>
    </div>
  );
}

function getSongLengthFormatted(rawSongDuration: number): string {
  const minutes: number = Math.floor(rawSongDuration / 60);
  const seconds: number = rawSongDuration % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export default PlaylistItem;
