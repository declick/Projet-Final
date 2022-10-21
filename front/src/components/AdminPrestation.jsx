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
            axios.defaults.timeout = 5000
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
 
            axios.default.timeout = 5000
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
        
        <React .Fragment>
        
        <div className="container_admin">
       
            <div className="container">
            
               <div>
                <h2 className="title"><u>Administration Prestation</u></h2>
                <NavLink className="lien_admin" to="/AddPrestation"> -> <u>Ajouter une Prestation</u></NavLink>
                </div>
                 <NavLink to="/Admin">retour</NavLink>
                <form className="array_admin" action='' method="post">
                    <table>
                        <tbody>
                            <tr>
                              <td><h3>Categorie</h3></td>
                              <td><h3>Titre</h3></td>
                              <td><h3>Images</h3></td>
                              <td><h3>Description</h3></td>
                           
                            
                            </tr>
                                
                            {prestation[0] && prestation.map((e,i)=>{
                             
                                return(
                    
                                    <tr key={i}>
                                      <td>{e.catetitle}</td>
                                      <td>{e.title}</td>
                                      <td><img className="img_admin" src={`${BASE_IMG}/${e.image}`} alt={"image"} /></td>
                                      <td>{e.description}</td>
                                      <td> 
                                      <button type='submit' id="" onClick={(el) => handleDelete(el,e.id)} value='supprimer'>supprimer</button>

                                      <NavLink className="lien_admin" to="/EditPrestation"><button className="button"> Modifier  </button></NavLink>
                                      </td>
                                    </tr>
                                )
                           })}
                           
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
       
        {/*<NavBarAdmin />
        {pathName === "/Prestation" && <AdminPrestation />} */}

        </React.Fragment>
    ) 
}

export default AdminPrestation