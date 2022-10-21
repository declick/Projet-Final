// import de modul

import React from 'react'
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import { NavLink } from "react-router-dom"
import {useNavigate}  from 'react-router-dom'

const EditProduit = (req, res) => {
    
      const navigate = useNavigate()
    
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [image, setImage] = React.useState('')
    const [produit, setProduit] = React.useState([])
    const [price, setPrice] = React.useState('')
    
    const submitForm = (e) => {
        e.preventDefault()
        
        const dataFile = new FormData()
        const files = {...e.taget.image.files}

        dataFile.append('title',title)
        dataFile.append('description',description)
        dataFile.append('files', files[0], files[0].name)
        dataFile.append('price',price)
        
        axios.defaults.timeout = 5000
        axios.post(`${BASE_URL}/EditProduit`,dataFile)
        
        .then ((res) =>{
       setProduit(res.data.SQL)
        })
        .catch((err) => {
        })
    }
    
    return(
        <React.Fragment>
            <div className="container_home">
                <div className="container">
                
                    <NavLink to="/Admin">retour</NavLink>
                    <h2><u>Editer un produit</u></h2>
            
                    <form encType="multipart/form-data" onSubmit={submitForm} action='' method='post'>
                        <fieldset>
                             <label>Titre</label>
                             <input type="texte" name="edittitle"  value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Titre de la prestation" />
                             
                            <div> 
                                <label htmlFor='fileUpload'>Image</label>
                                <input type="file" name="editfichier" required />
                            </div> 
                            
                            <div>
                                <label>Prestation</label>
                                <textarea type="texte" name="editprestation" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="votre description ..."></textarea>
                            </div>
                            <div>
                                <label>Prix</label>
                                <input type="number" name="editprice" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="votre prix ..." />
                            </div>
                            <div className="boutton">
                                    <button type="submit">Envoyer le produit</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EditProduit