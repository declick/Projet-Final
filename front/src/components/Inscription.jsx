//import de module

import React from "react"
import axios from "axios"
import { BASE_URL} from '../config.js'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"

const Inscription = () => {

    const navigate = useNavigate()
     
    { /* Chaque appel à un crochet obtient un état isolé */ }
    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
    
    const [errorMessage, setErrorMessage] = React.useState("")
    
   const [isChecked, setIsChecked] = React.useState(false)
   
    const [showmdp, setShowmdp] = React.useState(false)
   
    const validRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
   
   const handleOnChange = () => {
        setIsChecked(!isChecked)
    }
   
        { /*empêcher le comportement par défaut qui aurait dû se manifester lorsqu'une action a eu lieu */ }

        const submit = (e) => {

            const data= { 
                prenom,
                nom,
                email,
                mdp
            }

          e.preventDefault()
          
            if (prenom.trim() === "" || nom.trim() === "" || email.trim() === "" || mdp.trim() === "" || isChecked === false  ) {
        		  setErrorMessage("Merci de ne pas laisser de champ vide.")
              }else{   
                if (prenom.length <= 255 && nom.length <= 255 && email.length <= 255 && mdp.length >= 8 && email != validRegex){

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
                } else {
                setErrorMessage("Erreur de saisie")
              }
            }
        }
        
          const showMdp = (e) => {
                e.preventDefault()
                setShowmdp(!showmdp)
            }
        
    return (
        
            <React.Fragment>
            <h1>Inscription</h1>
            
              <div className="center">
                <form className="formulaire">
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
                          <p>minimum 8 caratcteres</p>
                        <input type={showmdp ? "text" : "password"} placeholder="MOT DE PASSE :" name="mdp" minLength="8" maxLength="255" value={mdp} onChange={(e) => setMdp(e.target.value)} required /> 
                     
                     </div>
                    </label>
                  
                       <button className="button_look"  onClick={showMdp} > {showmdp ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button>
                       <div>
                          <input type="submit" onClick={submit} value="Envoyer" />
                    </div>
                     
                      <label >
                       
                          <input type="checkbox"  className="checkbox" value={isChecked} onChange={handleOnChange} />  Lire et accepter les <NavLink to="/MentionsLegales" target="_blank"><u>Mentions Légales</u></NavLink>
                      
                    </label> 
             
                      <label>
                        Dejà membre ?  <NavLink to='/Connexion'><u>  Connectez vous ici.</u></NavLink>
                      </label>
               
                     
                   <h3>{errorMessage}</h3>
                   
                </form> 
                </div>
            </React.Fragment>
     
    )
}

export default Inscription