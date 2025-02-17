import { useState } from "react";
import SongItem from "./SongItem";
import PropTypes from "prop-types";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  return (
    <div className="flex flex-col gap-4">
      {songsArray
        .filter((_, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p
        className="font-bold mt-5 cursor-pointer hover:underline ml-6"
        onClick={() => setItems(items + 5)}
      >
        See more
      </p>
    </div>
  );
};

SongList.propTypes = {
  songsArray: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default SongList;
