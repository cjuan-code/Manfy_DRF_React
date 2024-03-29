import React, { useEffect, useState } from "react";
import { getToken,destroyToken } from "../services/JwtService";
import * as UserService from "../services/UserServices"
import * as NotificationService from "../services/NotificationService"
import { useNavigate } from "react-router-dom"
const Context = React.createContext({});

export function UserContext({ children }){
    const navigate = useNavigate()
    const checkUser = async()=>{
        if(getToken){
            const res = await UserService.getUser()
            const response = await res.json()
            if(response.token && response.user){
                setJWT(response.token)
                setUser(response.user)
            }else{
                destroyToken()
                if(window.location.pathname != '/'){
                    navigate('/')
                }
            }

        }else{
            destroyToken()
            if(window.location.pathname != '/'){
                navigate('/')
            }
        }
    }
    const checkNotify = async()=>{
        if(getToken){
            const res = await NotificationService.countNotify()
            const response = await res.json()
            if(response){
                setNotify(response)
            }
        }
    }

    const [jwt, setJWT] = useState(() => checkUser());
    const [user, setUser] =useState(null)
    const [notify, setNotify] = useState(()=> checkNotify());
    const [ reser, setReser ] =useState(false)
    useEffect(()=>{
        checkNotify()
    },[reser,setReser])
    return (
        <Context.Provider value={{ jwt, setJWT,user,setUser, notify, setNotify,reser,setReser }}>{ children }</Context.Provider>
    );
}
export default Context