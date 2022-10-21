//import de module

import {useContext} from "react"
import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG } from '../config.js'
import { NavLink } from "react-router-dom"

const Admin = () => {

    return(
        
        <React .Fragment>

        <div className="container_admin">
            <div className="container">
                           <div>
                <h2 className="title"><u>Dashboard Administration</u></h2>
                </div>
                
            <div>
            <NavLink className="lien_admin" to="/AdminMessage"> -> <u>Dashbord messages</u></NavLink>
            </div>
            <div>
            <NavLink className="lien_admin" to="/AdminUsers"> -> <u>Dashbord utilisateurs</u></NavLink>
            </div>
            <div>
            <NavLink className="lien_admin" to="/AdminPrestation"> -> <u>Dashbord  prestations</u></NavLink>
            </div>
            <div>
            <NavLink className="lien_admin" to="/AdminProduit"> -> <u>Dashbord produits</u></NavLink>
            </div>
               
            </div>
        </div>

        </React.Fragment>
    ) 
}

export default Admin