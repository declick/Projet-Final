import pool from '../config/database.js'
import bcrypt from 'bcrypt'

const SubmitInscriptionController = (req, res) => {
    
    let sql = 'INSERT INTO user (role_id,prenom, nom,email, mdp, registration_date) VALUES (?, ?, ?, ?, ?, ?)'
    
const saltRounds = 10
 
    pool.query(sql, [req.body.email], (err,verifresult) => {
        if(err) throw err
        
        if(verifresult[0]){
           res.redirect("/Inscription")
            
            console.log("email deja existant")
        } else {
             let sql = "INSERT INTO user (role_id, prenom, nom,email, mdp, registration_date) VALUES (2,?,?,?,?,?)"
            
        bcrypt.hash(req.body.mdp, saltRounds, (err, hash) => {
            if(err) throw err
            
            pool.query(sql,[req.body.email, hash, req.body.mdp, new Date()], (err,result) => {
                if (err) throw err
                
                res.redirect("/connexion")
            })
        })
        }
    })
}

export default SubmitInscriptionController