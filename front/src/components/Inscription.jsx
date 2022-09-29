import React from "react"
import axios from "axios"
import BASE_URL from '../config.js'

const Inscription = () => {
    
    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
 
        const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/Inscription`,{
            nom,
            prenom,
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

                    <label><b>Nom : </b>
                        <input type="text" id='nom' placeholder="Entrer le nom d'utilisateur" name="nom" value="" value={nom} onChange={(e) => setNom(e.target.value)} required />
                    </label>
                    
                    <label><b>Prenom : </b>
                        <input type="text" id='prenom'placeholder="Entrer le nom d'utilisateur" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required/>
                    </label>
    
                    <label><b>Email : </b>
                        <input type="email" id='email' placeholder="Entrer votre adress mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    
                    <label><b>Password (8 characters minimum): </b>
                        <input type="password" id='mdp' placeholder="Entrer le mot de passe" name="mdp" value={mdp} onChange={(e) => setMdp(e.target.value)} required />
                    </label>
                    
                    <button onClick={submit}>Valider</button>
                    
                </form>
               
            </React.Fragment>
    )
}

export default Inscription