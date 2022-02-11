import { useEffect, useState, useCallback } from 'react'
import * as RestaurantService from '../../src/services/RestaurantServices'

export default function useRestaurant(){
    const [restaurants,setRestaurants]=useState([]);
    useEffect(()=>{
        listRestaurant();
    },[]);
    const listRestaurant = useCallback(async ()=>{
        const res = await RestaurantService.listRestaurant();
        const data = await res.json();
        setRestaurants(data)

    });
    return {
        listRestaurant,
        restaurants: restaurants
    } 
}

export function useRestaurantByID(restaurant_id) {

    const [restaurant, setRestaurant] = useState();

    useEffect(() => {
        getRestaurant();
    }, [])

    const getRestaurant = useCallback(async () => {
        
        const res = await RestaurantService.getRestaurantByID(restaurant_id);
        const data = await res.json();

        setRestaurant(data);
    })

    return {
        getRestaurant,
        restaurant: restaurant
    }
}
