
import React from "react"
import axios from 'axios'
import { BASE_URL} from '../config.js'
import { NavLink } from "react-router-dom"

const AdminMessage = () => {
    
    const [message, setMessage] = React.useState([])
    
    // Affichage Message
    React.useEffect(()=> {
        
        axios.get(`${BASE_URL}/AdminMessage`)
        
        .then((res) => {
          setMessage(res.data.SQL)
        })
        .catch((err) => {
        })
        
    },[])
    
    // Suppression Message
    const handleDelete =(e,id) => {
    e.preventDefault()

        axios.post(`${BASE_URL}/AdminMessage/${id}`)
        
        .then((res) =>{
             setMessage(message.filter((message)=>{
            return message.id !== id}))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
        
    return(
           
        <React.Fragment>
            <div className="container">
                <div className="container_home">
                    <NavLink to="/Admin">retour</NavLink>
                    
                   {message.map((e,i)=>{
                   
                        return(
                
                          <div className="card"  key={i}>
                                    <h3>{e.prenom}</h3>
                                    <h3>{e.nom}</h3>
                                    <h3>{e.email}</h3>
                                    <h3>{e.text}</h3>
                                    <h3>{e.registration_date}</h3>
                                <button type='submit' id="" onClick={(el) => handleDelete(el,e.id)} value='supprimer'>supprimer</button>
                         </div>
                        )
                    })}
                    
                </div>
            </div>
        </React.Fragment>
    ) 
}

export default AdminMessage