import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Loading from "./Loading";
import {
  FaStar,
  FaLocationDot,
  FaHouseChimney,
  FaIndianRupeeSign,
} from "react-icons/fa6";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  async function getRestaurantInfo() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
        id
    );
    const data = await response.json();
    setRestaurant(data);
    console.log(data);
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  if (!restaurant.data) {
    return <Loading />;
  }

  const res = restaurant?.data?.cards[0]?.card?.card?.info;

  return (
    <>
        <div className="restaurant-menu-container">
            <div>
            <img
                className="restaurant-menu-img"
                src={IMG_CDN_URL + res.cloudinaryImageId}
            />
            </div>
            <div>
                <h1>{res?.name}</h1>
                <div className="restaurant-ratings">
                    <p>
                    <FaLocationDot /> {res.areaName}
                    </p>
                    <p>
                    <FaStar /> {res.avgRating}
                    </p>
                </div>
                <p>
                    <FaHouseChimney /> {res.labels[1].message}
                </p>
            </div>
        </div>
        <div className="restaurant-menu">
            <h2 className="restaurant-menu-heading">MENU</h2>
            {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards?.map(
            (menu) => (
                <div key={menu?.card?.info?.id} className="restaurant-menu-details">
                    <div>
                        <img
                        className="menu-image"
                        src={IMG_CDN_URL + menu?.card?.info.imageId}
                        />
                    </div>
                    <div>
                        <h2>{menu?.card?.info?.name}</h2>
                        <p className="menu-price">
                        <FaIndianRupeeSign />
                        {(menu?.card?.info?.price / 100).toFixed(2)}
                        </p>
                        <p className="menu-desc" key={menu?.card?.info?.id}>
                        {menu?.card?.info?.description}
                        </p>
                    </div>
                </div>
            )
            )}
        </div>
    </>
  );
};

export default RestaurantMenu;
