import React,{useContext} from "react"
import axios from 'axios'
import BASE_URL from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {CONNEXION, ADMIN, USER} from './config/constance.js'
import { useNavigate } from 'react-router-dom'


const Connexion = () => {
   
     const navigate = useNavigate()
   
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
    const [state, dispatch] = useContext(ReducerContext)
 
        { /*empêcher le comportement par défaut qui aurait dû se manifester lorsqu'une action a eu lieu */ }
        const submit = (e) => {
        e.preventDefault()
        if (email === "" || mdp === "") {
            console.log("Merci de compléter correctement le formulaire.")
        }else{
        if (email.length <= 255){
        axios.post(`${BASE_URL}/Connexion`,{
            email,
            mdp
        })
        .then((res) => {
            res.data.response && dispatch({type:CONNEXION})
            res.data.admin && dispatch({type:ADMIN})
            res.data.user && dispatch({type:USER})
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
               <form>
                <label>
                  <div><input pattern=".+@gmail.com" type="email" placeholder="@EMAIL :" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> </div> 
                </label>
            
                <label>
                  <div><input type="password" placeholder="MOT DE PASSE :" name="mdp" value={mdp} onChange={(e) => setMdp(e.target.value)} required /> </div>
                </label>
                
                <label>
                       <input type="submit" onClick={submit} value="Valider" />
                </label>
       
                </form>
            </React.Fragment>
    )
}

export default Connexion
