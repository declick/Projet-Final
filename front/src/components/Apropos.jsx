// import de modules

import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'

const Apropos = () => {
    
    
    return(
        
        <React.Fragment>
            
            <div className="text_intro">
            <h1>En savoir plus sur My Little Lashes</h1>
            </div>
            
            <div className="container_home">
                <div className="container">
                
                                    
                <div className="image">
                <img className="card_img" src="../image/photo-de-claire.png" alt="claire minziere" />
                </div>
                
                    <div className="blog_card">
                       <div className="background_slide">
                            <div className="title_intro">
                                <div className="text_intro">
                                    <h3>Un peu de Moi</h3>
                                 </div>
                                    <p>Mettez du rêve dans votre vie à “My Little Lashes” ! Cet institut de beauté à Rezé (Loire-Atlantique), situé à proximité du centre commercial Leclerc Océane, est dédié à la beauté du regard. Claire est une prothésiste ciliaire hors pair et elle s’est donnée pour mission de sublimer vos yeux. Attentive et dévouée, elle vous accueille du lundi au samedi.</p>
                                    
                                    <p>Pour un regard intense, osez les extensions de cils. Des yeux parfaitement maquillés dès le réveil, c’est possible. Contrairement aux idées reçues, les extensions ne demandent pas beaucoup d’entretien. Simplement, nettoyez vos faux-cils avec une mousse spéciale tous les jours (comme vous le feriez pour vos cils naturels d’ailleurs) et brossez-les tous les matins. Pour le reste, admirez-vous dans chaque miroir rencontré.</p>
                            </div>
                        </div>
                    </div>

                    <div className="blog_card">
                    <div className="background_slide1">
                        <div className="title_intro">
                            <div className="text_intro">
                                <h3>My littles Lashes</h3>
                            </div>
                                <p>A “My Little Lashes”, Claire est là pour vous conseiller sur le type d’extensions qui vous ira le mieux, en fonction de la courbure de vos yeux. Vous pouvez choisir entre une pose cil à cil qui agrandit légèrement le regard, une pose mixte, un volume un peu plus épais 2D/3D ou même un volume russe 4D/6D pour un effet maximum. N’oubliez pas de prendre rendez-vous dès à présent pour le remplissage.</p>
                                
                                <p>De plus, votre institut de beauté à Rezé vous propose également le brow lift pour discipliner vos sourcils. Avec ou sans teinture, cette technique lisse, galbe et donne de l’épaisseur aux sourcils pendant plusieurs semaines. Enfin, entre deux extensions, vous pouvez effectuer la transition avec un rehaussement de cils et/ou une teinture, voire un lash bot-ox qui nourrit les cils en profondeur. Alors, prête à papillonner des yeux ?</p>
                        </div>
                    </div> 
                    </div>
                </div> 
            </div>  
                
        </React.Fragment>
    )
}
export default Apropos

  
         