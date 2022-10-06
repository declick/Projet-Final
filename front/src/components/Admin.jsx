import React from "react"
import { NavLink } from "react-router-dom"


const Admin = () => {
    
    
    
    
    return(
        
    <React.Fragment>
        <div className="sidebar">
        
         <h1>Admin Dashboard</h1>
            
            <nav className="navigation">
                <ul>
                    <li><NavLink href="/Editmessage">Messages</NavLink></li>
                    <li><NavLink href="/Edituser">User</NavLink></li>
                    <li><NavLink href="/Editimage">Images</NavLink></li>
                    <li><NavLink href="/Editprestation">Prestation</NavLink></li>
                    <li><NavLink href="/Editproduit">Produits</NavLink></li>
                </ul>
            </nav>
            
        </div>
    </React.Fragment>
        
    )
}

export default Admin