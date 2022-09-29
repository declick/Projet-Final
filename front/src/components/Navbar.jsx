import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    
    return(
        
       <React.Fragment>
            <nav>
                <ul>
                    <li>
                        { /* NavLink doit matcher avec le path définit dans le composant Route */ }
                        <NavLink to="/Home">Home</NavLink>
                        <NavLink to="/Inscription">Inscription</NavLink>
                        <NavLink to="/Connexion">Connexion</NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar