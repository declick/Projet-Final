//import de module

import {useContext} from "react"
import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG } from '../config.js'
import { NavLink } from "react-router-dom"

const AdminPrestation = () => {

        const [prestation, setPrestation] = React.useState([])
        
        // Affichage Prestation
        React.useEffect(()=> {
            axios.get(`${BASE_URL}/AdminPrestation`)
            
            .then((res) => {
                setPrestation(res.data.SQL)
            })
            .catch((err) => {
                console.log(err)
            })
        },[])
        
        // Suppression Prestation
        const handleDelete =(e,id) => {
        e.preventDefault()
 
            axios.post(`${BASE_URL}/AdminPrestation/${id}`)
            
            .then((res) =>{
                setPrestation(prestation.filter((prestation)=>{
                return prestation.id !== id}))
            })
            .catch((err)=>{
                console.log(err)
            })
      
    }
    
    return(
        
        <React.Fragment>

            <div className="container">
            
               <div>
                 <h1 className="title"><u>Administration Prestation</u></h1>
                    <NavLink className="lien_admin" to="/AddPrestation"> -> <u>Ajouter une Prestation</u></NavLink>
                </div>
                
                <NavLink to="/Admin">RETOUR</NavLink>
                    
                <form  action='' method="post">
                    <table>
                        <caption>Vos Prestation</caption>
                    <thead>
                        <tr><th>Categorie</th><th>Titre</th><th>Images</th><th>Description</th></tr>
                    </thead>
                        <tbody>
                            {prestation.map((e,i)=>{
                                return(
                                    <tr key={i}>
                                    <td>{e.catetitle}</td>
                                    <td>{e.title}</td>
                                    <td><img className="img_admin" src={`${BASE_IMG}/${e.image}`} alt={"image"} /></td>
                                    <td>{e.description}</td>
                                    <td> <button type='submit' id="" onClick={(el) => handleDelete(el,e.id)} value='supprimer'>supprimer</button></td>
                                    <td> <NavLink className="lien_admin" to={`/EditPrestation/${e.id}`}><button className=""> Modifier  </button></NavLink></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        </React.Fragment>
    ) 
}

export default AdminPrestation