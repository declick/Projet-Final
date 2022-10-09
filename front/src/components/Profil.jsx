import React,{useContext} from "react"
import axios from 'axios'
import BASE_URL from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {CONNEXION, ADMIN, USER} from './config/constance.js'


const Profil = () => {


    const [prenom, setPrenom] = React.useState("")
    const [nom, setNom] = React.useState("")
    const [email, setEmail] = React.useState("")
    
    const [state, dispatch] = useContext(ReducerContext)
        
    let name = sessionStorage.getItem("nom")
    let firstName= sessionStorage.getItem("prenom")
    let mail = sessionStorage.getItem("mail")
    let id = sessionStorage.getItem("id")
    
        { /*empêcher le comportement par défaut qui aurait dû se manifester lorsqu'une action a eu lieu */ }
        const submit = (e) => {
            
        e.preventDefault()
    
        axios.post(`${BASE_URL}/Profil`,{
            id,
            nom,
            prenom,
            email
        })
        .then((res) => {
            
            res.data.response && dispatch({type:CONNEXION})
            res.data.admin && dispatch({type:ADMIN})
            res.data.user && dispatch({type:USER})
            
            sessionStorage.setItem("nom", res.data.user[0].nom)
            sessionStorage.setItem("prenom", res.data.user[0].prenom)
            sessionStorage.setItem("mail", res.data.user[0].email)
            
        })
            .catch((err) => {
            console.log(err)
            })
    }
        
    return(
        
            <React.Fragment>
               <form>
               
                <label>
                  <div> <input type="text" placeholder={name} name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required /> </div>
                </label>
                
                <label>
                  <div> <input type="text" placeholder={firstName} name="prenom"value={prenom} onChange={(e) => setPrenom(e.target.value)} required /> </div>
                </label>
                
                 <label>
                  <div> <input type="email" placeholder={mail} name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> </div>
                </label>
                
                <label>
                       <input type="submit" onClick={submit} value="Modifier" />
                </label>
       
                </form>
            </React.Fragment>
    )
}

export default Profil