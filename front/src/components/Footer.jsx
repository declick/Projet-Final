import { NavLink } from "react-router-dom"
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa"

const Footer = () => {
    
    return(
        <div className="footer">
        
            <div id="container_footer">
                        <div className="icons_footer">
                            <NavLink to="/"><div className="icon_fb"><FaFacebookSquare className="img_icon" /></div></NavLink>
                            <NavLink to="/"><div className="icon_insta"><FaInstagramSquare className="img_icon" /></div></NavLink>
                        </div>
            </div>
            <div className="reseaux">
                  <NavLink to="/MentionsLegales"><p>Mentions légales</p></NavLink>
                  <NavLink to="/ProtectionDesDonneesPersonnelles"><p>Protection des données personnelles</p></NavLink>
                  <NavLink to="/PolitiqueDeCookie"><p>Politique de cookies</p></NavLink>
            </div> 
            
              <h4>© 2022 MyLittleLashes. All rights reserved.</h4>
              
        </div>
        )
}

export default Footer