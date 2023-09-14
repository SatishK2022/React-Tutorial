import { useContext } from "react";
import { IMG_CDN_URL } from "../constants"
import { FaLocationDot } from "react-icons/fa6";
import userContext from "../context/userContext";

const RestaurantCard = ({name, cloudinaryImageId, avgRating, cuisines, areaName}) => {
  // const { user, setUser } = useContext(userContext);

    return (
      <>
        <img className="h-60 w-full object-cover" src={IMG_CDN_URL + cloudinaryImageId} alt="Chai" />
        <div className="p-5">
          <h2 className="text-2xl font-bold whitespace-nowrap overflow-x-scroll no-scrollbar ">{name}</h2>
          <div className="flex whitespace-nowrap justify-between gap-5 overflow-hidden py-2">
            <p className="overflow-x-scroll text-sm no-scrollbar">{cuisines.join(", ")}</p>
            <p className='font-semibold'>⭐{avgRating}</p>
          </div>
          <p className='text-slate-600 font-medium flex items-center gap-2'><FaLocationDot />{areaName}</p>
          {/* <p>Author: {user.name}</p> */}
        </div>
        {/* <button onClick={() => setUser({name: "Nagender"})}>Click me</button> */}
      </>
    )
}

export default RestaurantCard