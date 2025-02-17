import { Link } from "react-router-dom";
import logoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-2 px-5">
      <Link to="/">
      <img src={logoSpotify} alt="Spotity Logo" className="transition-all transform hover:scale-110" />
      </Link>
      <Link to="/">
        <h1 className="no-underline font-semibold text-2xl text-green-400 hover:text-green-500 transition-all transform hover:scale-110">
          Spotify
        </h1>
      </Link>
    </div>
  );
};

export default Header;
