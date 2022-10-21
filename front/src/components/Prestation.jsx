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
        // let data = {id: }
        axios.get(`${BASE_URL}/Prestation`)
        .then((res) => {
          setPrestation(res.data.SQL)
        })
        .catch((err) => {
        })
        
    },[])
    
        return(
           
            <React.Fragment>
                <div className="container">
                
                  <h2> Extensions des cils </h2>
                  
                    <div className="container_home">

                        { prestation.map((e,i)=>{
                            if(e.cate_title === "Extensions des cils"){  
                            
                                return ( 
                                
                                <div className="card" key={i}>
                                        <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
                                        <div className="card_body">
                                            <div className="card_title">
                                            <h3>{e.title}</h3>
                                            </div>
                                            <div rows="5" cols="33" className="card_excerpt ">
                                            <p>{e.description}</p>
                                            </div>
                                        </div>
                                </div>
                            )}
                        })}
                    </div>
                </div>
          
                <div className="container">
                                    
                     <h2> Rehaussement de cils </h2>
                     
                    <div className="container_home">

                        { prestation.map((e,i)=>{
                            if(e.cate_title === "Rehaussement de cils"){  
                            
                                return ( 
                                
                                <div className="card" key={i}>
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
                            )}
                        })}
                    </div>
                </div>
                
                <div className="container">
                                    
                     <h2> Sourcils et brow lift </h2>
                     
                    <div className="container_home">
                     
                        { prestation.map((e,i)=>{
                            if(e.cate_title === "Sourcils et brow lift"){  
                            
                                return ( 
                                
                                <div className="card" key={i}>
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
                            )}
                        })}
                        
                    </div>
                </div>
            </React.Fragment>
         ) 
}

export default Prestation