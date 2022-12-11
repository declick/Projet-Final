
import React from "react"
import axios from 'axios'
import { BASE_URL } from '../config.js'
import { NavLink } from "react-router-dom"

const AdminUsers = () => {

    const [user, setUser] = React.useState([])

    // Affichage User
    React.useEffect(() => {

        axios.get(`${BASE_URL}/AdminUsers`)

            .then((res) => {
                setUser(res.data.SQL)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    // Suppression User
    const handleDelete = (e, id) => {
        e.preventDefault()

        axios.post(`${BASE_URL}/AdminUsers/${id}`)

            .then((res) => {
                setUser(user.filter((user) => {
                    return user.id !== id
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (

        <React.Fragment>

            <div className="container">

                <div className="text_intro">
                    <h1 className="title"><u>Administration Utilisateur</u></h1>
                    <NavLink to="/Admin">RETOUR</NavLink>
                </div>

                <div className="container_home">

                    {user.map((e, i) => {
                        return (

                            <div className="card" key={i}>

                                <h3>{e.prenom}</h3>
                                <h3>{e.nom}</h3>
                                <h3>{e.email}</h3>
                                <h3>{e.registration_date}</h3>
                                <button type='submit' id="" onClick={(el) => handleDelete(el, e.id)} value='supprimer'>supprimer</button>
                            </div>
                        )
                    })}

                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminUsers