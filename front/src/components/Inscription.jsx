import React from "react"
import axios from "axios"
import BASE_URL from '../config.js'

const Inscription = () => {
    
    { /* Chaque appel à un crochet obtient un état isolé */ }
    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
 
        { /*empêcher le comportement par défaut qui aurait dû se manifester lorsqu'une action a eu lieu */ }
        const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/Inscription`,{
             prenom,
            nom,
            email,
            mdp
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return(
        
            <React.Fragment>
            
                    <h1>Inscription</h1>
          
                <form>
                    <label>Prenom :
                      <div>  <input type="text" id='prenom'placeholder="Entrer le nom d'utilisateur" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required/> </div>
                    </label>
                    
                    <label>Nom : 
                      <div>  <input type="text" id='nom' placeholder="Entrer le nom d'utilisateur" name="nom" value="" value={nom} onChange={(e) => setNom(e.target.value)} required /> </div>
                    </label>
    
                    <label>Email : 
                      <div>  <input type="email" id='email' placeholder="Entrer votre adress mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> </div>
                    </label>
                    
                    <label>Mot de passe (8 characters minimum) :
                      <div>  <input type="password" id='mdp' placeholder="Entrer le mot de passe" name="mdp" value={mdp} onChange={(e) => setMdp(e.target.value)} required /> </div>
                    </label>
                    
                    <button onClick={submit}>Valider</button> 
                </form>
               
            </React.Fragment>
    )
}

export default Inscription