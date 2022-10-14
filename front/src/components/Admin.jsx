//import de modul

import {useContext} from "react"
import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import { NavLink } from "react-router-dom"

const AdminPrestationController = () => {

    const [prestation, setPrestation] = React.useState([])
    const [state, dispatch] = useContext(ReducerContext)
    
     React.useEffect(()=> {
        axios.defaults.timeout = 5000
        axios.get(`${BASE_URL}/Prestation`,config)
        .then((res) => {
          setPrestation(res.data.SQL)
        })
        .catch((err) => {
        })
    },[])
 
     return(
         <React .Fragment>
           <div className="container">
             <div className="container_home">
             
            <div>
            <h2 className="title"><u>Administration Prestation</u></h2>
            <NavLink className="lien_admin" to="/AddPrestation"> -> <u>Ajouter une Prestation</u></NavLink>
          
                <form className="array_admin" action='' method="post">
                    <table>
                      <tbody>
                            <tr>
                              <td><h3>Titre</h3></td>
                              <td><h3>Images</h3></td>
                              <td><h3>Description</h3></td>
                            </tr>
                            
                        {prestation.map((e,i)=>{
                         
                        return(
                
                            <tr key={i}>
                              <td>{e.title}</td>
                              <td><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></td>
                              <td>{e.description}</td>
                               
                              <td> <button type='submit' name={e} value='supprimer'>supprimer</button></td>
                               
                              <td><button className="button"> Modifier  </button></td>
                            </tr>
                             )
                           })}
                           
                      </tbody>
                    </table>
                </form>
         </div>
         </div>  </div>
           
   
        {/*<NavBarAdmin />
        {pathName === "/Prestation" && <AdminPrestation />} */}
        
        
        
    </React.Fragment>
         ) 
}

export default AdminPrestationController