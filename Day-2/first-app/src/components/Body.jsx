import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("KFC");
  
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value)
          }}
        />
        <button>Search</button>
      </div>

      <div className="products">
        {/* <h1 className="card-heading">Restaurants</h1> */}
        <div className="card-container">
          {restaurantList.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
