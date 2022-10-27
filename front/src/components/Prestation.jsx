import React from "react"
import {useContext} from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import TopScroll from "./TopScroll"

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
            <TopScroll />
                <div className="container">
                    <div className="background">
                    
                    <div className="text_intro">
                 <h2> Extensions des cils </h2>
                <p>L'indispensable pour l'entrtiens de vos extensions et/ou de votre</p>
                <p>brow lift, afin de conserver un resultat optimal le plus longtemps</p>
                <p>possible !!!</p>
             </div>   
                   
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
                                            <div className="card_excerpt ">
                                            <p>{e.description}</p>
                                            </div>
                                        </div>
                                </div>
                            )}
                        })}
                           
                         </div>
                    </div>
                </div>
          
                <div className="container">
                    <div className="background">
                     <div className="text_intro">
                  <h2> Rehaussement de cils </h2>
                <p>L'indispensable pour l'entrtiens de vos extensions et/ou de votre</p>
                <p>brow lift, afin de conserver un resultat optimal le plus longtemps</p>
                <p>possible !!!</p>
             </div>   

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
                </div>
                
                <div className="container">
                    <div className="background">
                    
                     <div className="text_intro">
                   <h2> Sourcils et brow lift </h2>
                <p>L'indispensable pour l'entrtiens de vos extensions et/ou de votre</p>
                <p>brow lift, afin de conserver un resultat optimal le plus longtemps</p>
                <p>possible !!!</p>
             </div>   

                    
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
                </div>
            </React.Fragment>
         ) 
}

export default Prestation