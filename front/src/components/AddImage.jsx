
import React from "react"
import axios from 'axios'
import { BASE_URL } from '../config.js'

import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"

const AddImage = () => {

    const navigate = useNavigate()

    const [image, setImage] = React.useState('')

    const submitForm = (e) => {
        e.preventDefault()

        const dataFile = new FormData()
        const files = { ...e.target.fichier.files }
        // L'image
        dataFile.append('files', files[0], files[0].name)

        axios.post(`${BASE_URL}/AddImage`, dataFile)

            .then((res) => {
                if (res.data.response === true) {
                    navigate("/Admin")
                } else {
                    navigate("/AddImage")
                    console.log(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <React.Fragment>
            <div className="container_home">
                <div className="container">

                    <NavLink to="/Admin">RETOUR</NavLink>

                    <form encType="multipart/form-data" onSubmit={submitForm} action='' method='post'>
                        <fieldset>

                            <div>
                                <label htmlFor='fileUpload'>Image</label>
                                <input type="file" name="fichier" required />
                            </div>

                            <button type="submit">Envoyer l'image</button>

                        </fieldset>
                    </form>

                </div>
            </div>
        </React.Fragment>
    )
}

export default AddImage