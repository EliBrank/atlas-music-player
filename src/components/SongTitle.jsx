const SongTitle = ({artistName, children}) => {
  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold">{children}</h2>
      <p className="text-grey">{artistName}</p>
    </div>
  );
}

export default SongTitle;
