//import de module

import { NavLink } from "react-router-dom"
import React from "react"

const NavBarAdmin = () => {
    return(
        <React.Fragment>
        <nav>
            <div className="container_admin">
                <div className="container">
                 <ul>
                   
                   <h1 className="title">Dashboard Administration</h1>
                 
                    <li> <NavLink className="lien_admin" to="/AdminMessage"><u>Dashbord messages</u></NavLink></li>
                   
                    <li> <NavLink className="lien_admin" to="/AdminUsers"><u>Dashbord utilisateurs</u></NavLink></li>
                    
                    <li> <NavLink className="lien_admin" to="/AdminPrestation"><u>Dashbord  prestations</u></NavLink></li>
                   
                    <li> <NavLink className="lien_admin" to="/AdminProduit"><u>Dashbord produits</u></NavLink></li>
                    
                 </ul>  
                </div>
            </div>
        </nav>
        </React.Fragment>
    )
    
}

export default NavBarAdmin