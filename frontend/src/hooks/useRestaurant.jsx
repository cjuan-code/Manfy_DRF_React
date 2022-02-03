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
        console.log(data)
        setRestaurants(data)

    });
    return {
        listRestaurant,
        restaurants: restaurants
    } 
}
