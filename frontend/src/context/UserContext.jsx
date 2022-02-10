import React, { useState } from "react";
import { getToken,destroyToken } from "../services/JwtService";
import * as UserService from "../services/UserServices"
const Context = React.createContext({});

export function UserContext({ children }){
    const checkUser = async()=>{
        if(getToken){
            const res = await UserService.getUser()
            const response = await res.json()
            
            if(response.token && response.user){
                setJWT(response.token)
                setUser(response.user)
            }else{
                destroyToken()
            }

        }else{
            destroyToken()
        }
    }
    const [jwt, setJWT] = useState(() => checkUser());
    const [user, setUser] =useState(null)
    return (
        <Context.Provider value={{ jwt, setJWT,user,setUser }}>{ children }</Context.Provider>
    );
}
export default Context