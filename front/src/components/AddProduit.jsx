import { useContext } from "react"
import React from "react"
import axios from 'axios'
import { BASE_URL, BASE_IMG, config } from '../config.js'
import { ReducerContext } from "./reducer/reducer"
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"
// AddProduit" affiche un formulaire permettant à l'utilisateur de saisir un titre, une image, une description et un prix d'un produit. 
const AddProduit = () => {

    const navigate = useNavigate()

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [image, setImage] = React.useState('')
    const [price, setPrice] = React.useState('')

    const [errorMessage, setErrorMessage] = React.useState("")

    const submitForm = (e) => {
        e.preventDefault()

        const dataFile = new FormData()
        const files = { ...e.target.fichier.files }
        // Ajouter d'input au formulaire
        dataFile.append('title', title)
        dataFile.append('description', description)
        // L'image
        dataFile.append('files', files[0], files[0].name)
        dataFile.append('price', price)
        // Je verifie si les champs sont vides
        if (title === "" || description === "" || price === "" || description >= 1 || description <= 500) {
            // Si le titre, la description ou le prix est vide ou si la description dépasse 500 caractères, un message d'erreur est affiché à l'utilisateur.
            setErrorMessage("Il manque un titre, une description ou un prix")
        } else {
            //// Lorsque l'utilisateur soumet le formulaire, ces données sont envoyées via une requête HTTP POST à l'URL spécifiée dans l'axios.post() avec une instance de FormData qui contient les données du formulaire.
            axios.post(`${BASE_URL}/AddProduit`, dataFile)

                .then((res) => {
                    if (res.data.response === true) {
                        // Si la requête réussie, l'utilisateur est redirigé vers la page "Admin"
                        navigate("/Admin")
                    } else {
                        // Sinon, l'utilisateur reste sur la page "AddProduit" et une erreur est affichée dans la console.
                        navigate("/AddProduit")
                        console.log(res)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <React.Fragment>
            <div className="container_home">
                <div className="container">

                    <NavLink to="/Admin">RETOUR</NavLink>

                    <form encType="multipart/form-data" onSubmit={submitForm} action='' method='post'>
                        <fieldset>

                            <div>
                                <label>Titre</label>
                                <input type="texte" name="title" maxLength="255" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre de la prestation" />
                            </div>

                            <div>
                                <label htmlFor='fileUpload'>Image</label>
                                <input type="file" name="fichier" required />
                            </div>

                            <div>
                                <label>Prestation
                                    <p>maximum 500 caratcteres</p>
                                </label>
                                <textarea type="textarea" maxLength="500" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="votre description ..."></textarea>
                            </div>
                            <div>
                                <label>Prix</label>
                                <input type="number" min="10" max="100" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="votre prix ..." />
                            </div>
                            <div>
                                <button type="submit">Envoyer le produit</button>
                                <h3>{errorMessage}</h3>
                            </div>
                        </fieldset>
                    </form>

                </div>
            </div>
        </React.Fragment>
    )
}

export default AddProduit