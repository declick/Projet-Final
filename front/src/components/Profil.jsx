import React,{useContext,createContext, useEffect, useState} from "react"
import axios from 'axios'
import { BASE_URL,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {CONNEXION, ADMIN, USER} from './config/constance.js'
import { useNavigate} from 'react-router-dom'

const Profil = () => {

    const navigate = useNavigate()
    

    const [state, dispatch] = React.useContext(ReducerContext)
    
    const [profil, setProfil] = React.useState('')

      // Affichage Prestation
    React.useEffect(()=> {
        if(state.user_id){
            axios.get(`${BASE_URL}/Profil/${state.user_id}`)
            
            .then((res) => {
                const data = {
                    prenom:res.data.SQL.prenom,
                    nom:res.data.SQL.nom,
                     email:res.data.SQL.email
                    
                }
                setProfil(data)
              
            })
            .catch((err) => {
                 console.log(err)
            })
        }
    },[state.user_id])
        
    // Update Prestation
    const submitForm = (e) => {
        e.preventDefault()
        const dataFile = new FormData()
        
        dataFile.append('prenom',profil.prenom)
        dataFile.append('nom',profil.nom)
        dataFile.append('email',profil.email)
        dataFile.append('id',state.user_id)

        axios.post(`${BASE_URL}/Profil/${state.user_id}`, dataFile)
        
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
        
       // Suppression User
    const handleDelete = (e,id) => {
    e.preventDefault()

        axios.post(`${BASE_URL}/DeleteProfil/${state.user_id}`)
        
        .then((res) =>{
              console.log(res)
                   setProfil(res.data.DELETE)
                       navigate("/Logout")
                 
        })
        .catch((err)=>{
            console.log(err)
        })
    }

        
    return(
        
        <React.Fragment>
            <h1>Dashboard Utilisateur</h1>
            <div className="center">
            
            { profil && 
            
           <form encType="multipart/form-data" onSubmit={submitForm} action='' method='post'>
                    <label>
                      <div> <input type="text" name="prenom" placeholder="prenom" value={profil.prenom} onChange={(e) => handleChange(e,'prenom')} required /> </div>
                    </label>
                    
                    <label>
                      <div> <input type="text" name="nom" placeholder="nom" value={profil.nom} onChange={(e) => handleChange(e,'nom')} required /> </div>
                    </label>
                    
                     <label>
                      <div> <input type="email" name="email" placeholder="email" value={profil.email} onChange={(e) => handleChange(e,'email')} required /> </div>
                    </label>
    
                    <label>
                          <button type="submit">Modifier le profil</button>
                    </label>
                    
                     <label > 
                          <button type='submit' id="" onClick={(e) => handleDelete(e,state.id)} value='supprimer'>supprimer</button>
                      </label>  
                      
                </form>
            }
            </div>
        </React.Fragment>
    )
}

export default Profil