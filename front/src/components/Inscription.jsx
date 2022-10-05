import React from "react"
import axios from "axios"
import BASE_URL from '../config.js'
import { useNavigate } from 'react-router-dom'

const Inscription = () => {
    
    const navigate = useNavigate()
     
    { /* Chaque appel à un crochet obtient un état isolé */ }
    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")

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
                		console.log("Merci de compléter correctement le formulaire.")
                }else{
                  if (prenom.length <= 255 && nom.length <= 255 && email.length <= 255){
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
                          console.log(err);
                          })
                  }
                }
        }
        
    return (
        
            <React.Fragment>
            
              <fieldset>
                <form>
                    <label><p>Prenom :</p>
                      <div>  
                        <input type="text" placeholder="Entrer le nom d'utilisateur" name="prenom" maxLength="255" value={prenom} onChange={(e) => setPrenom(e.target.value)} required /> 
                      </div>
                    </label>
                    
                    <label><p>Nom : </p>
                      <div>  
                        <input type="text" placeholder="Entrer le nom d'utilisateur" name="nom" maxLength="255"  value="" value={nom} onChange={(e) => setNom(e.target.value)} required />
                      </div>
                    </label>
                    
                    <label><p>Email : </p>
                      <div>  
                        <input type="email" placeholder="Entrer votre adress mail" name="email" maxLength="255" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                      </div>
                    </label>
                    
                    <label><p>Mot de passe (8 caracteres minimum) :</p>
                      <div>
                        <input type="password" placeholder="Entrer le mot de passe" name="mdp" minLength="8" maxLength="255" value={mdp} onChange={(e) => setMdp(e.target.value)} required /> 
                      </div>
                    </label>
                    
                    <label>
                        <input type="submit" onClick={submit} value="Envoyer" />
                   </label>
                   
                </form> 
              </fieldset>
               
            </React.Fragment>
    )
}

export default Inscription