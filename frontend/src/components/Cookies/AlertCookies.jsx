import "./alert.css"
const cookies = ()=>{
    return(       
        <div className="container">
            <div className="alert alert-warning alert-dismissible fadeshow" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                Este sitio web utiliza <a href="https://policies.google.com/technologies/cookies?hl=es" className="alert-link" target="_blank">cookies</a> para personalizar el contenido y analizar el tráfico con el fin de ofrecerle una mejor experiencia.
                <span className="buttons">
                    <a className="btn btn-light" data-bs-dismiss="alert">Aceptar</a>
                    <a href="https://policies.google.com/technologies/cookies?hl=es" className="btn btn-light"  target="_blank">Leer Más</a>
                </span>
            </div>
        </div>
    )
}

export default cookies