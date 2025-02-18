import { Link, useParams } from "react-router-dom";
import Player from "../components/Player";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
    const { id } = useParams();
  
  
    const { image, name, duration, artist, audio } = songsArray.filter(
      (currentSongObj) => currentSongObj._id === id
    )[0];
  
    const artistObj = artistArray.filter(
      (currentArtistObj) => currentArtistObj.name === artist
    )[0];
  
    const songsArrayFromArtist = songsArray.filter(
      (currentSongObj) => currentSongObj.artist === artist
    );
  
    const randomIndex = Math.floor(
      Math.random() * (songsArrayFromArtist.length - 1)
    );
  
    const randomIndex2 = Math.floor(
      Math.random() * (songsArrayFromArtist.length - 1)
    );
  
    const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
    const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="mx-5 rounded-t-xl bg-gradient-to-b from-green-800 to-green-950 flex items-center justify-center p-6 h-[80vh]">
        <div className="shadow-2xl shadow-green-1000/25">
          <img
            src={image}
            alt={name}
            className="max-w-full block"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 place-items-center bg-black text-white p-4 gap-3 h-[15vh]">
        <Link to={`/artist/${artistObj._id}`} className="justify-self-start">
          <img
            src={artistObj.image}
            alt={artistObj.name}
            width={75}
            height={75}
            className="rounded-sm overflow-hidden"
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
        />


        <div className="flex flex-col">
          <p className="font-bold text-lg">{name}</p>
          <p className="text-sm">{artistObj.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
