import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Loading from "./Loading";
import {
  FaStar,
  FaLocationDot,
  FaHouseChimney,
  FaIndianRupeeSign,
} from "react-icons/fa6";
import useRestaurant from "../hooks/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  if (!restaurant?.data) {
    return <Loading />;
  }

  const res = restaurant?.data?.cards[0]?.card?.card?.info;

  return (
    <>
        <div className="h-auto w-full bg-orange-100 flex pt-40">
            <div>
            <img
                className=""
                src={IMG_CDN_URL + res.cloudinaryImageId}
            />
            </div>
            <div>
            <h1>{res?.name}</h1>
            <div className="">
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

      <div className="h-auto w-full bg-orange-100">
        <h2 className="">MENU</h2>
        {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards?.map(
          (menu) => (
            <div key={menu?.card?.info?.id} className="">
              <div>
                <img
                  className=""
                  src={IMG_CDN_URL + menu?.card?.info.imageId}
                />
              </div>
              <div>
                <h2>{menu?.card?.info?.name}</h2>
                <p className="">
                  <FaIndianRupeeSign />
                  {(menu?.card?.info?.price / 100).toFixed(2)}
                </p>
                <p className="" key={menu?.card?.info?.id}>
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
