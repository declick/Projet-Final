
import React from "react"
import axios from 'axios'
import { BASE_URL } from '../config.js'
import { NavLink } from "react-router-dom"

const AdminMessage = () => {

    const [message, setMessage] = React.useState([])

    // Affichage Message
    React.useEffect(() => {

        axios.get(`${BASE_URL}/AdminMessage`)

            .then((res) => {
                setMessage(res.data.SQL)
            })
            .catch((err) => {
            })

    }, [])

    // Suppression Message
    const handleDelete = (e, id) => {
        e.preventDefault()

        axios.post(`${BASE_URL}/AdminMessage/${id}`)

            .then((res) => {
                setMessage(message.filter((message) => {
                    return message.id !== id
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (

        <React.Fragment>

            <div className="text_intro">
                <h1 className="title"><u>Administration Message</u></h1>
                <NavLink to="/Admin">RETOUR</NavLink>
            </div>

            <div className="container">
                <div className="container_home">

                    {message.map((e, i) => {
                        return (
                            <div className="card_admin" key={i}>
                              <ul className="card_msg">
                                <li className="entete"><h3>Message de {e.nom} {e.prenom}</h3></li>
                                <li>{e.text}</li>
                                <li>Email : {e.email}</li>
                                <li>Date d'enregistrement : {e.registration_date}</li>
                                <li><button type='submit' id="" onClick={(el) => handleDelete(el, e.id)} value='supprimer'>supprimer</button></li>
                              </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminMessage