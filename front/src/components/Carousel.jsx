import React from 'react'

const { useState, useRef, useEffect } = React
    // Le hook useInterval prend deux arguments : callback et delay. Le rappel est la fonction qui sera exécutée dans le délai spécifié. 
    // Le délai est le temps en millisecondes entre chaque exécution de la fonction de rappel.
const useInterval = (callback, delay) => {
    // useRef pour enregistrer une référence à la fonction de rappel. 
    // Ceci est nécessaire car le crochet useEffect oubliera le rendu précédent et nettoiera l'effet précédent lorsqu'il configurera l'effet suivant. 
    // En enregistrant la fonction de rappel dans une référence, nous nous assurons qu'elle ne sera pas nettoyée et qu'elle sera disponible pour une utilisation dans l'intervalle.
    const savedCallback = useRef()

    useEffect(() => {
        // Après chaque rendu, enregistrez le dernier rappel dans notre ref.
        savedCallback.current = callback
    })

    // Ce code gère toutes les transitions possibles : changement de délai, pause ou la reprise d'un intervalle 

    // useInterval utilise également useEffect pour configurer l'intervalle et gérer son comportement. 
    //Pour ce faire, il définit une fonction en ligne qui sera appelée à chaque intervalle et utilise la méthode setInterval pour exécuter cette fonction au délai spécifié. 
    
    // useEffect est également utilisé pour nettoyer l'intervalle lorsque le composant est démonté ou que le délai change.
    useEffect(() => {
        const tick = () => {
            savedCallback.current()
        }
        if (delay !== null) {
            // setInterval()n'oublie pas . 
            // Il fera toujours référence aux anciens props et state jusqu'à ce que vous le remplaciez.
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

//Les images du carousel 
const Images = [
    { imgUrl: 'http://quentinminziere.sites.3wa.io:9001/image/gallery1.png' },
    { imgUrl: 'http://quentinminziere.sites.3wa.io:9001/image/gallery2.png' },
    { imgUrl: 'http://quentinminziere.sites.3wa.io:9001/image/gallery3.png' },
    { imgUrl: 'http://quentinminziere.sites.3wa.io:9001/image/gallery4.png' },
    { imgUrl: 'http://quentinminziere.sites.3wa.io:9001/image/gallery5.png' },
    { imgUrl: 'http://quentinminziere.sites.3wa.io:9001/image/gallery6.png' }
]

//Carousel utilise 
// Carousel prend un objet props avec une propriété Images qui contient un tableau d'objets représentant les images à afficher dans le carrousel
const Carousel = (props) => {
    // Images  props pour restituer les images images dans un défilement horizontal
    const { Images } = props
    const len = Images.length

    // Le composant utilise le hook useState pour suivre l'index de l'image active
    const [activeIndex, setActive] = useState(0)

    //Autoplay 
    // le hook useInterval pour faire défiler automatiquement les images toutes les 5 secondes
    // Le composant utilise le crochet useState pour suivre l'index actif de l'image actuellement active, et il utilise le crochet useInterval pour configurer la fonction de lecture automatique.
    useInterval(() => {
        setActive((activeIndex + 1) % len)
    }, 5000)

    // Style de retour accorder selon l'index 
    //. La fonction getStyle est utilisée pour déterminer le style de chaque image du carrousel, en fonction de sa distance par rapport à l'image active. 
    //Lorsqu'une image est cliquée, la fonction setActive est appelée pour définir la nouvelle image active.
    
    // Carousel possède également une fonction getStyle qui calcule le style approprié pour chaque image en fonction de son index et de l'activeIndex. 
    // La fonction getStyle détermine la distance entre l'index de l'image et l'activeIndex, et utilise cette distance pour calculer les styles de gauche et d'opacité appropriés pour l'image. 
    //Cela permet au composant d'afficher les images dans les positions correctes et de masquer les images éloignées de l'image active.
    const getStyle = (idx) => {
        // En partant de la gauche, la distance entre idx et currentKey
        const distance_left = idx - activeIndex
        // En partant de la droite, la distance entre idx et currentKey
        const distance_right = distance_left > 0 ? distance_left - len : distance_left + len
        // Sélectionnez la distance avec la plus petite valeur absolue
        const distance = Math.abs(distance_left) > Math.abs(distance_right) ? distance_right : distance_left

        const styleObj = {}

        if (distance === 0) {  //activeIndex
            styleObj.left = "33.3%"
            styleObj.zIndex = 999
            styleObj.opacity = 1
            styleObj.transform = "scale(1)"
        } else {
            //La distance en % des photos a droite et a gauche
            styleObj.left = distance > 0 ? `${16.7 + distance * 40}%` : `${50 + distance * 40}%`
        }

        //La distance n'est pas inférieure à 2, on le cache
        if (Math.abs(distance) >= 2) {
            styleObj.opacity = 0
            styleObj.transform = "scale(0)"
        }

        return styleObj

    }

    return (
        <React.Fragment>
            <div className="carousel">
                <div className="card_container">
                {/* Carousel utilise la méthode map pour parcourir le tableau Images et restituer un élément div pour chaque image. 
                L'élément div a un gestionnaire onClick qui définit l'index actif sur l'index de l'image cliquée, permettant à l'utilisateur de naviguer dans le carrousel en cliquant sur les images. */}
                    {Images.map(({ imgUrl }, index) => (
                        <div className="card_carousel" key={index} onClick={() => setActive(index)} style={getStyle(index)}>
                            <img src={imgUrl} alt="Look Book" />
                        </div>
                    ))}
                </div>

                <div className="rects">
                    {Images.map((value, index) => (
                        <div key={index} className={activeIndex === index ? "rect active" : "rect"} onClick={() => setActive(index)} />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}


export { Carousel, Images }