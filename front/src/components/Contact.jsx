import React from "react"
import axios from "axios"
import { BASE_URL,config } from '../config.js'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate()
    
    { /* Chaque appel à un crochet obtient un état isolé */ }
    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [text, setText] = React.useState("")
    const [captcha, setCaptcha] = React.useState("") 
    
    const [errorMessage, setErrorMessage] = React.useState("")
    
     const submit = (e) => {
         const data = { 
                prenom,
                nom,
                email,
                text,
                captcha
            }                               
          e.preventDefault()
             if (prenom.trim() === "" || nom.trim() === "" || email.trim() === "" || text.trim() === "" || captcha ==="") {
                setErrorMessage("Merci de compléter correctement le formulaire.")
                }else{
                  if (prenom.length <= 30 && nom.length <= 30 && email.length <= 50 && text.length >= 1 && captcha == 20){
                    setErrorMessage("Merci de compléter correctement le formulaire.")
                      axios.post(`${BASE_URL}/Contact`, data)
                          .then((res) => {
                              if(res.data.response === true) {
                              navigate("/")
                              } else{
                              navigate("/Contact") 
                              console.log(res)
                              }
                          })
                          .catch((err) => {
                          console.log(err)
                          })
                  }
                }
     }

    return(
            <React.Fragment>
            
             <h1>Formulaire de contact</h1>
             
              <div className="center">
                <form>
                    <label>
                      <div>  
                        <input type="text" placeholder="PRENOM :"  maxLength="30" value={prenom} onChange={(e) => setPrenom(e.target.value)} required /> 
                      </div>
                    </label>
                    
                    <label>
                      <div>  
                        <input type="text" placeholder="NOM :" maxLength="30"  value="" value={nom} onChange={(e) => setNom(e.target.value)} required />
                      </div>
                    </label>
                    
                    <label>
                      <div>  
                        <input type="email" placeholder="@EMAIL :" maxLength="50" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                      </div>
                    </label>
                    
                    <label>
                      <div>
                        <textarea type="text" placeholder="ENTREZ VOTRE TEXTE ..." value={text} onChange={(e) => setText(e.target.value)} required /> 
                      </div>
                    </label>
                    
                    <label><p>CAPTCHA : ( 12 + 8 = ? )</p>
                      <div>
                        <input type="number" placeholder="ENTREZ LE RESULTAT :" value={captcha} onChange={(e) => setCaptcha(e.target.value)} required /> 
                       
                      </div>
                    </label>
                   
                    <label>
                        <input type="submit" onClick={submit} value="Envoyer" />
                   </label>
                   <h3>{errorMessage}</h3>
                </form> 
                </div>
             </React.Fragment>

    )
}

export default Contact