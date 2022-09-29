import React from "react"
import axios from 'axios'
import BASE_URL from '../config.js'

const Connexion = () => {
   
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
 
        const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/Connexion`,{
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
            
                <h1>Connexion</h1>
          
               <form>

                <label><b>email de connection : </b>
                    <input type="email" id='email' placeholder="Entrer votre adress mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                
                <label><b>Mot de passe : </b>
                    <input type="password" id='mdp' placeholder="Entrer le mot de passe" name="mdp" value={mdp} onChange={(e) => setMdp(e.target.value)} required />
                </label>
                
                    <button onClick={submit}>Valider</button>
                    
                </form>
               
            </React.Fragment>
    )
}

export default Connexion
