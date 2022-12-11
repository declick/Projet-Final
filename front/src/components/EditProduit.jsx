// import de modul

import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../config.js'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const EditProduit = (req, res) => {

    const navigate = useNavigate()

    const params = useParams()
    const [image, setImage] = React.useState('')
    const [produit, setProduit] = React.useState([])
    const [errorMessage, setErrorMessage] = React.useState("")

    // Affichage Produit
    React.useEffect((id) => {

        axios.get(`${BASE_URL}/EditProduit/${params.id}`)

            .then((res) => {
                console.log(res.data)
                setProduit(res.data.SQL)
            })
            .catch((err) => {
            })


    }, [params])

    // Update Prestation
    const submitForm = (e) => {
        e.preventDefault()

        const dataFile = new FormData()
        const files = { ...e.target.fichier.files }
        // input du formulaire
        dataFile.append('title', produit.title)
        dataFile.append('description', produit.description)
        dataFile.append('id', params.id)
        dataFile.append('price', produit.price)
        if (files[0]) {
            // L'image
            dataFile.append('files', files[0], files[0].name)
        }

        // Je verifie qu'un moins un caratctere est saisie dans le texte area et de moins de 500 caracteres  
        if (produit.description >= 1 && produit.description <= 500) {
            setErrorMessage("Il manque un titre, une description ou un prix")
        } else {


            axios.post(`${BASE_URL}/EditProduit/${params.id}`, dataFile)

                .then((res) => {
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

    const handleChange = (e, type) => {
        e.preventDefault()
        const data = { ...produit }
        const value = e.target.value
        data[type] = value
        setProduit(data)
    }

    return (
        <React.Fragment>
            <div className="container_home">
                <div className="container">

                    <NavLink to="/Admin">RETOUR</NavLink>

                    <h2><u>Editer un produit</u></h2>

                    {produit &&

                        <form encType="multipart/form-data" onSubmit={submitForm} action='' method='post'>
                            <fieldset>

                                <div>
                                    <label>Titre</label>
                                    <input type="text" name="title" maxLength="255" value={produit.title || ''} onChange={(e) => handleChange(e, 'title')} />
                                </div>

                                <div>
                                    <label htmlFor='fileUpload'>Image</label>
                                    <input type="file" name="fichier" />
                                </div>

                                <div>
                                    <label>Prestation
                                        <p>maximum 500 caratcteres</p>
                                    </label>
                                    <textarea type="textarea" maxLength="500" name="description" value={produit.description || ''} onChange={(e) => handleChange(e, 'description')}></textarea>
                                </div>

                                <div>
                                    <label>Prix</label>
                                    <input type="number" min="10" max="100" name="price" value={produit.price || ''} onChange={(e) => handleChange(e, 'price')} />
                                </div>
                                <div>
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