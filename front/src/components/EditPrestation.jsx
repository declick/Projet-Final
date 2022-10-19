// import de modul

import React from 'react'
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import { NavLink } from "react-router-dom"
import {useNavigate}  from 'react-router-dom'

const EditPrestation = (req, res) => {
    
      const navigate = useNavigate()
    
    const [categories_id, setCategories_id] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [image, setImage] = React.useState('')
    const [prestation, setPrestation] = React.useState([])
    
    const submitForm = (e) => {
        e.preventDefault()
        
        const dataFile = new FormData()
        const files = {...e.taget.image.files}
        
        dataFile.append('categorie_id',categories_id)
        dataFile.append('title',title)
        dataFile.append('description',description)
        dataFile.append('files', files[0], files[0].name)
        
        axios.defaults.timeout = 5000
        axios.post(`${BASE_URL}/EditPrestation`,dataFile)
        
        .then ((res) =>{
            if (res.data.response === true) {
                 navigate("/Admin")
             } else{
                  navigate("/EditPrestation") 
                  console.log(res)
             }
        })
    }
    
    
    return(
         <React.Fragment>
         <div className="container_home">
         <div className="container">
         <NavLink to="/Admin">retour</NavLink>
            <h2><u>Editer un articles</u></h2>
            
            <form action='' method='post'encType="multipart/form-data" onSubmit={submitForm}  >

                <fieldset>

                    <label>Titre :</label>
                    <input name='edittitle' id='text' value={title} type='text' onChange={(e)=>setTitle(e.target.value)} />
              
                   <div>
                        <label htmlFor="msg">prestation :</label>
                        <textarea name="editprestation" id="text" type="text" value = {description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                        
                         <label htmlFor="categories">Choisie une categorie:</label>
                    <select name="editcategorie" id="categorie" value={categories_id} onChange ={(e)=>setTitle(e.target.value)}>
                        <option value="">--Merci de choisir une categorie--</option>
                        <option value="1">Cil</option>
                        <option value="2">Sourcil</option>
                    </select>
                        
                         <input  type="file" name="fichier" />
                        
                        <div className="button">
                        <button type="submit">Envoyer le message</button>
                        </div>
                    </div>

                </fieldset>

            </form>
            </div>
            </div>
                </React.Fragment>
        )
}

export default EditPrestation