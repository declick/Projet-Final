import React,{useContext} from "react"
import axios from 'axios'
import { BASE_URL,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {CONNEXION, ADMIN, USER} from './config/constance.js'
import { useNavigate } from 'react-router-dom'

const Profil = () => {

    const navigate = useNavigate()

    const [prenom, setPrenom] = React.useState("")
    const [nom, setNom] = React.useState("")
    const [email, setEmail] = React.useState("")
    
    const [state, dispatch] = useContext(ReducerContext)
    // const [user, setUser] = React.useState([])
     
    let name = sessionStorage.getItem("nom")
    let firstName= sessionStorage.getItem("prenom")
    let mail = sessionStorage.getItem("mail")
    let id = sessionStorage.getItem("id")

    //   // Suppression User
    // const handleDelete =(id) => {
   

    //     axios.default.timeout = 5000
    //     axios.post(`${BASE_URL}/Users/${id}`)
        
    //     .then((res) =>{
    //          setUser(user.filter((user)=>{
    //         return user.id !== id}))
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

        { /*empêcher le comportement par défaut qui aurait dû se manifester lorsqu'une action a eu lieu */ }
        const submit = (e) => {
        e.preventDefault()
        
        let data = {  id,  nom,  prenom,  email }
        if(data.nom.trim() === ""){
            data.nom = name
        }
        if(data.prenom.trim() === ""){
            data.prenom = firstName
        }
        if(data.email.trim() === ""){
            data.email = mail
        }
        axios.default.timeout = 5000
        axios.post(`${BASE_URL}/Profil`, data, config)
        
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
        
    return(
        
        <React.Fragment>
            <h1>Dashboard Utilisateur</h1>
            <div className="center">
               <form>
                    <label>
                      <div> <input type="text" placeholder={name} name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required /> </div>
                    </label>
                    
                    <label>
                      <div> <input type="text" placeholder={firstName} name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required /> </div>
                    </label>
                    
                     <label>
                      <div> <input type="email" placeholder={mail} name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> </div>
                    </label>
    
                    <label>
                           <input type="submit" onClick={submit} value="Modifier" />
                    </label>
                   { /* <label > 
                          <button type='submit' id="" onClick={() => handleDelete(user.id)} value='supprimer'>supprimer</button> 
                     </label>  */}
                </form>
            </div>
        </React.Fragment>
    )
}

export default Profil