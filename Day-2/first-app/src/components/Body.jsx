import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../hooks/useOnline";
import OFFLINE from "../assets/offline.svg"


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchTxt, setSearchTxt] = useState("");

  // This is used to do the dependent changes
  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.076090&lng=72.877426&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await response.json();
      
      setAllRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  const isOnline = useOnline();

  if(!isOnline) {
    return <h1>🔴 OFFLINE, Please Check Your Internet Connection!!</h1>
  }

  if (!allRestaurants) return null;
    
  return (allRestaurants?.length === 0) ? <Loading /> :(
    <div className="h-auto w-full px-5 pt-20 md:pt-28 lg:pt-32 bg-orange-100">
      <div className="flex flex-col items-center gap-4">
        <input
          className="w-full md:w-3/4 lg:w-1/2 border border-gray-400 py-2 px-5 rounded-md outline-none focus:bg-sky-100 focus:border-sky-500"
          type="text"
          placeholder="Search..."
          value={searchTxt}
          onChange={(e) => {
            const searchText = e.target.value;
            setSearchTxt(searchText);
            if (searchText === "") {
              setFilteredRestaurants(allRestaurants);
            }
          }}
        />
        <button
          className="bg-orange-500 text-white font-semibold py-2 px-5 rounded hover:bg-orange-600"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex items-start flex-wrap justify-evenly mt-10">
        {/* <h1 className="card-heading">Restaurants</h1> */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link className="w-full md:w-[45%] lg:w-[30%] bg-white rounded-2xl overflow-hidden shadow-lg mb-10" to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
