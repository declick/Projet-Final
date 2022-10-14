import React,{useContext} from "react"
import axios from 'axios'
import { BASE_URL} from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {CONNEXION, ADMIN, USER} from './config/constance.js'
import { useNavigate } from 'react-router-dom'

const Connexion = () => {
   
    const navigate = useNavigate()
   
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
    const [state, dispatch] = useContext(ReducerContext)
    
    const [errorMessage, setErrorMessage] = React.useState("")

        { /*empêcher le comportement par défaut qui aurait dû se manifester lorsqu'une action a eu lieu */ }
    const submit = (e) => {
        e.preventDefault()
        if (email === "" || mdp === "") {
            setErrorMessage("Merci de compléter correctement le formulaire.")
        }else{
            if (email.length > 255){
                setErrorMessage("Merci de compléter correctement le formulaire.")
            } else {
                setErrorMessage("Merci.")
                
                axios.post(`${BASE_URL}/Connexion`,{
                    email,
                    mdp
                })
           
                .then((res) => {
            
                    res.data.response && dispatch({type:CONNEXION})
                    res.data.admin && dispatch({type:ADMIN})
                    res.data.user && dispatch({type:USER})
                    
                    sessionStorage.setItem("nom", res.data.user[0].nom)
                    sessionStorage.setItem("prenom", res.data.user[0].prenom)
                    sessionStorage.setItem("mail", res.data.user[0].email)
        
                    if(res.data.response === true) {
                                navigate("/")
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
            <h1>Connexion</h1>
            <div className="center">
               <form>
                <label>
                  <div> 
                  <input type="email" placeholder="@EMAIL :" maxLength="255" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                  </div>
                </label>
            
                <label>
                  <div>
                  <input type="password" placeholder="MOT DE PASSE :" name="mdp" maxLength="255" value={mdp} onChange={(e) => setMdp(e.target.value)} required /> 
                  </div>
                </label>
                
                <label>
                       <input type="submit" onClick={submit} value="Valider" />
                </label>
                <h3>{errorMessage}</h3>
                </form>
                </div>
            </React.Fragment>
    )
}

export default Connexion
