//import de module

import React from "react"
import axios from "axios"
import { BASE_URL } from '../config.js'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"

const Inscription = () => {

    const navigate = useNavigate()

    { /* Chaque appel à un crochet obtient un état isolé */ }
    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
    
    const [errorMessage, setErrorMessage] = React.useState("")
    const [isChecked, setIsChecked] = React.useState(false)
    const [showmdp, setShowmdp] = React.useState(false)
    { /* définir quel type de validation nous allons utiliser */ }
    const [validate, setValidate] = React.useState({ hasLow: false, hasCap: false, hasNumber: false, has8digit: false })

    const validRegex = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g


    { /* une condition est remplie, nous signalerons la valeur comme true dans un élément spécifique de l'objet */ }
    const strength = Object.values(validate).reduce((a, item) => a + item, 0)
    const feedback = {
        1: "Le mot de passe est trop faible!",
        2: "C'est encore faible !",
        3: "Vous y êtes presque!",
        4: "Bravo! Maintenant votre mot de passe est solide!"
    }[strength];

    const handleChangePassword = (e) => {
        setMdp(e.target.value);
        validatePassword(e.target.value)
    };

    { /* 
  Le mot de passe doit contenir une majuscule.
  Le mot de passe doit contenir une minuscule.
  Le mot de passe doit avoir un chiffre.
  Le mot de passe doit comporter au moins 8 caractères
  */ }
    const validatePassword = (mdp) => {
        if (mdp.match(/\d+/g)) {
            setValidate((o) => ({ ...o, hasNumber: true }))
        } else {
            setValidate((o) => ({ ...o, hasNumber: false }))
        }

        if (mdp.match(/[A-Z]+/g)) {
            setValidate((o) => ({ ...o, hasCap: true }))
        } else {
            setValidate((o) => ({ ...o, hasCap: false }))
        }

        if (mdp.match(/[a-z]+/g)) {
            setValidate((o) => ({ ...o, hasLow: true }))
        } else {
            setValidate((o) => ({ ...o, hasLow: false }))
        }

        if (mdp.length > 7) {
            setValidate((o) => ({ ...o, has8digit: true }))
        } else {
            setValidate((o) => ({ ...o, has8digit: false }))
        }
    }


    { /*empêcher le comportement par défaut qui aurait dû se manifester lorsqu'une action a eu lieu */ }

    const submit = (e) => {

        const data = {
            prenom,
            nom,
            email,
            mdp
        }

        e.preventDefault()
        // Je verifie si les champs sont vides et sans espaces
        if (prenom.trim() === "" || nom.trim() === "" || email.trim() === "" || mdp.trim() === "" || isChecked === false) {
            setErrorMessage("Merci de ne pas laisser de champ vide.")
        } else {
            // Je verifie la longueur des champs 
            if (prenom.length <= 255 && nom.length <= 255 && email.length <= 255 && mdp.length >= 8 && email !== validRegex) {

                axios.post(`${BASE_URL}/Inscription`, data)

                    .then((res) => {
                        if (res.data.response === true) {
                            navigate("/Connexion")
                        } else {
                            navigate("/Inscription")
                            console.log(res)
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                setErrorMessage("Erreur de saisie")
            }
        }
    }

    { /* verifie si la checkbox est coché */ }
    const handleOnChange = () => {
        setIsChecked(!isChecked)
    }

    { /* montre ou cache le mdp */ }
    const showMdp = (e) => {
        e.preventDefault()
        setShowmdp(!showmdp)
    }

    return (

        <React.Fragment>
            <h1>Inscription</h1>

            <div className="center">
                <form className="formulaire">
                    <label>
                        <div>
                            <input type="text" placeholder="PRENOM :" name="prenom" maxLength="255" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                        </div>
                    </label>

                    <label>
                        <div>
                            <input type="text" placeholder="NOM :" name="nom" maxLength="255" value={nom} onChange={(e) => setNom(e.target.value)} required />
                        </div>
                    </label>

                    <label>
                        <div>
                            <input type="email" placeholder="@EMAIL :" name="email" maxLength="255" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </label>
                       
                            <label> <p>minimum 8 caratcteres</p></label>
                            <div class="container_password">
                            <input type={showmdp ? "text" : "password"} placeholder="MOT DE PASSE :" name="mdp" className="input_password" value={mdp} onChange={(e) => handleChangePassword(e)} required />

                        <div onClick={showMdp} className="button_look"> <span>{showmdp ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span></div>
                        </div>
                         {strength > 0 ? (
                                <progress hidden={mdp.length === 0} className={`password strength_${strength}`} value={strength} max="4" />) : null}

                            <div className={`feedback strength_${strength}`} hidden={mdp.length === 0}> {feedback} </div>
                    <div>
                        <input type="submit" onClick={submit} value="Envoyer" />
                    </div>

                    <label >

                        <input type="checkbox" className="checkbox" value={isChecked} onChange={handleOnChange} />  Lire et accepter les <NavLink to="/MentionsLegales" target="_blank"><u>Mentions Légales</u></NavLink>

                    </label>

                    <label>
                        Dejà membre ?  <NavLink to='/Connexion'><u>  Connectez vous ici.</u></NavLink>
                    </label>


                    <h3>{errorMessage}</h3>

                </form>
            </div>
        </React.Fragment>

    )
}

export default Inscription