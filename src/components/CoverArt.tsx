// import { useState } from "react";
// import { fetchSongDetails } from "@/api/musicService";

type CoverArtProps = {
  coverArtURL: string;
}

const CoverArt = ({ coverArtURL }: CoverArtProps) => {

  // const [lyrics, setLyrics] = useState<string | null>(null);
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseEnter = async () => {
  //   if (!lyrics) {
  //     try {
  //       const data = await fetchSongDetails(songId);
  //       setLyrics(data.lyrics);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // };

  return (
    <div
      className="flex justify-center"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={coverArtURL}
        alt="cover art"
        width="400"
        className="mb-6"
      />
    </div>
  );
}

export default CoverArt;
