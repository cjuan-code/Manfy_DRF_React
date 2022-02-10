import React, { useEffect, useState } from 'react'
import LoginComponent from '../../components/Login/Login'
import RegisterComponent from '../../components/Register/Register'
import "./logpage.css"

const Login = ()=>{
    const [type,setType]=useState('login');
    const changeSetType = (type)=>{
        setType(type)
    }
    if(type == 'login'){
        return  (
            <div>
                <LoginComponent/>
                <div className="row">
                    <p className='text'>No tienes cuenta? <a className='btn log-btn' onClick={(e)=>changeSetType('register')}>Registrate Aquí!</a></p>
                </div>
            </div>
        )
    }else{
        return (
            <div>
                <RegisterComponent/>
                <div className="row">
                    <p className='text'>Ya tienes cuenta? <a className='btn log-btn' onClick={(e)=>changeSetType('login')}>Inicia Sesion</a></p>
                </div>
            </div>
        )
    }
}

export default Login