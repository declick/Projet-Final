import React from 'react'
import { useState, useEffect } from "react"
import { FaAngleUp } from "react-icons/fa"

const ScrollToTop = () => {

    // Par default le scroll est dans le  "false"
    const [showTopBtn, setShowTopBtn] = useState(false)

    // Modification de l'etat showTopBtn cahque fois qu'un événement de défilement se pproduit
    useEffect(() => {
        window.addEventListener('scroll', () => {
            // 400 pixels de scroll pour entrer dans le "true"
            if (window.scrollY > 400) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }


        })
    }, [])

    // Fonction pour aider à faire défiler vers le haut en douceur
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="top_button">
            {showTopBtn && (
                <FaAngleUp className="button_position button_style" onClick={goToTop} />
            )}
        </div>
    )
}

export default ScrollToTop