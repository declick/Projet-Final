import {useContext} from "react"
import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {useNavigate}  from 'react-router-dom'
import { NavLink } from "react-router-dom"

const AddPrestation = ()=> {
    
    const navigate = useNavigate()
    
    const [categories_id, setCategories_id] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [image, setImage] = React.useState('')
    
    const [errorMessage, setErrorMessage] = React.useState("")
    
    const submitForm = (e) => {
        e.preventDefault()
        
         if (categories_id === "" || title === "" || description === "") {
        setErrorMessage("Merci de compléter correctement le formulaire.")
        }else{
         
        const dataFile = new FormData()
        const files = {...e.target.fichier.files}
        
        dataFile.append('categorie_id',categories_id)
        dataFile.append('title',title)
        dataFile.append('description',description)
        dataFile.append('files', files[0], files[0].name)
         

         axios.defaults.timeout = 5000
         axios.post(`${BASE_URL}/AddPrestation`,dataFile)
         
         .then ((res)=>{
             if (res.data.response === true) {
                 navigate("/Admin")
             } else{
                  navigate("/AddPrestation") 
                  console.log(res)
                  
             }
         })
          .catch((err)=>{
              console.log(err)
             })
        }
        
    }

    return(
        <React.Fragment>
        <div className="container_home">
         <div className="container">
         <NavLink to="/Admin">retour</NavLink>
             <form encType="multipart/form-data" onSubmit={submitForm} action='' method='post'>
                 <fieldset>
                     <label>Titre</label>
                     
                     <input type="texte" name="title"  value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Titre de la prestation" />
                     <input type="file" name="fichier" />
                     
                     <label htmlFor="prestation">Choisie une categorie</label>
                     <select name="categories_id" value={categories_id} onChange={(e)=>setCategories_id(e.target.value)}>
                        <option value="">--Merci de choisir une categorie---</option>
                        <option value="1">Cil</option>
                        <option value="2">sourcil</option>
                     </select>  
                     
                     <div>
                        <label htmlFor="msg">Prestation</label>
                        <textarea type="texte" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="votre description ..."></textarea>
                        
                     <div className="boutton">
                        <button type="submit">Envoyer la prestation</button>
                     </div>
                     </div>
                      <h3>{errorMessage}</h3>
                 </fieldset>
             </form>
             </div>
              </div>
        </React.Fragment>
        )
    
}

export default AddPrestation