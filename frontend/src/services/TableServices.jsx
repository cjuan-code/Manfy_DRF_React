import { secret } from "../secrets"

export const listTablesByRestaurant = async (data) => {
    return await fetch(secret.API_URL+'/tables/gettablesbyrestaurant', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({restaurant_id: String(data)})
    })
}

export const listFreeTablesByRestaurant = async (data) => {
    return await fetch(secret.API_URL+'/tables/getfreetablesbyrestaurant', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}