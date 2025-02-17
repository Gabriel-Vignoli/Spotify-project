import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ id, name, image, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${id}`} className="single-item py-6 px-4 flex flex-col gap-2.5 rounded-[var(--border-radius-l)] items-center transition-colors duration-[var(--transition-duration)] ease-[var(--transition-function)] hover:bg-[var(--green-900)] group">
      <div className="relative">
        <div className="single-item__div-image w-[140px] h-[140px] flex items-center justify-center overflow-hidden rounded-full">
          <img src={image} alt={name} />
        </div>

        <FontAwesomeIcon
          icon={faCirclePlay}
          className="single-item__icon absolute right-[7.5px] bottom-[7.5px] text-[50px] text-[var(--green-400)] opacity-0 translate-y-full transition-opacity transition-transform duration-[var(--transition-duration)] ease-[var(--transition-function)] group-hover:opacity-100 group-hover:translate-y-0"
        />
      </div>

      <div className="single-item__texts flex flex-col gap-1 text-center">
        <p className="single-item__title font-semibold">{name}</p>
        <p className="single-item__type text-sm">{artist ? artist : "Artist"}</p>
      </div>
    </Link>
  );
};

SingleItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  banner: PropTypes.string,
  artist: PropTypes.string,
  idPath: PropTypes.string.isRequired,
};

export default SingleItem;
