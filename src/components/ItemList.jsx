import PropTypes from "prop-types";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
const { pathname } = useLocation()
const isHome = pathname === "/"
let finalItems;

 finalItems = isHome ? items : Infinity

  return (
    <div className="flex flex-col gap-2.5">
      {/* Header */}
      <div className="flex items-center justify-between leading-[1.3]">
        <h2 className="text-2xl font-bold">{title}</h2>

        {isHome ? <Link to={path} className="hover:underline text-green-100">
          Show all
        </Link>: null}
        
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(172px,1fr))] gap-4">
        {itemsArray.slice(0, finalItems).map((artist, index) => (
          <SingleItem 
            {...artist} 
            idPath={idPath}
            key={`${title}-${index}`} 
          />
        ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  itemsArray: PropTypes.array.isRequired, 
  path: PropTypes.string.isRequired,
  idPath: PropTypes.string.isRequired
};

export default ItemList;
