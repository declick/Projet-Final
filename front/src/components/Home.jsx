import {useContext} from "react"
import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom"

const Home = () => {
    
    const navigate = useNavigate()
    
    const handleClick = (e) => {
        e.preventDefault()
        navigate('/Prestation')
    }
    
    const [state, dispatch] = useContext(ReducerContext)
    const [prestation, setPrestation] = React.useState([])

    React.useEffect(()=> {
        axios.defaults.timeout = 5000
        axios.get(`${BASE_URL}/Home`, config)
        .then((res) => {
          setPrestation(res.data.SQL)
        })
        .catch((err) => {
        })
    },[])
    
        return(
           
            <React.Fragment>
        <div className="container">
        <div className="container_home">
           {prestation.map((e,i)=>{
        return(
        
      <div className="card"  key={i}>
      
        <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
 
        <div className="card_body">
            <div className="card_title">
                <h3>{e.title}</h3>
            </div>
            <div className="card_excerpt">
                <p> {e.description}</p>
            </div>
            <button className="card_button" onClick ={handleClick}>En savoir plus</button>
        </div>

    </div>

        )
           })}
           </div>
           </div>
            </React.Fragment>
         ) 
}

export default Home