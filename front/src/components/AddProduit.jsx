import {useContext} from "react"
import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {useNavigate}  from 'react-router-dom'
import { NavLink } from "react-router-dom"

const AddProduit = ()=> {
    
    const navigate = useNavigate()

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [image, setImage] = React.useState('')
    const [price, setPrice] = React.useState('')
    
    const [errorMessage, setErrorMessage] = React.useState("")
    
    const submitForm = (e) => {
        e.preventDefault()

         if (title === "" || description === "" || price === "") {
        setErrorMessage("Il manque un titre, une description ou un prix")
        }else{
         
        const dataFile = new FormData()
        const files = {...e.target.fichier.files}

        dataFile.append('title',title)
        dataFile.append('description',description)
        dataFile.append('files', files[0], files[0].name)
        dataFile.append('price',price)

        //  axios.defaults.timeout = 5000
         axios.post(`${BASE_URL}/AddProduit`,dataFile)
   
         .then((res)=>{
             if (res.data.response === true) {
                 navigate("/Admin")
             } else{
                  navigate("/AddProduit") 
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
                             
                            <div> 
                             <label htmlFor='fileUpload'>Image</label>
                             <input type="file" name="fichier" required />
                            </div> 
                            
                            <div>
                                <label>Prestation</label>
                                <textarea type="texte" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="votre description ..."></textarea>
                            </div>
                            <div>
                                <label>Prix</label>
                                <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="votre prix ..." />
                            </div>
                                <div className="boutton">
                                <button type="submit">Envoyer le produit</button>
                            </div>
                                <h3>{errorMessage}</h3>
                        </fieldset>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
    
}

export default AddProduit