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
                
                <div className="tabs">
                  <input type="radio" name="tabs" id="tab_1" defaultChecked="checked" />
                                  <label htmlFor="tab_1">EXTENSION CIL À CIL</label>
                                  <div className="tabs_content">
                                   <div className="">
                                        <div className="text_intro">
                                             <h2> Extension cil à cil </h2></div>
                                         <div className="text_intro">   
                                            <p>Cette pose vous garantira un effet mascara. Idéal pour les personnes n'ayant pas l' habitude de se maquiller ou voulant un rendu naturel.</p>
                                            <p>Cette technique consiste à poser chaque extension sur un cil naturel. Un Diagnostic permettra de choisir la courbure, </p>
                                            <p>la longueur et la forme qui vous conviendra le mieux tout en respectant votre cil naturel.</p>
                                        
                                        </div>    
                                   
                                        <div className="container_home">
                    
                                            {prestation.map((e,i) => {
                                                if(e.cate_title === "Extension cil à cil"){  
                                                
                                                    return ( 
                                                    
                                                    <div className="card_prestation" key={i}>
                                                        <h3>{e.title}</h3>
                                                            <div className="card_image_prestation"><img src={`${BASE_IMG}/${e.image}`} alt="Extension cil à cil" /></div>
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
                                                    <p>Tarif : 70 €</p>
                                                    <p>Environ 2H15</p>
                                                </div>
                                                <div className="text_prestation">
                                                    <p>Remplissage à prevoir : 3 semaines</p>
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
                                  </div>
                                
                                  <input type="radio" name="tabs" id="tab_2" />
                                  <label htmlFor="tab_2">Extension mixte</label>
                                  <div className="tabs_content">
                                     <div className="text_intro">
                                                             <h2> Extension mixte </h2></div>
                                      <div className="text_intro">                       
                                            <p>Mélange de deux techniques. (cil à cil et volume)</p>
                                            <p>Cette technique permet d’avoir un résultat plus fourni que le cil à cil. </p>
                                            <p>Cette technique combine la technique du cil à cil et du volume ce qui va créer de la densité,</p>
                                            <p>pour souligner le regard, tout en restant assez naturel.</p>
                                            <p>L idéal pour  les clientes souhaitant allier densité naturel.</p>
                                        </div>   
                                   
                                        <div className="container_home">
                    
                                            {prestation.map((e,i) => {
                                                if(e.cate_title === "Extension mixte"){  
                                                
                                                    return ( 
                                                    
                                                    <div className="card_prestation" key={i}>
                                                                <h3>{e.title}</h3>
                                                            <div className="card_image_prestation"><img src={`${BASE_IMG}/${e.image}`} alt="Extension mixte" /></div>
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
                                                    <p>Tarif : 80 €</p>
                                                    <p>Environ 2H45</p>
                                                </div>
                                                <div className="text_prestation">
                                                    <p>Remplissage à prevoir : 3 semaines</p>
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
                                    
                                      <input type="radio" name="tabs" id="tab_3" />
                                      <label htmlFor="tab_3">Extension volume</label>
                                      <div className="tabs_content">
                                        <div className="">
                                        <div className="text_intro">
                                             <h2> Extension volume</h2> </div>  
                                        <div className="text_intro">     
                                            <p>Je souhaite un regard glamour et j'opte pour un effet plus sophistiqué. </p>
                                            <p>Application de bouquets d'extensions par cil naturel pour un effet plus ou moins intense.</p>
                                        </div>   
                                   
                                        <div className="container_home">
                    
                                            {prestation.map((e,i) => {
                                                if(e.cate_title === "Extension volume"){  
                                                
                                                    return ( 
                                                    
                                                    <div className="card_prestation" key={i}>
                                                            <h3>{e.title}</h3>
                                                            <div className="card_image_prestation"><img src={`${BASE_IMG}/${e.image}`} alt="Extension volume" /></div>
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
                                                    <p>Tarif : Dès 85 €</p>
                                                    <p>Environ 3H</p>
                                                </div>
                                                <div className="text_prestation">
                                                    <p>Remplissage à prevoir : 3 semaines</p>
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
                                      </div>
                                    
                                      <input type="radio" name="tabs" id="tab_4" />
                                      <label htmlFor="tab_4">Extension effet wet</label>
                                      <div className="tabs_content">
                                        <div className="text_intro">
                                             <h2> Extension effet wet </h2> </div>  
                            <div className="text_intro">                 
                                            <p>Cette technique est identique à celle du volume. </p>
                                            <p>Les bouquets d'extensions sont "fermés" afin de donner cet aspect effet "mouillé" LE rendu varie en fonction de la densité choisie. </p>
                                            <p>Cette méthode est l' idéal pour les personne souhaitant souligner leur regard et ayant une base cil moyenne à dense. </p>
                                        </div>  
                                        
                                        <div className="container_home">
                                    
                                            {prestation.map((e,i) => {
                                                if(e.cate_title === "Extension effet wet"){  
                                                
                                                    return ( 
                                                     
                                                    <div className="card_prestation" key={i}>
                                                    <h3>{e.title}</h3>
                                                            <div className="card_image_prestation"><img src={`${BASE_IMG}/${e.image}`} alt="Extension effet wet" /></div>
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
                                                    <p>Tarif : 85 €</p>
                                                    <p>Environ 2H15</p>
                                                </div>
                                                <div className="text_prestation">
                                                    <p>Remplissage à prevoir : 3 semaines</p>
                                                </div>
                                                {!state.connexion && 
                                                    <NavLink to="/Inscription" ><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                                }
                                                {state.connexion && (
                                                    <NavLink to="/Reserver"><button  className="card_button" type="submit">Reservez votre prestation</button></NavLink>
                                                )}
                                            </div>
                                    </div>
                                  </div>
                                
                                    <input type="radio" name="tabs" id="tab_5" />
                                  <label htmlFor="tab_5">Rehaussement de cil</label>
                                  <div className="tabs_content">
                                    <div className="">
                                        <div className="text_intro">
                                             <h2> Rehaussement de cil</h2> </div>   
                                        <div className="text_intro">     
                                            <p>Cette technique est l'alternative incontournable au recourbe cils ! </p>
                                            <p>Il permet de courber joliment vos cils naturels pour une durée de 6 à 8 semaines. </p>
                                            <p>Le cil est nourrit en profondeur grâce à un soin révolutionnaire. Vos cils paraissent plus longs et sublimes. </p>
                                            <p>Cette méthode convient à tous types de cils.</p>
                                        
                                        </div>   
                                   
                                        <div className="container_home">
                    
                                            {prestation.map((e,i) => {
                                                if(e.cate_title === "Rehaussement de cil"){  
                                                
                                                    return ( 
                                                    
                                                    <div className="card_prestation" key={i}>
                                                     <h3>{e.title}</h3>
                                                            <div className="card_image_prestation"><img src={`${BASE_IMG}/${e.image}`} alt="Rehaussement de cil" /></div>
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
                                                    <p>Tarif : Dès 40 €</p>
                                                    <p>Environ 1H15</p>
                                                </div>
                                                <div className="text_prestation">
                                                    <p>Tenue : 6 à 8 semaines</p>
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
                                      </div>
                                        <input type="radio" name="tabs" id="tab_6" />
                                      <label htmlFor="tab_6">Brow lift</label>
                                      <div className="tabs_content">
                                        <div className="text_intro">
                                             <h2> Brow lift </h2> </div>   
                             <div className="text_intro">                 
                                            <p>Le brow lift sera votre allié parfait si vous sourcils refusent la discipline ou si vous souhaitez un effet structuré. </p>
                                            <p>La teinture des sourcils seul ou en combo donnera de la dimension à votre regard.</p>
                                        </div>  
                                        
                                        <div className="container_home">
                                    
                                            {prestation.map((e,i) => {
                                                if(e.cate_title === "Brow lift"){  
                                                
                                                    return ( 
                                                     
                                                    <div className="card_prestation" key={i}>
                                                    <h3>{e.title}</h3>
                                                            <div className="card_image_prestation"><img src={`${BASE_IMG}/${e.image}`} alt="Brow lift" /></div>
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
                                                    <p>Tarif : Dès 40€</p>
                                                    <p>Environ 1H10</p>
                                                </div>
                                                <div className="text_prestation">
                                                    <p>Tenue : 3 à 4 semaines</p>
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
                  
                </div>
                
                
                
                
                </div>
            </React.Fragment>
        ) 
}

export default Prestation