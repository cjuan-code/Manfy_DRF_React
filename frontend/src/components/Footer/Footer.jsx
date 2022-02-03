import React from 'react'
import useRestaurant from '../../../src/hooks/useRestaurant'
import "./footer.css"
const Footer = () =>{
    const { restaurants } = useRestaurant()
    return(
        <footer>
            <div className="container">
                <div className="row">
                <div className="col-md-4 footer-column">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <span className="footer-title">Restaurantes</span>
                        </li>
                        { restaurants.map((restaurant)=>(
                            <li key={restaurant.id} className="nav-item">
                                <a className="nav-link" href="#">{restaurant.name}</a>
                            </li>
                        )) }
                    </ul>
                </div>
                <div className="col-md-4 footer-column">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <span className="footer-title">Compañía</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nuestra Historia</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 footer-column">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <span className="footer-title">Contacto & Soporte</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link"><i className="fas fa-phone"></i>+34 969 69 69 69</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-comments"></i>Live chat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-envelope"></i>Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-star"></i>Give feedback</a>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>
                
                <div className="row text-center">
                <div className="col-md-4 box">
                    <span className="copyright quick-links">Copyright &copy; Manfy <script>document.write(new Date().getFullYear())</script>
                    </span>
                </div>
                <div className="col-md-4 box">
                    <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                        <a href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </li>
                    </ul>
                </div>
                <div className="col-md-4 box">
                    <ul className="list-inline quick-links">
                    <li className="list-inline-item">
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Terms of Use</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer