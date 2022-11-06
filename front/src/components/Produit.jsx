import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG } from '../config.js'

const Produit = () => {

    const [produit, setProduit] = React.useState([])

    React.useEffect(()=> {

        axios.get(`${BASE_URL}/Produit`)
        .then((res) => {
          setProduit(res.data.SQL)
        })
        .catch((err) => {
            console.log(err)
        })
        
    },[])
    
    return(
           
        <React.Fragment>
        
            <div className="container">
                <div className="background">
                    <div className="text_intro">
                        <h1> Nos Produits </h1>
                        <p>Chaque kit contient le nécessaire pour l'entretien de vos extensions ou de votre brow lift.</p> 
                        <p>Choisissez votre kit After Care, et repartez avec lors de votre prochain rendez-vous. <u>(Kit disponible uniquement sur réservation)</u> </p>
                    </div>
                    
                <div className="container_home">

                        { produit.map((e,i)=>{
                            if(e.title === "KIT CIL"){  
                            
                                return ( 
                                
                                <div className="card" key={i}>
                                <h3>{e.title}</h3>
                                        <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="produit" /></div>
                                        <div className="card_body">
                                        
                                        <p> {e.price}  €</p>
                                      
                                                <a href="#popup7"><u>PLUS D'INFORMATION</u></a>
                                            <div id="popup7" className="overlay">
                                            	<div className="popup">
                                            		<h2>KIT CIL</h2>
                                            		<a className="close" href="#7">&times;</a>
                                            		<div className="content">
                                            			<p>{e.description}</p>
                                            		</div>
                                            	</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    
                    {produit.map((e,i)=>{
                        if(e.title === "KIT SOURCIL"){
                            return ( 
                           
                                <div className="card" key={i}>
                                <h3>{e.title}</h3>
                                        <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="produit" /></div>
                                        <div className="card_body">
                                       
                                        <p> {e.price}  €</p>
                                                <a href="#popup8"><u>PLUS D'INFORMATION</u></a>
                                            <div id="popup8" className="overlay">
                                            	<div className="popup">
                                            		<h2>KIT SOURCIL</h2>
                                            		<a className="close" href="#8">&times;</a>
                                            		<div className="content">
                                            			<p>{e.description}</p>
                                            		</div>
                                            </div>
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

export default Produit