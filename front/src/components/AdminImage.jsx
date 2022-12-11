//import de module

import React from "react"
import axios from 'axios'
import { BASE_URL, BASE_IMG } from '../config.js'
import { NavLink } from "react-router-dom"

const AdminImage = () => {

    const [image, setImage] = React.useState([])

    // Affichage Image
    React.useEffect(() => {

        axios.get(`${BASE_URL}/AdminImage`)

            .then((res) => {
                setImage(res.data.SQL)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    // Suppression Image
    const handleDelete = (e, id) => {
        e.preventDefault()

        axios.post(`${BASE_URL}/AdminImage/${id}`)

            .then((res) => {
                setImage(image.filter((image) => {
                    return image.id !== id
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
                    <h1 className="title"><u>Administration Image</u></h1>
                    <NavLink className="lien_admin" to="/AddImage"> -> <u>Ajouter une Image</u></NavLink>
                </div>
                <NavLink to="/Admin">RETOUR</NavLink>
                <form action='' method="post">

                    <table>
                        <caption>Vos Images</caption>
                        <thead>
                            <tr><th>Image</th></tr>
                        </thead>
                        <tbody>
                            {image.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td><img className="img_admin" src={`${BASE_IMG}/${e.image}`} alt="my little lashes" /></td>
                                        <td> <button type='submit' id="" onClick={(el) => handleDelete(el, e.id)} value='supprimer'>supprimer</button></td>
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

export default AdminImage