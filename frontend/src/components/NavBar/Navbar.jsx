import "./Navbar.css"
const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" ><i className="fas fa-utensils"></i>Manfy</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar