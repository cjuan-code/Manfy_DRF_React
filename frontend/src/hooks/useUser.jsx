import { useEffect, useState, useCallback,useContext } from 'react'
import * as UserService from '../../src/services/UserServices'
import * as JwtService from '../services/JwtService'
import UserContext from "../context/UserContext"
export default function useUser(){
    const { jwt, setJWT } = useContext(UserContext);
    const { user, setUser } = useContext(UserContext);
    // const [user,setUser]=useState([]);
    // useEffect(()=>{
    //     login();
    // },[]);
    const login = useCallback(async (data)=>{
        const res = await UserService.login(data);
        const response = await res.json()
        if(!response.token){
            return 404
        }else{
            setUser(response)
            JwtService.saveToken(response.token)
        }
        
    },[setJWT]);
    const logout = useCallback(() => {
        console.log("entra")
        JwtService.destroyToken()
        setUser(null)
        setJWT(null);
    }, [setJWT]);
    const isLog = ()=>{
        if(user){
            return true
        }else{
            return false
        }
    }
    return {
        isLogged:isLog(),
        login,
        logout,
        user:user
    } 
}