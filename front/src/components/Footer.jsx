import React from "react"
import { NavLink } from "react-router-dom"
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa"

const Footer = () => {

    return (
        
        <React.Fragment>
            <div className="footer">
                <div id="container_footer">
                    <div className="icons_footer">
                      <a href='https://www.facebook.com/MLittlelashes?locale=fr_FR' rel="noopener" ><FaFacebookSquare className="img_icon icon_fb" /></a>
                      <a href='https://www.instagram.com/mylittlelashesnantes/'  rel="noopener" ><FaInstagramSquare className="img_icon icon_insta" /></a>
                    </div>
                </div>
                <div className="reseaux">
                    <NavLink to="/MentionsLegales"><p>Mentions légales</p></NavLink>
                    <NavLink to="/PolitiqueDeDonnees"><p>Politique des données personnel</p></NavLink>
                </div> 
                
                  <h4>© 2022 MyLittleLashes. All rights reserved.</h4>
                  
            </div>
        </React.Fragment>
    )
}

export default Footer