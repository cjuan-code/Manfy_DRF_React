import { secret } from "../secrets"

export const listRestaurant = async () => {
    return await fetch(secret.API_URL+'/restaurants')
}