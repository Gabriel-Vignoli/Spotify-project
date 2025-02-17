import { Link } from "react-router-dom";
import Player from "../components/Player";

const Song = () => {
  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="mx-5 rounded-t-xl bg-gradient-to-b from-green-800 to-green-950 flex items-center justify-center p-6 h-[80vh]">
        <div className="shadow-2xl shadow-green-1000/25">
          <img
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt=""
            className="max-w-full block"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 place-items-center bg-black text-white p-4 gap-3 h-[15vh]">
        <Link to="/artist/1" className="justify-self-start">
          <img
            src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
            alt=""
            width={75}
            height={75}
            className="rounded-sm overflow-hidden"
          />
        </Link>

        <Player />

        <div className="flex flex-col">
          <p className="font-bold text-lg">Music Name</p>
          <p className="text-sm">Artist Name</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
