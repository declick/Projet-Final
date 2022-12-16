import React from 'react'
import { NavLink } from "react-router-dom"

const PageNotFound = () => {

    return (

        <React.Fragment>
            <div className="container_404">
                <div className="text_404">
                    <h1>404 Error</h1>
                    <h1> Page not found</h1>
                </div>
                
                <p>Aïe, aïe,aïe la page n'est pas là (et pourtant on sait que tu y met de la bonne volonté).</p>
                <p>Helon ? c'est toi ? Veux tu bien faire un don pour l'abolition des pages 404 sur ce site.</p>
                
                <h2>Sinon que faire ?</h2>
                
                <p>Vous pouvez éteindre votre kiwi et manger un ordinateur.</p>
                
                <img src="https://thumbs.gfycat.com/AridDrearyAquaticleech-size_restricted.gif" alt="carlton" />
                
                <NavLink to="/"><button type="submit" className="card_button">Accueil</button></NavLink>
            </div>
        </React.Fragment>

    )
}

export default PageNotFound