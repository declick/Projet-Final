// import de module

import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../config.js'
import { NavLink, useParams,useNavigate } from "react-router-dom"

const EditPrestation = () => {
    
     const navigate = useNavigate()
    
    const params = useParams()
    const [image, setImage] = React.useState('')
    const [prestation, setPrestation] = React.useState({})
    const [errorMessage, setErrorMessage] = React.useState("")
    
        // Affichage Prestation
    React.useEffect((id)=> {
        
        axios.defaults.timeout = 5000
        axios.get(`${BASE_URL}/EditPrestation/${params.id}`)
        
        .then((res) => {
            console.log(res.data)
          setPrestation(res.data.SQL)
        })
        .catch((err) => {
             console.log(err)
        })
        
    },[params])
   
   // Update Prestation
    const submitForm = (e) => {
        e.preventDefault()

        const dataFile = new FormData()
        const files = {...e.target.fichier.files}
        
        dataFile.append('categorie_id',prestation.categorie_id)
        dataFile.append('title',prestation.title)
        dataFile.append('description',prestation.description)
        dataFile.append('id',params.id)
        if(files[0]){
            
        dataFile.append('files', files[0], files[0].name)
        }
        
         if (prestation.description >= 1 && prestation.description <= 500 ) {
        setErrorMessage("Il manque un titre, une description ou un prix")
        }else{
            
        axios.post(`${BASE_URL}/EditPrestation/${params.id}`, dataFile)
        
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
    }
    
    const handleChange = (e,type) => {
        e.preventDefault()
        const data = {...prestation}
        const value = e.target.value
        data[type] = value
        setPrestation(data)
    }

    return(
        <React.Fragment>
        
            <div className="container_home">
                 <div className="container">
                 
                    <NavLink to="/Admin">RETOUR</NavLink>
                    
                     <h2><u>Editer une prestation</u></h2>
                     
                      {prestation && 
                      
                        <form encType="multipart/form-data" onSubmit={submitForm} action='' method='post'>
                          <fieldset>
                          
                            <div>
                             <label>Titre</label>
                            <input type='text' maxLength="255" name='title' value={prestation.title || ''} onChange={(e)=>handleChange(e,'title')} />
                             </div>
                             
                            <div>
                                <label htmlFor='fileUpload'>Image</label>
                                <input type="file" name="fichier" />
                           </div>
                           
                             <div>
                                <label htmlFor="msg">prestation :
                                <p>maximum 500 caratcteres</p>
                                </label>
                                <textarea name="description" maxLength="500" id="text" type="textarea" rows="5" cols="33" value={prestation.description || ''} onChange={(e)=> handleChange(e,'description')}></textarea>
                            
                             </div>   
                             <div>
                                <label htmlFor="categories">Choisie une categorie:</label>
                                <select name="categorie_id" id="categories_id" value={prestation.categorie_id || ''} onChange ={(e)=>handleChange(e,'categorie_id')}>
                                    <option value="">--Merci de choisir une categorie--</option>
                                    <option value={1}>Extension cil à cil</option>
                                    <option value={2}>Extension mixte</option>
                                    <option value={3}>Extension volume</option>
                                    <option value={4}>Extension effet wet</option>
                                    <option value={5}>Rehaussement de cil</option>
                                    <option value={6}>Brow lift</option>
                                </select>
                               </div>
                                <div>
                                    <button type="submit">Envoyer le message</button>
                                </div>    
                            </fieldset>
                        </form>
                      }
               </div>
            </div>
        </React.Fragment>
    )
}

export default EditPrestation