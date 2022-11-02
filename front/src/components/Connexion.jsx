import React,{useContext} from "react"
import axios from 'axios'
import { BASE_URL} from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {CONNEXION,ADMIN} from './config/constance.js'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"

const Connexion = () => {
   
    const navigate = useNavigate()
   
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
    const [state, dispatch] = useContext(ReducerContext)
    
    const [showmdp, setShowmdp] = React.useState(false)
    
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
            
            const showMdp = (e) => {
                e.preventDefault()
                setShowmdp(!showmdp)
            }
    
    return(
        
            <React.Fragment>
                <h1>Connexion</h1>
            <div className="center">
                   <form className="formulaire">
                   
                      <div> 
                        <input type="email" placeholder="@EMAIL :" maxLength="255" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                      </div>

                      <div>
                          <input type={showmdp ? "text" : "password"} placeholder="MOT DE PASSE :" name="mdp" maxLength="255" value={mdp} onChange={(e) => setMdp(e.target.value)} required /> 
                          </div> <div>
                          <button className="button_look" onClick={showMdp} > {showmdp ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button>
                      </div>

                        <div>
                        <input type="submit" onClick={submit} value="Valider" />
                        </div>
                        
                    <label>
                        Pas encore membre ? <NavLink to='/Inscription'><u>Crée un compte ici.</u></NavLink>
                    </label>
                     
                    <h3>{errorMessage}</h3>
                    
                    </form>
                </div>
            </React.Fragment>
    )
}

export default Connexion
