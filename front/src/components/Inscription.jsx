//import de module

import React from "react"
import axios from "axios"
import { BASE_URL} from '../config.js'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"

const Inscription = () => {

    const navigate = useNavigate()
     
    { /* Chaque appel à un crochet obtient un état isolé */ }
    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
    
    const [errorMessage, setErrorMessage] = React.useState("")

        { /*empêcher le comportement par défaut qui aurait dû se manifester lorsqu'une action a eu lieu */ }
        const submit = (e) => {
          
            const data= { 
                prenom,
                nom,
                email,
                mdp
            }
            
              e.preventDefault()
                if (prenom.trim() === "" || nom.trim() === "" || email.trim() === "" || mdp.trim() === "") {
                		setErrorMessage("Merci de compléter correctement le formulaire.")
                }else{
                  if (prenom.length <= 255 && nom.length <= 255 && email.length <= 255){
                    	setErrorMessage("Merci de compléter correctement le formulaire.")
                    	
                      axios.post(`${BASE_URL}/Inscription`, data)
                      
                          .then((res) => {
                              if(res.data.response === true) {
                              navigate("/Connexion")
                              } else{
                              navigate("/Inscription") 
                              console.log(res)
                              }
                          })
                          .catch((err) => {
                          console.log(err)
                          })
                  }
                }
        
        }
        
 
   
    return (
        
            <React.Fragment>
            <h1>Inscription</h1>
            
              <div className="center">
                <form className="form" id="">
                    <label>
                      <div>  
                        <input type="text" placeholder="PRENOM :" name="prenom" maxLength="255" value={prenom} onChange={(e) => setPrenom(e.target.value)} required /> 
                      </div>
                    </label>
                    
                    <label>
                      <div>  
                        <input type="text" placeholder="NOM :" name="nom" maxLength="255"  value="" value={nom} onChange={(e) => setNom(e.target.value)} required />
                      </div>
                    </label>
                    
                    <label>
                      <div>  
                        <input type="email" placeholder="@EMAIL :" name="email" maxLength="255" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                      </div>
                    </label>
                    
                    <label>
                      <div>
                        <input type="password" placeholder="MOT DE PASSE :" name="mdp" minLength="8" maxLength="255" value={mdp} onChange={(e) => setMdp(e.target.value)} required /> 
                      </div>
                    </label>
                  
                    <label>
                          <input type="submit" onClick={submit} value="Envoyer" />
                     </label>
                     
                      <label>
                        <div>
                          <input type="checkbox" value="checkbox" name="" />  Lire et accepter les <NavLink to="/MentionsLegales" target="_blank">Mentions Légales</NavLink>
                       </div>
                    </label> 
                   
             
                          <label><p>Dejà membre ?  <NavLink to='/Connexion'>  Connectez vous ici.</NavLink></p></label>
               
                     
                   <h3>{errorMessage}</h3>
                   
                </form> 
                </div>
            </React.Fragment>
    )
}

export default Inscription