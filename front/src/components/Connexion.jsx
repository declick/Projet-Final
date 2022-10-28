import React,{useContext} from "react"
import axios from 'axios'
import { BASE_URL} from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {CONNEXION,ADMIN} from './config/constance.js'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"

const Connexion = () => {
   
    const navigate = useNavigate()
   
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
    const [state, dispatch] = useContext(ReducerContext)
    
    const [errorMessage, setErrorMessage] = React.useState("")

        { /*empêcher le comportement par défaut qui aurait dû se manifester lorsqu'une action a eu lieu */ }
    const submit = (e) => {
        
        const dataUser = {
            email,
            mdp
        }
        
        e.preventDefault()
        
                if (email === "" || mdp === "") {
            setErrorMessage("Merci de compléter correctement le formulaire.")
            }else{
                if (email.length > 255){
                    setErrorMessage("Merci de compléter correctement le formulaire.")
                } else {
                         
                    axios.post(`${BASE_URL}/Connexion`, dataUser)
                    .then((res) => {
                        // si tout ce passe bien :
                        if(res.data.response) {
                            console.log(res.data)
                            localStorage.setItem('jwtToken', res.data.token)
                            axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data.token
                            res.data.user_id && dispatch({type:CONNEXION, payload:res.data.user_id})
                            res.data.admin && dispatch({type:ADMIN})
                            navigate("/")
                        } else {
                            window.alert(res.data.message)
                        }
                    })
                    .catch((err) => {
                        console.log(10)
                        console.log(err)
                    })
                }
            }
    }
            
    
    return(
        
            <React.Fragment>
            <h1>Connexion</h1>
            <div className="center">
               <form className="formulaire">
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
                
                 <label><p>Pas encore membre ? <NavLink to='/Inscription'>Crée un compte ici.</NavLink></p></label>
                 
                <h3>{errorMessage}</h3>
                
                </form>
                </div>
            </React.Fragment>
    )
}

export default Connexion
