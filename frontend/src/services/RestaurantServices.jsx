const API_URL = "http://127.0.0.1:8005"

export const listRestaurant = async () => {
    return await fetch(API_URL+'/manfy/restaurants')
}