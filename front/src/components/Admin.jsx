//import de module

import {useContext} from "react"
import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import { NavLink } from "react-router-dom"
import NavBarAdmin from "./NavBarAdmin"
import {PRESTATION} from './config/constance.js'

const AdminPrestation= () => {

        const [prestation, setPrestation] = React.useState([])
        const [state, dispatch] = useContext(ReducerContext)
        
        React.useEffect(()=> {
            axios.defaults.timeout = 5000
            axios.get(`${BASE_URL}/Prestation`)
            
            .then((res) => {
                setPrestation(res.data.SQL)
            })
            .catch((err) => {
                console.log(err)
            })
        },[])
        
        
        const handleDelete =(e,id) => {
        e.preventDefault()
 
            axios.default.timeout = 5000
            axios.post(`${BASE_URL}/Admin/${id}`)
            
            .then((res) =>{
                const setPrestation = res.data.DELETE
                res.data.DELETE && dispatch({type:PRESTATION})
                console.log(setPrestation)
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
                
                <form className="array_admin" action='' method="post">
                    <table>
                        <tbody>
                            <tr>
                              <td><h3>Titre</h3></td>
                              <td><h3>Images</h3></td>
                              <td><h3>Description</h3></td>
                            </tr>
                                
                            {prestation[0] && prestation.map((e,i)=>{
                             
                                return(
                    
                                    <tr key={i}>
                                      <td>{e.title}</td>
                                      <td><img className="img_admin" src={`${BASE_IMG}/${e.image}`} alt={"image"} /></td>
                                      <td>{e.description}</td>
                                       
                                      <td> 
                                      <button type='submit' id="" onClick={(el) => handleDelete(el,e.id)} value='supprimer'>supprimer</button>
                                      </td>
        
                                      <td>
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