import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

function filterData(searchTxt, restaurants) {
  const filterData =  restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchTxt)
  );

  return filterData;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
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
              setRestaurants(restaurantList);
            }
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchTxt, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="products">
        {/* <h1 className="card-heading">Restaurants</h1> */}
        <div className="card-container">
          {restaurants.map((restaurant) => {
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
