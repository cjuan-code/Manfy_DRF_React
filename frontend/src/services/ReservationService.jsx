import { secret } from "../secrets"
import * as JwtService from "./JwtService"

export const getReservation = async()=>{
    let res = await fetch(secret.API_URL + "/reservations/read",{
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Token ${JwtService.getToken()}`
        }
    });
    return res
}
export const deleteReservation = async(id)=>{
    let res = await fetch(secret.API_URL + "/reservations/"+id+"",{
        method:'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Token ${JwtService.getToken()}`
        }
    });
    return res
}
export const getReservationUser = async()=>{
    let res = await fetch(secret.API_URL + "/reservations/user",{
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Token ${JwtService.getToken()}`
        }
    });
    return res
}