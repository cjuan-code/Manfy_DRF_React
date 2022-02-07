import React from 'react'
import {Link,Navigate} from 'react-router-dom'
import "./Navbar.css"
const Navbar = () =>{
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
                            <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Contacto</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="login" >Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar