import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null)

    // API Call
    async function getRestaurantInfo() {
        const response = await fetch(FETCH_MENU_URL + id);
        const data = await response.json();
        setRestaurant(data);
    }

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    // return Restaurant data
    return restaurant;
}

export default useRestaurant;