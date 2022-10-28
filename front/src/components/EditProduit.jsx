// import de modul

import React from 'react'
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import { NavLink,useNavigate, useParams}  from 'react-router-dom'

const EditProduit = (req, res) => {
    
    const navigate = useNavigate()
    
    const params = useParams()
    const [image, setImage] = React.useState('')
    const [produit, setProduit] = React.useState([])
    
            // Affichage Produit
    React.useEffect((id)=> {
    
        axios.get(`${BASE_URL}/EditProduit/${params.id}`)
        
        .then((res) => {
            console.log(res.data)
          setProduit(res.data.SQL)
        })
        .catch((err) => {
        })
        
        
    },[params])
    
    // Update Prestation
    const submitForm = (e) => {
        e.preventDefault()
        const dataFile = new FormData()
        const files = {...e.target.fichier.files}

        dataFile.append('title',produit.title)
        dataFile.append('description',produit.description)
        dataFile.append('id',params.id)
        dataFile.append('price',produit.price)
        if(files[0]){
            dataFile.append('files', files[0], files[0].name)
        }
        
        axios.post(`${BASE_URL}/EditProduit/${params.id}`, dataFile)
        
        .then ((res) =>{
            console.log(res)
            if (res.data.response === true) {
                 navigate("/Admin")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const handleChange = (e,type) => {
        e.preventDefault()
        const data = {...produit}
        const value = e.target.value
        data[type] = value
        setProduit(data)
    }
    
    return(
        <React.Fragment>
            <div className="container_home">
                <div className="container">
                
                    <NavLink to="/Admin">retour</NavLink>
                    <h2><u>Editer un produit</u></h2>
                    { produit.title &&
                    <form encType="multipart/form-data" onSubmit={submitForm} action='' method='post'>
                        <fieldset>
                             <label>Titre</label>
                             <input type="texte" name="title"  value={produit.title} onChange={(e)=>handleChange(e,'title')} placeholder="Titre de la prestation" />
                             
                            <div> 
                                <label htmlFor='fileUpload'>Image</label>
                                <input type="file" name="fichier" />
                            </div> 
                            
                            <div>
                                <label>Prestation</label>
                                <textarea type="texte" name="description" value={produit.description} onChange={(e)=>handleChange(e,'description')} placeholder="votre description ..."></textarea>
                            </div>
                            <div>
                                <label>Prix</label>
                                <input type="number" name="price" value={produit.price} onChange={(e)=>handleChange(e,'price')} placeholder="votre prix ..." />
                            </div>
                            <div className="boutton">
                                    <button type="submit">Envoyer le produit</button>
                            </div>
                        </fieldset>
                    </form>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default EditProduit