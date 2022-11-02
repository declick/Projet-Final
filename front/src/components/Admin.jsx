//import de module

import React from "react"
import NavBarAdmin from "./NavBarAdmin"
import axios from "axios"
import { BASE_URL} from '../config.js'
import {TiMessages } from "react-icons/ti"

const Admin = (req,res) => {
    
    const [contact, setContact] = React.useState([])
    
    React.useEffect(()=> {
        
        axios.get(`${BASE_URL}/Admin`)
        
        .then((res) => {
          setContact(res.data.SQL[0].nb)
        })
        .catch((err) => {
             console.log(err)
        })
        
    },[])
    
    return(
        
        <React.Fragment>
          
            <div className="sidebar">
                <nav className="navigation">
                    <ul>
                       <li><NavBarAdmin /> </li>
                    </ul>
                </nav>
            </div>
            
            <div className="container_intro" >
                <p><TiMessages  className="img_icon"/>
                vous avez <b>{contact}</b> messages</p>
            </div>

        </React.Fragment>
    ) 
}

export default Admin