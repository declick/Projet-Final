import React,{useContext} from "react"
import axios from 'axios'
import BASE_URL from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {CONNEXION, ADMIN, USER} from './config/constance.js'


const Connexion = () => {
   
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
    const [state, dispatch] = useContext(ReducerContext)
 
        { /*empêcher le comportement par défaut qui aurait dû se manifester lorsqu'une action a eu lieu */ }
        const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/Connexion`,{
            email,
            mdp
        })
        .then((res) => {

            res.data.response && dispatch({type:CONNEXION})
            res.data.admin && dispatch({type:ADMIN})
            res.data.user && dispatch({type:USER})
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return(
        
            <React.Fragment>
                <h1>Connexion</h1>
          
               <form>
                <label>email de connection : 
                  <div>  <input type="email" id='email' placeholder="Entrer votre adress mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> </div> 
                </label>
            
                <label>Mot de passe :
                  <div>  <input type="password" id='mdp' placeholder="Entrer le mot de passe" name="mdp" value={mdp} onChange={(e) => setMdp(e.target.value)} required /> </div>
                </label>
                
                    <button onClick={submit}>Valider</button>
                </form>
               
            </React.Fragment>
    )
}

export default Connexion
