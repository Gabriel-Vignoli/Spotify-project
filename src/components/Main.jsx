import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
    return (
      <div className="mt-0 mx-[10px] mb-[10px] p-5 rounded-2xl min-h-screen bg-linear-to-b from-[#062d14] to-black flex flex-col gap-10">

          <ItemList title='Popular Artists' items={5} itemsArray={artistArray} path="/artists" idPath="/artist"></ItemList>
          <ItemList title='Popular Musics' items={10} itemsArray={songsArray} path="/songs" idPath="/song"></ItemList>

      </div>
    );
  };
  
  export default Main;
  