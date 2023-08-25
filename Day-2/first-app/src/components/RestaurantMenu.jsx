import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../constants";


const RestaurantMenu = () => {
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState({})

    async function getRestaurantInfo() {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + id)
        const data = await response.json()
        setRestaurant(data);
        // console.log(data)
    }

    useEffect(() => {
        getRestaurantInfo()
    }, [])

    
    if (!restaurant.data) {
        return <p>Loading...</p>;
    }
    
    // console.log(restaurant.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map((i, card) => <li key={i}>{card?.card?.categories[0]?.itemsCards[0].card.info.name}</li>))
    const res = restaurant.data.cards[0].card.card.info;
    // console.log(restaurant.data.cards[2].groupedCards.cardGroupMap?.REGULAR.cards[2].card.card.itmeCard.map((card) => card.info.name))

  return (
    <>
        <p>Restaurant Id: {id}</p>
        <h1>Name: {res?.name}</h1>
        <img src={IMG_CDN_URL+res.cloudinaryImageId} />
        <h2>Area: {res.areaName}</h2>
        <h2>Rating: {res.avgRating}</h2>
        <h2>{res.cuisines.join(", ")}</h2>
        <h2>Locality: {res.locality}</h2>
        <h2>Address: {res.labels[1].message}</h2>
    </>
  )
}

export default RestaurantMenu