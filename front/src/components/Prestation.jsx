import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG} from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import { NavLink } from "react-router-dom"

const Prestation = () => {

    const [prestation, setPrestation] = React.useState([])
     const [state, dispatch] = React.useContext(ReducerContext)
     
    React.useEffect(()=> {
        
        axios.get(`${BASE_URL}/Prestation`)
        .then((res) => {
          setPrestation(res.data.SQL)
        })
        .catch((err) => {
            console.log(err)
        })
        
    },[])
    
        return(
           
            <React.Fragment>
              
                <div className="container">
                      <div className="background_slide_prestation">
                        <div className="text_intro">
                             <h2> Extension cil à cil </h2>
                            <p>Je souhaite un rendu naturel avec un effet "mascara".</p>
                        </div>   
                   
                        <div className="container_home">
    
                            {prestation.map((e,i) => {
                                if(e.cate_title === "Extension cil à cil"){  
                                
                                    return ( 
                                    
                                    <div className="card" key={i}>
                                        <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Extension cil à cil" /></div>
                                            <div className="card_body">
                                                    <a href="#popup1" aria-label="popup"><u>PLUS D'INFORMATION</u></a>
                                                <div id="popup1" className="overlay">
                                                	<div className="popup">
                                                		<h2>Extension cil à cil</h2>
                                                		<a className="close" href="#1" aria-label="popup">&times;</a>
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
                            <div className="container_prestation">
                                <div className="text_prestation">
                                    <p>Cil à Cil</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Tarif: 70 €</p>
                                    <p>Environ 2H15</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Remplissage à prevoir: 3 semaines</p>
                                </div>
                                {!state.connexion && 
                                    <NavLink to="/Inscription"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                }
                                {state.connexion && (
                                    <NavLink to="/Reserver"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                )}
                            </div>
                        </div>
                      </div>
                        
                        <div className="text_intro">
                             <h2> Extension mixte </h2>
                            <p>Je souhaite un rendu un peu plus fourni en soulignant mon regard de façon naturel. </p>
                        </div>   
                   
                        <div className="container_home">
    
                            {prestation.map((e,i) => {
                                if(e.cate_title === "Extension mixte"){  
                                
                                    return ( 
                                    
                                    <div className="card" key={i}>
                                                <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Extension mixte" /></div>
                                            <div className="card_body">
                                                    <a href="#popup2" aria-label="popup" ><u>PLUS D'INFORMATION</u></a>
                                                <div id="popup2" className="overlay">
                                                	<div className="popup">
                                                		<h2>Extension mixte</h2>
                                                		<a className="close" href="#2" aria-label="popup">&times;</a>
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
                            <div className="container_prestation">
                                <div className="text_prestation">
                                    <p>Mixte</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Tarif: 80 €</p>
                                    <p>Environ 2H45</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Remplissage à prevoir: 3 semaines</p>
                                </div>
                                {!state.connexion && 
                                    <NavLink to="/Inscription"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                }
                                {state.connexion && (
                                    <NavLink to="/Reserver"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                )}
                            </div>
                        </div>  
                        
                        <div className="background_slide_prestation">
                        <div className="text_intro">
                             <h2> Extension volume</h2>
                            <p>Je souhaite un regard glamour et j' opte pour un effet plus sophistiqué. </p>
                        </div>   
                   
                        <div className="container_home">
    
                            {prestation.map((e,i) => {
                                if(e.cate_title === "Extension volume"){  
                                
                                    return ( 
                                    
                                    <div className="card" key={i}>
                                            <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Extension volume" /></div>
                                            <div className="card_body">
                                            
                                                    <a href="#popup3" aria-label="popup"><u>PLUS D'INFORMATION</u></a>
                                                    
                                                <div id="popup3" className="overlay">
                                                	<div className="popup">
                                                		<h2>Extension volume</h2>
                                                		<a className="close" href="#3" aria-label="popup">&times;</a>
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
                            <div className="container_prestation">
                                <div className="text_prestation">
                                    <p>Volume</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Tarif: Des 85 €</p>
                                    <p>Environ 3H</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Remplissage à prevoir: 3 semaines</p>
                                </div>
                                {!state.connexion && 
                                    <NavLink to="/Inscription"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                }
                                {state.connexion && (
                                    <NavLink to="/Reserver"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                )}
                            </div>
                        </div> 
                        </div> 
                   
                        <div className="text_intro">
                             <h2> Extension effet wet </h2>
                            <p>Je souhaite un regard effet "mouillé" avec un effet plus ou moins soutenu. </p>
                        </div>  
                        
                        <div className="container_home">
                    
                            {prestation.map((e,i) => {
                                if(e.cate_title === "Extension effet wet"){  
                                
                                    return ( 
                                     
                                    <div className="card" key={i}>
                                    <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Extension effet wet" /></div>
                                            <div className="card_body">
                                                    <a href="#popup4" aria-label="popup"><u>PLUS D'INFORMATION</u></a>
                                                <div id="popup4" className="overlay">
                                                	<div className="popup">
                                                		<h2>Extension effet wet</h2>
                                                		<a className="close" href="#4" aria-label="popup">&times;</a>
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
                            <div className="container_prestation">
                                <div className="text_prestation">
                                    <p>Effet wet</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Tarif: 85 €</p>
                                    <p>Environ 2H15</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Remplissage à prevoir: 3 semaines</p>
                                </div>
                                {!state.connexion && 
                                    <NavLink to="/Inscription" ><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                }
                                {state.connexion && (
                                    <NavLink to="/Reserver"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                )}
                            </div>
                    </div>
                        
                         <div className="background_slide_prestation">
                        <div className="text_intro">
                             <h2> Rehaussement de cil</h2>
                            <p>Je souhaite ouvrir mon regard sans contrainte, effet naturel garanti. </p>
                        </div>   
                   
                        <div className="container_home">
    
                            {prestation.map((e,i) => {
                                if(e.cate_title === "Rehaussement de cil"){  
                                
                                    return ( 
                                    
                                    <div className="card" key={i}>
                                     <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Rehaussement de cil" /></div>
                                            <div className="card_body">
                                                    <a href="#popup5" aria-label="popup"><u>PLUS D'INFORMATION</u></a>
                                                <div id="popup5" className="overlay">
                                                	<div className="popup">
                                                		<h2>Rehaussement de cil</h2>
                                                		<a className="close" href="#5">&times;</a>
                                                		<div className="content" aria-label="popup">
                                                			<p>{e.description}</p>
                                                		</div>
                                                	</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                            <div className="container_prestation">
                                <div className="text_prestation">
                                    <p>Rehaussement de cil</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Tarif: Des 40 €</p>
                                    <p>Environ 1H15</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Tenue: 6 à 8 semaines</p>
                                </div>
                                {!state.connexion && 
                                    <NavLink to="/Inscription"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                }
                                {state.connexion && (
                                    <NavLink to="/Reserver"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                )}
                            </div>
                        </div>
                        </div>
                        
                        <div className="text_intro">
                             <h2> Brow lift </h2>
                            <p>Je souhaite avoir des sourcils disciplinés, j'opte pour un effet structuré. </p>
                        </div>  
                        
                        <div className="container_home">
                    
                            {prestation.map((e,i) => {
                                if(e.cate_title === "Brow lift"){  
                                
                                    return ( 
                                     
                                    <div className="card" key={i}>
                                    <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Brow lift" /></div>
                                            <div className="card_body">
                                                    <a href="#popup6" aria-label="popup"><u>PLUS D'INFORMATION</u></a>
                                                <div id="popup6" className="overlay">
                                                	<div className="popup">
                                                		<h2>Brow lift</h2>
                                                		<a className="close" href="#6" aria-label="popup">&times;</a>
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
                            <div className="container_prestation">
                                <div className="text_prestation">
                                    <p>Brow lift</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Tarif: Des 40€</p>
                                    <p>Environ 1H10</p>
                                </div>
                                <div className="text_prestation">
                                    <p>Tenue: 3 à 4 semaines</p>
                                </div>
                                {!state.connexion && 
                                    <NavLink to="/Inscription"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                }
                                {state.connexion && (
                                    <NavLink to="/Reserver"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                )}
                            </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
}

export default Prestation