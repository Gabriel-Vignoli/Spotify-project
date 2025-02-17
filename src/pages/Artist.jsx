import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
    const { id } = useParams();
  
    const { name, banner } = artistArray.filter(
      (currentArtistObj) => currentArtistObj.id === Number(id)
    )[0];
  
    const songsArrayFromArtist = songsArray.filter(
      (currentSongObj) => currentSongObj.artist === name
    );
  
    const randomIndex = Math.floor(
      Math.random() * (songsArrayFromArtist.length - 1)
    );
    const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;

  return (
    <div className="flex flex-col">
      <div
        className="relative h-64 bg-cover bg-center flex items-end p-6"
        style={{
          backgroundImage:
            `linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${banner})`,
        }}
      >
        <h2 className="text-4xl font-bold text-white">{name}</h2>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Popular</h2>
        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <div className="relative">
        <Link
          to={`/song/${randomIdFromArtist}`}
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
