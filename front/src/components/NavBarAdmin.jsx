//import de module

import { NavLink } from "react-router-dom"
import React from "react"
import { AiOutlineMail,AiOutlineUser,AiOutlineFilePpt } from 'react-icons/ai'
import { MdProductionQuantityLimits } from 'react-icons/md'

const NavBarAdmin = () => {
    return(
        <React.Fragment>
            <nav>
                <div className="container_admin">
                     <ul>
                       
                       <h1 className="title">Dashboard Administration</h1>
                     
                        <li> <NavLink className="lien_admin" to="/AdminMessage"> <AiOutlineMail /> <u>Messages</u></NavLink></li>
                       
                        <li> <NavLink className="lien_admin" to="/AdminUsers"> <AiOutlineUser /> <u>Utilisateurs</u></NavLink></li>
                        
                        <li> <NavLink className="lien_admin" to="/AdminPrestation"> <AiOutlineFilePpt /> <u>Prestations</u></NavLink></li>
                       
                        <li> <NavLink className="lien_admin" to="/AdminProduit"> <MdProductionQuantityLimits /> <u>Produits</u></NavLink></li>
                        
                     </ul>  
                </div>
            </nav>
        </React.Fragment>
    )
    
}

export default NavBarAdmin