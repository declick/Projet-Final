// Import des modules 
import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    
    return(
        
       <React.Fragment>
            <nav>
                <ul>
                        { /* NavLink doit matcher avec le path définit dans le composant Route */ }
                       <li> <NavLink to="/">Acceuil</NavLink></li>
                       <li> <NavLink to="/Prestation">Préstation</NavLink></li>
                       <li> <NavLink to="/Produit">Produit</NavLink></li>
                       <li> <NavLink to="/Apropos">A propos</NavLink></li>
                       <li> <NavLink to="/Contact">Nous contactez</NavLink></li>
                       <li> <NavLink to="/Reserver">Prendre Rendez-vous</NavLink></li>
                     </ul>
                     <ul>  
                       <li> <NavLink to="/Inscription">Inscription</NavLink></li>
                       <li> <NavLink to="/Connexion">Connexion</NavLink></li>
                       <li> <NavLink to="/Profil">Profil</NavLink></li>
                       <li> <NavLink to="/Admin">Admin</NavLink></li>
                       <li> <NavLink to="/Logout">Logout</NavLink></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar