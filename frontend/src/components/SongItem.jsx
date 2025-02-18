import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SongItem = ({ image, name, duration, artist, audio, _id, index }) => {
  return (
    <Link
      to={`/song/${_id}`}
      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition duration-200"
    >
      <div className="flex items-center gap-4">
        <p className="text-gray-400">{index + 1}</p>

        <div className="flex items-center gap-2">
          <img src={image} alt={name} className="w-12 h-12 rounded-md" />

          <p className="text-white font-medium">{name}</p>
        </div>
      </div>

      <p className="text-gray-400">{duration}</p>
    </Link>
  );
};

SongItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
  _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  index: PropTypes.number.isRequired,
};

export default SongItem;
