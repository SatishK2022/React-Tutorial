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
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
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
          className="btn"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="products">
        {/* <h1 className="card-heading">Restaurants</h1> */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link className="card-container" to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
