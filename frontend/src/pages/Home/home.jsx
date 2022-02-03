import React from 'react'
import RestaurantsList from '../../components/Home/RestaurantList'
import Map from '../../components/Map/map'
import "./home.css"
const HomeList = () =>{
    return(
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://saborgourmet.com//wp-content/uploads/Tapas-espa%C3%B1olas.jpg" className="d-block w-100" alt="Tapas y Pinchos"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Disfruta</h5>
                        <p>Disfruta de los mejores entrantes.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://www.cocinayvino.com/wp-content/uploads/2019/06/CocinaYVino_TAPAS_PorAndreinaContreras_IMG_4544-1200x675.jpg" className="d-block w-100" alt="Tapas y Pinchos"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Saborea</h5>
                        <p>Saborea los mejores pinchos de tu entorno.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://okdiario.com/img/2021/03/07/tapas-espanolas-655x368.jpg" className="d-block w-100" alt="Tapas y Pinchos"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Consume</h5>
                        <p>Consume productos locales en tus sitios de confianza.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='restaurant-list'>
                <RestaurantsList/>
            </div>
            <div className='info'>
                <section id="Services">
                    <div className="ServicesWrapper">
                        <div className="Circle"></div>
                        <div className="Info">
                            <h1>Manfy</h1>
                            <p>
                                Manfy se trata de un proyecto nacido en 2022, con el proposito de ayudar a los locales gastronómicos 
                                para automatizar y agilizar el proceso de las reservas. Consta de un sistema de notificaciones, 
                                el cual avisa al usuario cuando esta lista su mesa. Además contamos con un sistema de incidencias para que 
                                tanto el usuario como el local puedan sancionar por mal servicio o mal comportamiento.
                            </p>
                            <button>Conocenos</button>
                        </div>
                        <div className='Img-Info'>
                            <img src="https://okdiario.com/img/2021/03/07/tapas-espanolas-655x368.jpg"/>
                        </div>
                    </div>
                </section>
            </div>
            <div id="map">
            <Map/>
            </div>
                

        </div>
       
    )
};

export default HomeList