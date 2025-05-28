import PlaylistItem from "./PlaylistItem";

const Playlist = () => {
  return (
    <div className="w-full border-t border-detail-light dark:border-detail-dark p-6 md:flex-1 md:border-t-0 md:border-l">
      <h3 className="text-lg font-bold pb-4">Playlist</h3>
      <PlaylistItem
        artistName="Soul Canvas"
        songTitle="Painted in Blue"
        songLength={150}
        isSelected={true}
      />
      <PlaylistItem
        artistName="Tidal Drift"
        songTitle="Echoes of the Sea"
        songLength={249}
        isSelected={false}
      />
    </div>
  );
}

export default Playlist;
