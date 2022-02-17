import { secret } from "../secrets"
import * as JwtService from "./JwtService"

export const createReservation = async (request_data) => {
    return await fetch(secret.API_URL+'/reservations', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Token ${JwtService.getToken()}`
        },
        body: JSON.stringify(request_data)
    });
}

export const getReservation = async()=>{
    let res = await fetch(secret.API_URL + "/reservations/read",{
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Token ${JwtService.getToken()}`
        },
    })
    return res
}