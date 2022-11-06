
import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG } from '../config.js'
import {useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom"
import Carousel from "./Carousel"
import {ReducerContext} from "./reducer/reducer"
import {GrDiamond} from "react-icons/gr"

const Home = () => {

    const navigate = useNavigate()

    const [prestation, setPrestation] = React.useState([])
     const [state, dispatch] = React.useContext(ReducerContext)
     
    const handleClick = (e) => {
        e.preventDefault()
        navigate('/Prestation')
    }
    
    const handleClick2 = (e) => {
        e.preventDefault()
        navigate('/Produit')
    }
    
     React.useEffect(()=> {
        axios.get(`${BASE_URL}/Home`)
        
        .then((res) => {
          setPrestation(res.data.SQL)
        })
        .catch((err) => {
            console.log(err)
        })
        
    },[])
    
//Les images du carousel
const images = [
  { imgUrl: 'https://st3.depositphotos.com/thumbs/8132176/vector/35167/351677116/api_thumb_450.jpg?forcejpeg=true' },
  { imgUrl: 'https://st3.depositphotos.com/thumbs/8132176/vector/35167/351677116/api_thumb_450.jpg?forcejpeg=true' },
  { imgUrl: 'https://st3.depositphotos.com/thumbs/8132176/vector/35167/351677116/api_thumb_450.jpg?forcejpeg=true' },
  { imgUrl: 'https://st3.depositphotos.com/thumbs/8132176/vector/35167/351677116/api_thumb_450.jpg?forcejpeg=true' },
  { imgUrl: 'https://st3.depositphotos.com/thumbs/8132176/vector/35167/351677116/api_thumb_450.jpg?forcejpeg=true' },
  { imgUrl: 'https://st3.depositphotos.com/thumbs/8132176/vector/35167/351677116/api_thumb_450.jpg?forcejpeg=true' },
  { imgUrl: 'https://st3.depositphotos.com/thumbs/8132176/vector/35167/351677116/api_thumb_450.jpg?forcejpeg=true' },
  { imgUrl: 'https://st3.depositphotos.com/thumbs/8132176/vector/35167/351677116/api_thumb_450.jpg?forcejpeg=true' },
  { imgUrl: 'https://st3.depositphotos.com/thumbs/8132176/vector/35167/351677116/api_thumb_450.jpg?forcejpeg=true' }
]

    return(
           
        <React.Fragment>

            <section>
                <div className="container">
                    <div className="container_home">

                        <div className="header">
                                            
                           <img src="./image/main-block-decor.png" alt="header" className="main_block_decor" />
                
                            <div className="text_header">
                                <h1>MY LITTLE LASHES</h1>
                                <p>BROW AND LASH ARTIST</p>
                                <div className="marquee_header">
                                    <p>* -15% de remise sur vos poses complètes d'extensions de cils sur présentation de votre carte étudiante.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      
            </section>
            
            <section>
            
             <div className="container_home">
                <div className="container_qualiter">
                
                    <div className="text_intro">
                        <h2 className="intro_title">MY LITTLE LASHES</h2>
                        <p>studio privé situé à Rezé et spécialisé dans la mise en beauté de votre  Regard</p>
                    </div> 
                    
                        <div className="text_intro">
                              <p>Passionnée par les extensions de cils, </p>
                              <p>je prends le soin d'écouter vos attentes lors d'un entretien personnalisé réalisé à chaque nouveau rendez-vous. </p>
                              <p>Je m'adapte à votre morphologie et vos souhaits afin de vous garantir un résultat à la hauteur de vos attentes. </p>
                              <p>Il ne vous reste plus qu'à choisir votre prestation</p>
                        </div>  
                </div>  
                
                <div className="carousel_intro">
                    <ul className="slideshow2">
                        <li><img src="../image/noir.png" alt="logo" /></li>
                        <li><img src="../image/blanc.jpg" alt="logo" /></li>
                        <li><img src="../image/noir.png" alt="logo" /></li>
                        <li><img src="../image/blanc.jpg" alt="logo" /></li>
                    </ul>
                </div> 
            </div> 
            
            </section>

            <section>
            <div className="background_slide">
                <div className="text_intro">
                <h2>PRESTATIONS</h2>
                <p>Je vous propose plusieurs prestations afin de satisfaire vos envies. </p>
                <p>Optez pour les extensions de cils afin de mettre en valeur votre regard, </p>
                <p>le rehaussement pour un effet naturel, et le brow lift pour structurer vos sourcils.</p> 
                <p>Venez découvrir les prestations, des conseils avisés permettront de vous orienter en cas de doute.</p>

             </div>    
                    
                <div className="container_home">

                    {prestation.map((e,i)=>{
                        if(e.categorie_id === 1){  
                            return(
                            
                                <div className="card" key={i}>
                                    <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Extension cil à cil" /></div>
                                    <div className="card_body">
                                    <div className="card_title">
                                    </div>
                                        <button className="card_button" onClick ={handleClick}>Extension cil à cil</button>
                                    </div>
                                </div>
                            )
                        }
                        
                        if(e.categorie_id === 2){ 
                            return(
                            
                                <div className="card" key={i}>
                                    <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Extension mixte" /></div>
                                    <div className="card_body">
                                    <div className="card_title">
                                    </div>
                                        <button className="card_button" onClick ={handleClick}>Extension mixte</button>
                                    </div>
                                </div>
                            )
                        } 
                        if(e.categorie_id === 3){  
                            return(
                            
                                <div className="card" key={i}>
                                    <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Extension volume" /></div>
                                    <div className="card_body">
                                    <div className="card_title">
                                    </div>
                                        <button className="card_button" onClick ={handleClick}>Extension volume</button>
                                    </div>
                                </div>
                            )
                        } 
                        if(e.categorie_id === 4){ 
                            return(
                            
                                <div className="card" key={i}>
                                    <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Extension effet wet" /></div>
                                    <div className="card_body">
                                    <div className="card_title">
                                    </div>
                                        <button className="card_button" onClick ={handleClick}>Extension effet wet</button>
                                    </div>
                                </div>
                            )
                        } 
                        if(e.categorie_id === 5){ 
                            return(
                            
                                <div className="card" key={i}>
                                    <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Rehaussement de cil" /></div>
                                    <div className="card_body">
                                    <div className="card_title">
                                    </div>
                                        <button className="card_button" onClick ={handleClick}>Rehaussement de cil</button>
                                    </div>
                                </div>
                            )
                        } 
                        if(e.categorie_id === 6){ 
                            return(
                            
                                <div className="card" key={i}>
                                    <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt="Brow lift" /></div>
                                    <div className="card_body">
                                    <div className="card_title">
                                    </div>
                                        <button className="card_button" onClick ={handleClick}>Brow lift</button>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    
                </div> 
            </div>  
            </section>

            <section>
            <div className="text_intro">
                <h2>KIT D'ENTRETIEN</h2>
                <p>Ce kit sera votre allié au quotidien pour l'entretien de vos cils et vos sourcils.</p> 
                <p>Spécialement étudié et conçu pour vous offrir un soin professionnel à domicile.</p> 
                <p>Il vous permettra d'optimiser et prolonger la tenue de votre pose d'Extension/Brow lift. </p>

             </div> 
                <div className="container_home">
                    <div className="produit_intro">
                    
                        <div className="produit_intro_prix">
                            <img className="card_img_produit" src="../image/produit.jpg" alt="produit" />
                                <p>KIT D'ENTRETIEN</p>
                                    <button className="card_button" onClick ={handleClick2}>KIT LASHES</button>
                        </div>
                        <div className="produit_intro_prix">
                            <img className="card_img_produit"src="../image/produit.jpg" alt="produit" />
                                <p>KIT D'ENTRETIEN</p>
                                    <button className="card_button" onClick ={handleClick2}>KIT BROW</button>
                        </div>
                    </div>
            </div>
            
             <div className="container_qualiter">
                 <div className="container_home">
                 
                  <div>
                        <div className="text_qualiter">
                            <GrDiamond className="diamond" />
                            <div className="text_intro">
                                <p>Tous les produits utilisés sont des produits professionnel</p>
                                <p>haut de gamme soumis à de stricts contrôles de qualité afin de vous</p> 
                                <p>offrir une sécurité optimal et une hygiène irréprochable.</p>
                            </div>
                        </div>
                            <div className="text_qualiter">
                              <GrDiamond className="diamond" />
                                <div className="text_intro">
                                    <p>Les extensions de cils utilisées sont certifiées  </p>
                                    <p>non testées sur les animaux. La non cruauté des animaux</p>
                                    <p>est une priorité dans le choix des produits utilisés.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="text_qualiter">
                            <GrDiamond className="diamond" />
                            <div className="text_intro">
                                <p>Un entretien personnalisé est réalisé gratuitement pour tout</p>
                                <p>nouveau rendez-vous. Le but étant de vous conseiller, vous orienter</p>
                                <p>et vous offrir un résultat à la hauteur de vos attentes.</p>
                            </div>
                        </div>
                            <div className="text_qualiter">
                              <GrDiamond className="diamond" /> 
                                <div className="text_intro">
                                    <p>Toutes les techniques sont réalisées dans le strict</p>
                                    <p>respect des procédures. Un suivi régulier de formation de perfectionnement</p>
                                    <p>me permettra de vous proposer un travail de qualité avec un</p>
                                    <p>partage de connaissances approfondies.</p>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                </div>    
            </section>
    
            <section>
                <div className="background_slide">
                    <div className="text_intro">
                        <h2>LOOK BOOK</h2>
                    </div> 
                    
                        <Carousel images={images} alt="prestation" />
                        
                    <div className="text_intro">
                    <h2>Elle ont testé et validé</h2>
                 </div>    
                </div>  
            </section>

            <section>
                      <div className="container_home"> 
                    <div className="text_intro">
                        <h2>RESERVEZ VOTRE PRESTATION</h2>
                  
                            <fieldset>
                                <div className="container_intro"> 
                                <div className="wrap">
                                {!state.connexion && 
                                    <NavLink to="/Inscription" className="button"><button type="submit">Prendre Rendez-Vous</button></NavLink>
                                }
                                {state.connexion && (
                                <NavLink to="/Reserver" className="button"><button type="submit">Prendre Rendez-Vous</button></NavLink>
                                )}
                                </div></div>
                            </fieldset>
                          </div>
                    
                    <div className="container_intro">

                            <div itemProp="openingHours" content="Sa 09:15-12:00;Mo 09:15-18:00;Tu 09:15-18:00;Th 09:15-18:00;Fr 09:15-18:00;We 09:15-12:00" className="openingHours">
                                
                                <h3 className="titre_horaire">Horaires d'ouverture</h3>
                                    
                                <ul className="apropos_ul">
                                    <li className="">
                                        <div>Lundi </div>
                                        <div className="apropos_div">
                                        <div className="apropos_div2">
                                        <div>09:15</div>
                                        <span>-</span>
                                        <div>18:00</div>
                                        </div></div>
                                    </li>
                                    
                                    <li className="">
                                        <div>Mardi </div>
                                        <div className="apropos_div">
                                        <div className="apropos_div2"><
                                        div>09:15</div>
                                        <span>-</span>
                                        <div>18:00</div>
                                        </div></div>
                                    </li>
                                    
                                    <li className="">
                                        <div>Mercredi </div>
                                        <div className="apropos_div">
                                        <div className="apropos_div2">
                                        <div>09:15</div>
                                        <span>-</span>
                                        <div>12:00</div>
                                        </div></div>
                                    </li>
                                    
                                    <li className="">
                                        <div>Jeudi </div>
                                        <div className="apropos_div">
                                        <div className="apropos_div2">
                                        <div>09:15</div>
                                        <span>-</span>
                                        <div>18:00</div>
                                        </div></div>
                                    </li>
                                    
                                    <li className="">
                                        <div>Vendredi </div>
                                        <div className="apropos_div">
                                        <div className="apropos_div2">
                                        <div>09:15</div>
                                        <span>-</span>
                                        <div>18:00</div>
                                        </div></div>
                                    </li>
                                    
                                    <li className="">
                                        <div>Samedi </div>
                                        <div className="apropos_div">
                                        <div className="apropos_div2">
                                        <div>09:15</div>
                                        <span>-</span>
                                        <div>12:00</div>
                                        </div></div>
                                    </li>
                                    <li className="">
                                        <div>Dimanche </div>
                                        <div className="">Fermé</div>
                                    </li>
                                </ul>
                         </div>
                    </div>  
                </div> 
            </section> 
    
        </React.Fragment>
    ) 
}

export default Home