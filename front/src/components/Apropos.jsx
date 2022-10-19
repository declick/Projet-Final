// import de modules

import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'

const Apropos = () => {
    
    
    return(
        
    <React.Fragment>
    
        <h1>En savoir plus sur My Little Lashes</h1>
           <div className="container_home">
          
        <div className="apropos">

        <div className="blog_card">
            <div className="meta" >
            
                <div className="photo"><img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/157447656_197987538788182_5599805136030264338_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vfVKB3zu6rEAX8XUHja&_nc_ht=scontent-cdt1-1.xx&oh=00_AT_4jC0C4CqpZrAXcL9BDamH9ZLHqySFVTrRN9pHZ44_VA&oe=636F222C" alt="My Little Lashes" /></div></div>
                
                <div className="description">
                
                <h3>Un peu de Moi</h3>
                <p>Mettez du rêve dans votre vie à “My Little Lashes” ! Cet institut de beauté à Rezé (Loire-Atlantique), situé à proximité du centre commercial Leclerc Océane, est dédié à la beauté du regard. Claire est une prothésiste ciliaire hors pair et elle s’est donnée pour mission de sublimer vos yeux. Attentive et dévouée, elle vous accueille du lundi au samedi.</p>
                
                <p>Pour un regard intense, osez les extensions de cils. Des yeux parfaitement maquillés dès le réveil, c’est possible. Contrairement aux idées reçues, les extensions ne demandent pas beaucoup d’entretien. Simplement, nettoyez vos faux-cils avec une mousse spéciale tous les jours (comme vous le feriez pour vos cils naturels d’ailleurs) et brossez-les tous les matins. Pour le reste, admirez-vous dans chaque miroir rencontré.</p>
            
            </div>
        </div>
  
        <div className="blog_card alt">
            <div className="meta">
            
                <div className="photo"><img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/157447656_197987538788182_5599805136030264338_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vfVKB3zu6rEAX8XUHja&_nc_ht=scontent-cdt1-1.xx&oh=00_AT_4jC0C4CqpZrAXcL9BDamH9ZLHqySFVTrRN9pHZ44_VA&oe=636F222C" alt="My littles Lashes" /></div></div>
                
                <div className="description">
                
                <h3>My littles Lashes</h3>
                
                <p>A “My Little Lashes”, Claire est là pour vous conseiller sur le type d’extensions qui vous ira le mieux, en fonction de la courbure de vos yeux. Vous pouvez choisir entre une pose cil à cil qui agrandit légèrement le regard, une pose mixte, un volume un peu plus épais 2D/3D ou même un volume russe 4D/6D pour un effet maximum. N’oubliez pas de prendre rendez-vous dès à présent pour le remplissage.</p>
                
                <p>De plus, votre institut de beauté à Rezé vous propose également le brow lift pour discipliner vos sourcils. Avec ou sans teinture, cette technique lisse, galbe et donne de l’épaisseur aux sourcils pendant plusieurs semaines. Enfin, entre deux extensions, vous pouvez effectuer la transition avec un rehaussement de cils et/ou une teinture, voire un lash bot-ox qui nourrit les cils en profondeur. Alors, prête à papillonner des yeux ?</p>
            
            </div>
        </div>
     </div>
          <div className="container_home">
          
        <div className="apropos">
        <div itemProp="openingHours" content="Sa 09:15-12:00;Mo 09:15-18:00;Tu 09:15-18:00;Th 09:15-18:00;Fr 09:15-18:00;We 09:15-12:00" className="openingHours">
        
            <h3 className="titre_horaire">Horaires d'ouverture</h3>
            
            <ul className="apropos_ul">
                <li className="apropos">
                    <div>Lundi</div>
                    <div className="apropos_div">
                    <div className="apropos_div2">
                    <div>09:15</div>
                    <span>-</span>
                    <div>18:00</div>
                    </div></div>
                </li>
                
                <li className="apropos_font">
                    <div>Mardi</div>
                    <div className="apropos_div">
                    <div className="apropos_div2"><
                    div>09:15</div>
                    <span>-</span>
                    <div>18:00</div>
                    </div></div>
                </li>
                
                <li className="apropos">
                    <div>Mercredi</div>
                    <div className="apropos_div">
                    <div className="apropos_div2">
                    <div>09:15</div>
                    <span>-</span>
                    <div>12:00</div>
                    </div></div>
                </li>
                
                <li className="apropos">
                    <div>Jeudi</div>
                    <div className="apropos_div">
                    <div className="apropos_div2">
                    <div>09:15</div>
                    <span>-</span>
                    <div>18:00</div>
                    </div></div>
                </li>
                
                <li className="apropos">
                    <div>Vendredi</div>
                    <div className="apropos_div">
                    <div className="apropos_div2">
                    <div>09:15</div>
                    <span>-</span>
                    <div>18:00</div>
                    </div></div>
                </li>
                
                <li className="apropos">
                    <div>Samedi</div>
                    <div className="apropos_div">
                    <div className="apropos_div2">
                    <div>09:15</div>
                    <span>-</span>
                    <div>12:00</div>
                    </div></div>
                </li>
                <li className="apropos">
                    <div>Dimanche</div>
                    <div className="css-1ck74d5">Fermé</div>
                </li>
            </ul>
        </div> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.79886246634!2d-1.539228684203889!3d47.16179362659136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805e99f6f8a2b9b%3A0xbc434b249bfb85ef!2sMY%20LITTLE%20LASH!5e0!3m2!1sfr!2sfr!4v1665481975582!5m2!1sfr!2sfr" loading="lazy"></iframe>
        </div>
            <div> 
            </div>   
        </div> </div>
    </React.Fragment>
    )
}
export default Apropos


