import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Player = () => {
  return (
    <div className="flex flex-col items-center gap-1 justify-self-stretch">
      <div className="flex items-center gap-5 text-2xl">
        <Link to="/song/1">
          <FontAwesomeIcon
            icon={faBackwardStep}
            className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:text-green-500"
          />
        </Link>
        <FontAwesomeIcon
          icon={faCirclePlay}
          className="cursor-pointer text-4xl transition-transform duration-200 ease-in-out hover:scale-105 hover:text-green-500"
        />
        <Link to='/song/3'>
          <FontAwesomeIcon
            icon={faForwardStep}
            className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:text-green-500"
          />
        </Link>
      </div>

      <div className="w-full max-w-[600px] flex items-center gap-2">
        <span className="w-11 text-center text-sm">0:00</span>
        <div className="w-full h-1 bg-[#666] rounded-sm overflow-hidden">
          <div
            className="h-full bg-white transition-width duration-200 ease-in-out"
            style={{ width: "25%" }}
          ></div>
        </div>
        <span className="w-11 text-center text-sm">3:30</span>
      </div>
    </div>
  );
};

export default Player;
