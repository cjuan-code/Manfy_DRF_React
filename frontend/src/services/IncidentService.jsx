import { secret } from "../secrets"
import * as JwtService from "./JwtService"

export const getIncident = async()=>{
    let res = await fetch(secret.API_URL + "/user/getIncident",{
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Token ${JwtService.getToken()}`
        }
    });
    return res
}
export const createIncident = async(data)=>{
    let res = await fetch(secret.API_URL + "/user/incident",{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Token ${JwtService.getToken()}`
        },
        body:JSON.stringify(data)
    });
    return res
}