import SongItem from "./SongItem";

const SongList = () => {
  return (
    <div className="flex flex-col gap-4">
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
    </div>
  );
};

export default SongList;
