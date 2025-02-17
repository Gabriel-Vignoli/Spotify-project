import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SongList from "../components/SongList";

const Artist = () => {
  return (
    <div className="flex flex-col">
      <div
        className="relative h-64 bg-cover bg-center flex items-end p-6"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(https://i.scdn.co/image/ab67618600001016b37fbcbd078cb239588df5d9)",
        }}
      >
        <h2 className="text-4xl font-bold text-white">Artist Name</h2>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Populares</h2>
        <SongList />
      </div>

      <div className="relative">
        <Link
          to="/song/1"
          className="absolute bottom-4 right-4 flex items-center justify-center"
        >
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="text-5xl text-green-400 hover:text-green-300 transition duration-200"
          />
        </Link>
      </div>
    </div>
  );
};

export default Artist;
