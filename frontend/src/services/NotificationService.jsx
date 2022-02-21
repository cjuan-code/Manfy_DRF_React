import { secret } from "../secrets"
import * as JwtService from "./JwtService"

export const countNotify = async()=>{
    let res = await fetch(secret.API_URL + "/notifications",{
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Token ${JwtService.getToken()}`
        }
    });
    return res
}