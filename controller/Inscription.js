import pool from '../config/database.js'
import bcrypt from 'bcrypt'


const SubmitInscriptionController = (req, res) => {
    
const saltRounds = 10
 
  let sql = 'INSERT INTO users (roles_id,pseudo, email, mdp, registration_date) VALUES (?, ?, ?, ?, ?)'
 
    bcrypt.hash(req.body.mdp, saltRounds, (err, hash) =>{
        if (err) throw err

        pool.query(sql, [req.body.roles_id, req.body.pseudo, req.body.email, hash ,new Date()], (err, hash) => {
            if (err) throw err
            res.redirect("/Connection")
        })  
    })
}

export default SubmitInscriptionController