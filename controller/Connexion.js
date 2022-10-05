// Import des modules 

import pool from '../config/database.js'
import bcrypt from 'bcrypt'

const SubmitConnectionController = (req, res) => {
    
    const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    
        // Requete à la base de données
    let connection = "SELECT mdp, role_id FROM user WHERE user.email = ?"
    if(req.body.email.match(validRegex)){
    pool.query(connection,[req.body.email], (err,user) => {
        if (err) throw err
        if(user[0]){
            bcrypt.compare(req.body.mdp,user[0].mdp, (err, result) => {
                if (err) throw err
                if(result){
                    
                    const admin = user[0].role_id === 1
                    
                    req.session.admin = admin
                    req.session.user = !admin
                    
                    res.json({response:true, message:"connecter",admin, user })
                } else {
                    res.json({response:false})
                }
            })
        } else {
            res.json({response:false})
        }
    })
    }else{
        res.json({response:false})
    }
}
export default SubmitConnectionController