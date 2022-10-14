import React from "react"
import {useContext} from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"

const Prestation = () => {

    const [state, dispatch] = useContext(ReducerContext)
    const [prestation, setPrestation] = React.useState([])

    React.useEffect(()=> {
        axios.defaults.timeout = 5000
        axios.get(`${BASE_URL}/Prestation`, config)
        .then((res) => {
          setPrestation(res.data.SQL)
        })
        .catch((err) => {
        })
        
    },[])
    
        return(
           
         <React.Fragment>
        <div className="container">
        <h2>Extention cils</h2>
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
        </div>

    </div>

        )
           })}
         </div>
          
                 <h2>Mapping sourcils</h2>
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
        </div>

    </div>

        )
           })}
  </div>    </div>
            </React.Fragment>
         ) 
}

export default Prestation