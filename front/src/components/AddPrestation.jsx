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
        const [text, setText] = React.useState("")
    
    const [errorMessage, setErrorMessage] = React.useState("")
    
    const submitForm = (e) => {
        e.preventDefault()

        const dataFile = new FormData()
        const files = {...e.target.fichier.files}
        // Ajouter d'input au formulaire
        dataFile.append('categorie_id',categories_id)
        dataFile.append('title',title)
        dataFile.append('description',description)
        // L'image
        dataFile.append('files', files[0], files[0].name)
        // Je verifie si les champs sont vides ou de la bonne longueur
        if (categories_id === '' || description === '' || description >= 1 || description <= 500 || title <= 255 || title >= 1 ) {
        setErrorMessage("erreur de saisie")
        }else{
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
                
                 <NavLink to="/Admin">RETOUR</NavLink>
                 
                    <form encType="multipart/form-data" onSubmit={submitForm} action='' method='post'>
                        <fieldset>
                        
                        <div>
                            <label>Titre</label>
                             
                            <input type="texte" name="title" maxLength="255" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Titre de la prestation" />
                            </div>
                            <div>
                             <label htmlFor='fileUpload'>Image</label>
                             <input type="file" name="fichier" required />
                        </div>   
                            <div>    
                                <label htmlFor="prestation">Choisie une categorie</label>
                                    <select name="categories_id" value={categories_id} onChange={(e)=>setCategories_id(e.target.value)}>
                                        <option value="">--Merci de choisir une categorie---</option>
                                        <option value="1">Extension cil à cil</option>
                                        <option value="2">Extension mixte</option>
                                        <option value="3">Extension volume</option>
                                        <option value="4">Extension effet wet</option>
                                        <option value="5">Rehaussement de cil</option>
                                        <option value="6">Brow lift</option>
                                    </select>  
                            </div>     
                                <div>     
                                    <label htmlFor="msg">Prestation
                                      <p>maximum 500 caratcteres</p>
                                      </label>
                                    <textarea type="textarea" maxLength="500" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="votre description ..."></textarea>
                                </div>            
                                    <div>
                                        <button type="submit">Envoyer la prestation</button>
                           
                            <h3>{errorMessage}</h3>
                                    </div>
                        </fieldset>
                    </form>
                    
                </div>
            </div>
        </React.Fragment>
        )
}

export default AddPrestation