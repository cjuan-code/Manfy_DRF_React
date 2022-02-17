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