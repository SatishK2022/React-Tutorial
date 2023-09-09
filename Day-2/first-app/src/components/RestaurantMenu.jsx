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
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  // function handleAddItem() {
  //   dispatch(addItem("Satish"));
  // }

  function addFoodItem(item) {
    dispatch(addItem(item));
  }

  const restaurant = useRestaurant(id);

  if (!restaurant?.data) {
    return <Loading />;
  }

  const res = restaurant?.data?.cards[0]?.card?.card?.info;

  return (
    <>
      <div className="h-auto w-full bg-orange-100 gap-10 px-5 md:px-8 lg:px-10 flex flex-col md:flex-row pt-28">
        <div className="w-full md:w-[50vw]">
          <img
            className="w-full md:w-[50vw] h-80 object-cover rounded-xl"
            src={IMG_CDN_URL + res?.cloudinaryImageId}
          />
        </div>
        <div className="w-full md:w-[50vw] flex flex-col gap-2">
          <h1 className="text-3xl font-bold ">{res?.name}</h1>
          <p className="flex items-center gap-2 text-slate-800 text-lg font-medium">
            <FaLocationDot /> {res.areaName}
          </p>
          <p className="flex items-center gap-2 text-slate-800 text-lg font-medium">
            <FaStar /> {res.avgRating}
          </p>
          <p className="flex items-start gap-2 text-slate-800 text-lg font-medium">
            <FaHouseChimney className="text-3xl pt-1" /> {res.labels[1].message}
          </p>
        </div>
      </div>

      <div className="h-auto w-full bg-orange-100 pt-10 px-5 md:px-8 lg:px-10 pb-5">
        <h2 className="text-4xl font-bold mb-5">MENU</h2>
        {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards?.map(
          (menu) => (
            <div key={menu?.card?.info?.id} className="flex flex-col md:flex-row items-start gap-2 md:gap-2 shadow-lg lg:gap-10 my-10 bg-white rounded">
              <div className="w-full md:w-80 h-52">
                <img
                  className="w-full h-60 md:h-52 md:w-80 object-cover rounded"
                  src={IMG_CDN_URL + menu?.card?.info.imageId}
                />
              </div>
              <div className="flex flex-col gap-2 w-full p-5 md:py-5 md:pr-5">
                <h2 className="text-2xl font-semibold">{menu?.card?.info?.name}</h2>
                <p className="flex items-center gap-2 text-lg font-medium">
                  <FaIndianRupeeSign />
                  {(menu?.card?.info?.price / 100).toFixed(2)}
                </p>
                <p className="text-base font-normal" key={menu?.card?.info?.id}>
                  {menu?.card?.info?.description}
                </p>
                <button onClick={() => addFoodItem(menu?.card?.info)} className="w-28 py-2 text-white mt-2 font-semibold bg-green-400 rounded hover:bg-green-500 active:scale-95 transition duration-300 ">Add Item</button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
