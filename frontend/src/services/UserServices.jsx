import { secret } from "../secrets"
import * as JwtService from "./JwtService"

export const register = async (data) => {

    return await fetch(secret.API_URL + "/register",{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const login = async (data) => {
    let res = await fetch(secret.API_URL + "/login",{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return res
}
export const getUser = async()=>{
    let res = await fetch(secret.API_URL + "/getUser",{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Token ${JwtService.getToken()}`
        }
    });
    return res
}
export const update = async(data)=>{
    let res = await fetch(secret.API_URL + "/update",{
        method:'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Token ${JwtService.getToken()}`
        },
        body:JSON.stringify(data)
    });
    return res
}