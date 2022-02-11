import { secret } from "../secrets"

export const listRestaurant = async () => {
    return await fetch(secret.API_URL+'/restaurants')
}

export const getRestaurantByID = async (data) => {
    return await fetch(secret.API_URL+'/restaurant', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({restaurant_id: String(data)})
    })
}