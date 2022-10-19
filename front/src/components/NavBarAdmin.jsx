import React, { useState,useEffect } from "react"
import { NavLink } from "react-router-dom"

const NavBarAdmin   = ()=> {
    
     return (
        <React.Fragment>
            <div className="sidebar">
             <h1>Admin Dashboard</h1>
                <nav className="navigation">
                    <ul>
                       <li> <NavLink to="/Admin?page=AdminPrestation">Dashboard Prestation</NavLink></li><hr/>
                       <li> <NavLink to="/Admin?page=AdminUser">Dashboard User</NavLink></li><hr/>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
                           )
}
export default NavBarAdmin