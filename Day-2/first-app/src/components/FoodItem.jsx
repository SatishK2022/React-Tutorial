import { FaIndianRupeeSign } from "react-icons/fa6";
import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, imageId, description, price }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-2 md:gap-2 shadow-lg lg:gap-10 my-10 mx-5 md:mx-8 lg:mx-10 bg-white rounded">
        <div className="w-full md:w-80 h-52">
          <img
            className="w-full h-60 md:h-52 md:w-80 object-cover rounded"
            src={IMG_CDN_URL + imageId}
          />
        </div>
        <div className="flex flex-col gap-2 w-full p-5 md:py-5 md:pr-5">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="flex items-center gap-2 text-lg font-medium">
            <FaIndianRupeeSign />
            {(price / 100).toFixed(2)}
          </p>
          <p className="flex items-center gap-2 text-lg font-medium">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
