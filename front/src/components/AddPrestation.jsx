import {useContext} from "react"
import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import useNavigate  from 'react-router-dom'

const AddPrestationController = ()=> {
    
    const navigate = useNavigate();
    
    const [categories_id, setCategories_id] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [image, setImage] = React.useState('')
    
    const sumitForm = (e) => {
        e.preventDefault()
        
        const dataFile = new FormData()
        const files = {...e.target.image.files}
        dataFile.append('categories_id',JSON.stringify(categories_id))
        dataFile.append('title',JSON.stringify(title))
        dataFile.append('description',JSON.stringify(description))
         dataFile.append('files', files[0], files[0].name)
         
         axios.defaults.timeout = 5000
         axios.post(`${BASE_URL}/AddPrestation`,dataFile)
         .then ((res)=>{
             if (res.data.response === true) {
                 navigate("/")
             }
         })
          .catch((err)=>{
             })
    }

    return(
        <React.Fragment>
         <a href="/">retour</a>
             <form encType="multipart/form-data" onSubmit={subForm} action='' method='post'>
                 <fieldset>
                     <label>Titre</label>
                     <input name="title" type="texte" placeholder="Titre de la prestation" />
                     <input type="file" name="fichier" />
                     <label HtmlFor="prestation">Choisie une categorie</label>
                     <select name="prestation" id="prestation">
                        <option value="">--Merci de choisir une categorie---</option>
                        <option value="1">Cil</option>
                        <option value="2">sourcil</option>
                     </select>  
                     <div>
                        <label HtmlFor="msg">Prestation</label>
                        <textarea typr="texte" id="prestation" name="prestation" placeholder="votre description ..."></textarea>
                        
                     <div className="boutton">
                        <button type="submit">Envoyer la prestation</button>
                     </div>
                     </div>
                 </fieldset>
             </form>
        </React.Fragment>
        )
    
}