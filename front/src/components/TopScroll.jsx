import React, {useState, useEffect} from "react"
import {FaAngleUp} from "react-icons/fa"


const TopScroll = () => {

    // Cette étape  consiste à créer un state et à le définir false par défaut ; 
    //cet état contrôlera la visibilité du bouton "scroll-to-top
    
    const [showTop, setShowTop] = useState(false)
    
    // J'utilise le useEffect() pour créer la logique qui détermine 
    // quand nous voulons que le bouton apparaisse et quand nous voulons qu'il disparaisse.
    
    useEffect(()=> {
        
        // J'ajoute un EventListenerau window pour ecouter le defilement, puis s'execute à true,
        
        window.addEventListener("scroll", () => {
            
            //Si la position de défilement vertical est supérieure à 200 pixels, 
            //la fonction définit l' showTopBtn état sur true; sinon, il le définit sur false.
            
            if (window.scrollY > 200) {
                setShowTop(true)
            }else{
                setShowTop(false)
            }
        })
    },[])

    // Gestion de Click événement
    // nous voudrons les faire défiler vers le haut.
    //.window objet a une méthode dédiée scrollTo() pour cela.
    
    const goTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }    
    
    return (
            
            // J'ajoute un onclick() au bouton dans notre balisage, en le connectant à la goToTop()
            <React.Fragment>
            <div className="top_btm">
            {" "}
            {showTop && (
                <FaAngleUp className="icon_position icon_style" onClick={goTop} />
            )}
            {" "}
            </div>
            </React.Fragment>
    )
}

export default TopScroll