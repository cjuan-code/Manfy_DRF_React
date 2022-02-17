import { secret } from "../secrets"
import JwtService from "./JwtService"

export const createReservation = async (request_data) => {
    return await fetch(secret.API_URL+'/reservations', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Token ${JwtService.getToken()}`
        },
        body: JSON.stringify(request_data)
    })
}