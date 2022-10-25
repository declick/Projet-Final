import React from 'react'

    const { useState, useRef, useEffect } = React
    
    const useInterval = (callback, delay) => {
        const savedCallback = useRef()
    
        useEffect(() => {
            savedCallback.current = callback
        })
    
        useEffect(() => {
            const tick = () => {
                savedCallback.current()
            }
            if (delay !== null) {
                let id = setInterval(tick, delay)
                return () => clearInterval(id)
            }
        },
            [delay]
        )
    }
    
    
const Carousel = (props) => {
  const { images } = props
  const len = images.length
  const [activeIndex, setActive] = useState(0)
  
  //Autoplay
  useInterval(() => {
        setActive((activeIndex + 1) % len)
    }, 5000)

  //Style de retour accorder selon l'index
  const getStyle = (idx) => {
    //En partant de la gauche, la distance entre idx et currentKey
    const distance_left = idx - activeIndex
    //CEn partant de la droite, la distance entre idx et currentKey
    const distance_right = distance_left > 0 ? distance_left - len : distance_left + len
    //Sélectionnez la distance avec la plus petite valeur absolue
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

    //La distance n'est pas inférieure à 2, cachez
    if (Math.abs(distance) >= 2) {
      styleObj.opacity = 0
      styleObj.transform = "scale(0)"
    }

    return styleObj
    
    }

    return (
          
        <div className="carousel">
            <div className="card_container">
                {images.map(({ imgUrl }, index) => (
                  <div className="card_carousel" key={index} onClick={() => setActive(index)} style={getStyle(index)}>
                    <img src={imgUrl} />
                  </div>
                ))}
                </div>
              
                <div className="rects">
                {images.map((value, index) => (
                  <div key={index} className={activeIndex === index ? "rect active" : "rect"} onClick={() => setActive(index)} />
                ))}
            </div>
        </div>
    )
}
    

export default Carousel