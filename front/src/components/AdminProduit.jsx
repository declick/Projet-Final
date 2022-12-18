//import de module

import { useContext } from "react"
import React from "react"
import axios from 'axios'
import { BASE_URL, BASE_IMG } from '../config.js'
import { NavLink } from "react-router-dom"

const AdminProduit = () => {

    const [produit, setProduit] = React.useState([])

    // Affichage Prestation
    React.useEffect(() => {
        // requête HTTP GET à l'URL ${BASE_URL}/AdminProduit pour obtenir les informations sur les produits à partir de la base de données. Ces informations sont affichées dans un tableau HTML.
        axios.get(`${BASE_URL}/AdminProduit`)

            .then((res) => {
                setProduit(res.data.SQL)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    // Suppression Prestation
    // handleDelete qui est appelée lorsqu'un utilisateur clique sur le bouton "supprimer" à côté d'un produit dans le tableau. 
    // Cette fonction envoie une requête HTTP POST à l'URL ${BASE_URL}/AdminProduit/${id} avec l'ID du produit à supprimer, puis met à jour le tableau en enlevant le produit qui vient d'être supprimé.
    const handleDelete = (e, id) => {
        e.preventDefault()

        axios.post(`${BASE_URL}/AdminProduit/${id}`)

            .then((res) => {
                setProduit(produit.filter((produit) => {
                    return produit.id !== id
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (

        <React.Fragment>

            <div className="container">

                <div>
                    <h1 className="title"><u>Administration Produit</u></h1>
                    <NavLink className="lien_admin" to="/AddProduit"> -> <u>Ajouter un Produit</u></NavLink>
                </div>
                <NavLink to="/Admin">RETOUR</NavLink>
                <form action='' method="post">

                    <table>
                        <caption>Vos Produits</caption>
                        <thead>
                            <tr><th>Titre</th><th>Image</th><th>Description</th><th>Prix</th></tr>
                        </thead>
                        <tbody>
                            {produit.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{e.title}</td>
                                        <td><img className="img_admin" src={`${BASE_IMG}/${e.image}`} alt="photos produits" /></td>
                                        <td>{e.description}</td>
                                        <td>{e.price} €</td>
                                        <td> <button type='submit' id="" onClick={(el) => handleDelete(el, e.id)} value='supprimer'>supprimer</button></td>
                                        <td> <NavLink className="lien_admin" to={`/EditProduit/${e.id}`}><button className=""> Modifier  </button></NavLink></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </form>
            </div>

        </React.Fragment>
    )
}

export default AdminProduit