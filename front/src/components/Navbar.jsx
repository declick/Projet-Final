// Import des modules 

import { NavLink } from "react-router-dom"
import React, { useState,useEffect } from "react"

const Navbar = () => {
     
    // const [state, setState] = useState({
    //     admin:"",
    //     user:""
    // 

    // Crée une variable d'état appelée theme. 
    // La variable de thème suit le thème actuel de l'application, que le code définit par défaut sur "light"
    const [theme, setTheme] = useState(
        
        // l'API localStorage inclut la possibilité de conserver le thème après l'actualisation de la page.
        localStorage.getItem('theme') || 'light')
        
   const [checkbox, setCheckbox] = useState(
       
       localStorage.getItem('checkbox') || 'light')
   
          const toggleTheme = () => {
              
            if (theme === 'light' && checkbox === 'light') {
              setTheme('dark')
              setCheckbox('dark')
            } else {
              setTheme('light')
              setCheckbox('light')
            }
          }
          
          // UseEffect pour mettre à jour dynamiquement le thème de l'application en fonction de la variable d'état du thème.
          useEffect(() => {
              // l'API localStorage inclut la possibilité de conserver le thème après l'actualisation de la page.
              localStorage.setItem('theme', theme)
            // useEffect pour mettre à jour le nom de classe de l'élément document.body en fonction de la variable d'état du thème.
              localStorage.setItem('checkbox', checkbox)
            // Cela permet de mettre à jour dynamiquement le CSS de l'application en fonction du thème  
            document.body.className = theme
            if (theme === 'dark' && !document.getElementById('idCheckbox').checked ){
                document.getElementById("idCheckbox").checked = true
        }
          }, [theme],[checkbox])
          
    return(
        
                <React.Fragment> 
                    <nav className="nav_checkbox">
                  
                        <NavLink className="logo">Logo</NavLink>
                        
                        <label className="switch">
                            { /* bouton qui bascule entre les modes clair et sombre */ }
                            <div className={`App ${theme}`}> </div>
                                { /*  inclut une fonction toggleTheme pour changer la variable d'état du thème entre clair et sombre */ }
                                <input type="checkbox" id="idCheckbox" onClick={toggleTheme} />  
                                <div className="slider round"></div>
                        </label>

                        { /* Menu Burger */ }
                         <input type="checkbox" id="tab-nav" className="tab-nav" />
                            <label htmlFor="tab-nav" className="label">
                                <div id="burg1" className="burger"></div>
                                <div id="burg0" className="burger"></div>
                                <div id="burg2" className="burger"></div>
                            </label>
                            
                        <ul className="content_nav">
                        
                        { /* {(state.admin !== false && state.user !== false ) ? (
                        
                        <React.Fragment>*/ }
                        
                            { /* NavLink doit matcher avec le path définit dans le composant Route */ }
                           <li> <NavLink to="/">Accueil</NavLink></li>
                           <li> <NavLink to="/Prestation">Préstation</NavLink></li>
                           <li> <NavLink to="/Produit">Produit</NavLink></li>
                           <li> <NavLink to="/Apropos">A propos</NavLink></li>
                           <li> <NavLink to="/Contact">Nous contactez</NavLink></li>
                           <li> <NavLink to="/Reserver">Rendez-vous</NavLink></li>
                           <li> <NavLink to="/Inscription">Inscription</NavLink></li>
                           <li> <NavLink to="/Connexion">Connexion</NavLink></li>
                           <li> <NavLink to="/Profil">Profil</NavLink></li>
                           <li> <NavLink to="/Logout">Logout</NavLink></li>

                         { /*  </React.Fragment>
                         
                    ): ( */ }
                    
                        <React.Fragment>
                            <li> <NavLink to="/Admin">Admin</NavLink></li>
                        </React.Fragment>
                        
                  { /*  )} */ }

                        </ul>
                    </nav>

                </React.Fragment>
    )
}

export default Navbar
