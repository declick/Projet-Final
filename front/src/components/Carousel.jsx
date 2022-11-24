import React from 'react'

    const { useState, useRef, useEffect } = React
    
    const useInterval = (callback, delay) => {
      // useRef()renvoie un objet simple avec current propriété mutable, partagée entre les rendus.
        const savedCallback = useRef()
    
        useEffect(() => {
          // Après chaque rendu, enregistrez le dernier rappel dans notre ref.
            savedCallback.current = callback
        })
    
      // Ce code gère toutes les transitions possibles : changement de délai, pause ou la reprise d'un intervalle 
      
       // useEffect() oublie le rendu précédent. 
       // Il nettoie le dernier effet et configure l'effet suivant. 
       // L'effet suivant se ferme sur des props and state.
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
        },[delay])
    }

//Les images du carousel
const Images = [
  { imgUrl: 'https://i.ibb.co/4T4Bmf6/gallery1.jpg' },  
  { imgUrl: 'https://i.ibb.co/4T4Bmf6/gallery1.jpg' },
  { imgUrl: 'https://i.ibb.co/4T4Bmf6/gallery1.jpg' },
  { imgUrl: 'https://i.ibb.co/4T4Bmf6/gallery1.jpg' },
  { imgUrl: 'https://i.ibb.co/4T4Bmf6/gallery1.jpg' },
  { imgUrl: 'https://i.ibb.co/4T4Bmf6/gallery1.jpg' },
  { imgUrl: 'https://i.ibb.co/4T4Bmf6/gallery1.jpg' }
]

    //Carousel
const Carousel = (props) => {
  
  const { Images } = props
  const len = Images.length
  
  const [activeIndex, setActive] = useState(0)
  
 //Autoplay
  useInterval(() => {
        setActive((activeIndex + 1) % len)
    }, 5000)

  // Style de retour accorder selon l'index
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
    

export {Carousel,Images}