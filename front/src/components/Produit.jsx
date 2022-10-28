import React from "react"
import {useContext} from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"

const Produit = () => {

    const [state, dispatch] = useContext(ReducerContext)
    const [produit, setProduit] = React.useState([])

    React.useEffect(()=> {

        axios.get(`${BASE_URL}/Produit`)
        .then((res) => {
          setProduit(res.data.SQL)
        })
        .catch((err) => {
        })
        
    },[])
    
        return(
           
            <React.Fragment>
                <div className="container">
                    <div className="background">
                        <div className="text_intro">
                            <h2> Nos Produits </h2>
                            <p>blabalabalabalbblabalabalaba</p>
                            <p>blabalabalabalbblabalabalabal</p>
                        </div>
                        
                    <div className="container_home">
                    
                        {produit.map((e,i)=>{
                            
                                return ( 
                                
                                <div className="card" key={i}>
                                        <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
                                        <div className="card_body">
                                            <div className="card_title">
                                            <h3>{e.title}</h3>
                                            </div>
                                            <div className="card_excerpt">
                                            <p> {e.price}  €</p>
                                            <a href="#popup1">Let me Pop up</a>

                                            <div id="popup1" className="overlay">
                                            	<div className="popup">
                                            		<h2>Here i am</h2>
                                            		<a className="close" href="#">&times;</a>
                                            		<div className="content">
                                            			<p>{e.description}</p>
                                            		</div>
                                            		</div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
 </React.Fragment>

         ) 
}

export default Produit