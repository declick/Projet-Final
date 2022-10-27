//import de module

import { NavLink } from "react-router-dom"
import React from "react"

const NavBarAdmin = () => {
    return(
        <React.Fragment>
            <div className="container_admin">
                <div className="container">
                    <div>
                    <h1 className="title"><u>Dashboard Administration</u></h1>
                    </div>
                    <div>
                    <NavLink className="lien_admin" to="/AdminMessage"><u>Dashbord messages</u></NavLink>
                    </div>
                    <div>
                    <NavLink className="lien_admin" to="/AdminUsers"><u>Dashbord utilisateurs</u></NavLink>
                    </div>
                    <div>
                    <NavLink className="lien_admin" to="/AdminPrestation"><u>Dashbord  prestations</u></NavLink>
                    </div>
                    <div>
                    <NavLink className="lien_admin" to="/AdminProduit"><u>Dashbord produits</u></NavLink>
                    </div>
                   
                </div>
            </div>
        </React.Fragment>
    )
    
}

export default NavBarAdmin