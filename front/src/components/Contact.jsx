import React from "react"
import axios from "axios"
import { BASE_URL } from '../config.js'
import { useNavigate } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

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
                  if (prenom.length <= 30 && nom.length <= 30 && email.length <= 50 && text.length >= 1 && text.length <= 500 && captcha === "20" ){
                    setErrorMessage("Message envoyer")
                    
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
                  }else{
                    setErrorMessage("Merci de compléter correctement le formulaire.")
                  }
                }
     }

    return(
      <React.Fragment>
        
         <h1>Formulaire de contact</h1>

        <div className="container_contact">
          
          <div className="center">
            <form className="formulaire">

                <label>
                  <div>  
                    <input type="text" placeholder="PRENOM :"  maxLength="30" value={prenom} onChange={(e) => setPrenom(e.target.value)} required /> 
                  </div>
                </label>
                
                <label>
                  <div>  
                    <input type="text" placeholder="NOM :" maxLength="30" value="" value={nom} onChange={(e) => setNom(e.target.value)} required />
                  </div>
                </label>
                
                <label>
                  <div>  
                    <input type="email" placeholder="@EMAIL :" maxLength="50" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                  </div>
                </label>
                
                <label>
                  <div>
                    <p>maximum 500 caratcteres</p>
                    <textarea type="textarea" maxLength="500" placeholder="ENTREZ VOTRE TEXTE ..." value={text} onChange={(e) => setText(e.target.value)} required /> 
                  </div>
                </label>
                
                <label><p>CAPTCHA : ( 12 + 8 = ? )</p>
                  <div>
                    <input type="number" placeholder="ENTREZ LE RESULTAT :" value={captcha} onChange={(e) => setCaptcha(e.target.value)} required /> 
                  </div>
                </label>
               
                <label>
                    <input type="submit" onClick={submit}  value="Envoyer"  id="submit"  />
                 </label>
               <h3>{errorMessage}</h3>
               
            </form> 
          </div>
                  
          <div className="text_contact"> 
          <h2>Contact info</h2>
          
            <p><AiOutlineMail />cminz@gmail.fr</p>
            
            <p><GoLocation /> 28 Av. Françoise Héritier, 44400 Rezé </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d86809.60439991592!2d-1.607079704137313!3d47.16176865636322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d47.161826999999995!2d-1.5369899999999999!5e0!3m2!1sfr!2sfr!4v1667574124247!5m2!1sfr!2sfr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div> 
                  
      </React.Fragment>

    )
}

export default Contact

 

   
