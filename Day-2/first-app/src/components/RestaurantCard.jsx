import { IMG_CDN_URL } from "../constants"
import { FaLocationDot } from "react-icons/fa6";

const RestaurantCard = ({name, cloudinaryImageId, avgRating, cuisines, areaName}) => {
    return (
      <>
        <img className="h-60 w-full object-cover" src={IMG_CDN_URL + cloudinaryImageId} alt="Chai" />
        <div className="p-5">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="flex whitespace-nowrap justify-between gap-5 overflow-hidden py-2">
            <p className="overflow-x-scroll text-sm no-scrollbar">{cuisines.join(", ")}</p>
            <p className='font-semibold'>⭐{avgRating}</p>
          </div>
          <p className='text-slate-600 font-medium flex items-center gap-2'><FaLocationDot />{areaName}</p>
        </div>
      </>
    )
}

export default RestaurantCard