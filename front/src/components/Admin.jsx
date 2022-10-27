//import de module

import React from "react"
import { NavLink } from "react-router-dom"
import NavBarAdmin from "./NavBarAdmin"

const Admin = () => {

    return(
        
        <React.Fragment>

            <div className="sidebar">
                <nav className="navigation">
                    <ul>
                       <li><NavBarAdmin /> </li>
                    </ul>
                </nav>
            </div>

        </React.Fragment>
    ) 
}

export default Admin