import { useEffect, useState, useCallback,useContext } from 'react'
import * as UserService from '../../src/services/UserServices'
import * as JwtService from '../services/JwtService'
import UserContext from "../context/UserContext"
import { routes } from "../secrets"
import { useNavigate } from "react-router-dom"
export default function useUser(){
    const { jwt, setJWT } = useContext(UserContext);
    const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate()

    const registerUser = useCallback(async (data) => {
        const res = await UserService.register(data);
        const response = await res.json();

        if (response.token) {
            setUser(response)
            JwtService.saveToken(response.token)  
        }
    }, [setJWT])

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
    const update =useCallback(async (data)=>{
        const res = await UserService.update(data);
        const response = await res.json()
        if(!response.token){
            return 404
        }else{
            setUser(response.user)
            setJWT(response.token)
            JwtService.saveToken(response.token)
        }
    })
    const logout = useCallback(() => {
        if(window.location.pathname != '/'){
            navigate('/')
        }
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
        registerUser,
        login,
        logout,
        update,
        user:user
    } 
}
