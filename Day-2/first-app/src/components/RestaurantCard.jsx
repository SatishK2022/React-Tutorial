import { IMG_CDN_URL } from "../constants"

const RestaurantCard = ({name, cloudinaryImageId, avgRating, cuisines, areaName}) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="Chai" />
        <div className="card-content">
          <h2>{name}</h2>
          <div className='ratings'>
            <p>{cuisines.join(", ")}</p>
            <p className='rating'>⭐{avgRating}</p>
          </div>
          <p className='location'>{areaName}</p>
        </div>
      </div>
    )
}

export default RestaurantCard