import React,{useContext} from "react"
import axios from 'axios'
import { BASE_URL,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {CONNEXION, ADMIN, USER} from './config/constance.js'
import { useNavigate,useParams } from 'react-router-dom'

const Profil = () => {

    const navigate = useNavigate()
    
    const params = useParams()
    
    const [prenom, setPrenom] = React.useState('')
    const [nom, setNom] = React.useState('')
    const [user, setUser] = React.useState('')
    const [profil, setProfil] = React.useState('')

      // Affichage Prestation
    React.useEffect((id)=> {
        
        axios.defaults.timeout = 5000
        axios.get(`${BASE_URL}/Profil/${params.id}`)
        
        .then((res) => {
            console.log(res.data)
          setUser(res.data.SQL)
        })
        .catch((err) => {
        })
        
        
    },[params])
        
    // Update Prestation
    const submitForm = (e) => {
        e.preventDefault()
        const dataFile = new FormData()
        
        dataFile.append('prenom',profil.prenom)
        dataFile.append('nom',profil.nom)
        dataFile.append('email',profil.email)
        dataFile.append('id',params.id)

        axios.post(`${BASE_URL}/Profil/${params.id}`, dataFile)
        
        .then ((res) =>{
            console.log(res)
            if (res.data.response === true) {
                 navigate("/")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const handleChange = (e,type) => {
        e.preventDefault()
        const data = {...profil}
        const value = e.target.value
        data[type] = value
        setProfil(data)
    }    
        
    // Suppression le user
    //const handleDelete =(e,id) => {
    // e.preventDefault()

    //     axios.default.timeout = 5000
    //     axios.post(`${BASE_URL}/Profil/${id}`)
        
    //     .then((res) =>{
    //          setUser(user.filter((user)=>{
    //         return user.id !== id}))
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    //}

        
    return(
        
        <React.Fragment>
            <h1>Dashboard Utilisateur</h1>
            <div className="center">
            
            { user && 
            
           <form>
                    <label>
                      <div> <input type="text" name="prenom" placeholder="prenom" value={user.prenom} onChange={(e) => handleChange(e,'prenom')} required /> </div>
                    </label>
                    
                    <label>
                      <div> <input type="text" name="nom" placeholder="nom" value={user.nom} onChange={(e) => handleChange(e,'nom')} required /> </div>
                    </label>
                    
                     <label>
                      <div> <input type="email" name="email" placeholder="email" value={user.email} onChange={(e) => handleChange(e,'email')} required /> </div>
                    </label>
    
                    <label>
                          <button type="submit">Modifier le profil</button>
                    </label>
                    {/* <label > 
                          <button type='submit' id="" onClick={(e) => handleDelete(e.id)} value='supprimer'>supprimer</button>
                      </label> */} 
                </form>
            }
            </div>
        </React.Fragment>
    )
}

export default Profil