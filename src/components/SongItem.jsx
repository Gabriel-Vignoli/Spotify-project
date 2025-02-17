import { Link } from "react-router-dom";

const SongItem = () => {
  return (
    <Link
      to="/song/1"
      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition duration-200"
    >
      <div className="flex items-center gap-4">
        <p className="text-gray-400">1</p>

        <div className="flex items-center gap-2">
          <img
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Image"
            className="w-12 h-12 rounded-md"
          />

          <p className="text-white font-medium">Music Name</p>
        </div>
      </div>

      <p className="text-gray-400">2:10</p>
    </Link>
  );
};

export default SongItem;
