//import de module

import React from "react"
import NavBarAdmin from "./NavBarAdmin"
import axios from "axios"
import { BASE_URL } from '../config.js'
import { TiMessages } from "react-icons/ti"
import { NavLink } from "react-router-dom"

const Admin = (req, res) => {

    const [contact, setContact] = React.useState([])

    React.useEffect(() => {

        axios.get(`${BASE_URL}/Admin`)

            .then((res) => {
                setContact(res.data.SQL[0].nb)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    return (

        <React.Fragment>

            <div className="sidebar">
 
                <nav className="navigation">
                    <ul> 
                        <li><NavBarAdmin /> </li>
                    </ul>
                </nav>
            </div>

            <div className="container_intro" >
                <NavLink className="lien_admin" to="/AdminMessage"><TiMessages className="img_icon" />
                    <p>vous avez <b>{contact}</b> messages</p></NavLink>
            </div>
        </React.Fragment>
    )
}

export default Admin