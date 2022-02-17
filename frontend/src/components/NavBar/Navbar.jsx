import React,{ useEffect, useState, useCallback,useContext } from 'react'
import {Link,Navigate} from 'react-router-dom'
import { Avatar } from 'react-rainbow-components';
import "./Navbar.css"
import useUser from '../../../src/hooks/useUser'
import UserContext from "../../context/UserContext"

const Navbar = () =>{
    const { isLogged, logout } = useUser()
    const { user, setUser } = useContext(UserContext);
    var initials = ''
    if(isLogged){
        if(user['first_name'] !=undefined && user['last_name'] !=undefined){
            var fstName = user['first_name'].charAt(0)
            var fstLastName = user['last_name'].charAt(0)
            initials = fstName+fstLastName
        }
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><i className="fas fa-utensils"></i>Manfy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Contacto</a>
                        </li>
                        {
                            isLogged
                            ?
                            <ul className="navbar-nav">
                                                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user['full_name']}
                                </a>
                                <ul className="dropdown-menu log-menu" >
                                    <li><Link className="dropdown-item" to="profile">Profile</Link></li>
                                    <li><a className="dropdown-item" onClick={logout}>Logout</a></li>
                                </ul>
                            </li>
                                <li className="nav-item">
                                <Avatar
                                    className="rainbow-m-around_x-small text-black"
                                    assistiveText={user['full_name']}
                                    initials={initials}
                                    title={user['full_name']}
                                    backgroundColor="white"
                                    color="black"
                                />
                                </li>
                            </ul>
                            :
                            <li className="nav-item">
                            <Link className="nav-link" to="login">Login</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar