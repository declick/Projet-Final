// Import des modules 

import pool from '../config/database.js'
import bcrypt from 'bcrypt'

const SubmitConnectionController = (req, res) => {
    
        // Requete à la base de données
    let connection = "SELECT mdp, role_id FROM user WHERE user.email = ?"
    
    pool.query(connection,[req.body.email], (err,user) => {
        if (err) throw err
        if(user[0]){
            bcrypt.compare(req.body.mdp,user[0].mdp, (err, result) => {
                if (err) throw err
                if(result){
                    
                    const admin = user[0].role_id === 1
                    
                    req.session.admin = admin
                    req.session.user = !admin
                    
                    res.json({response:true, message:"connecter", admin})
                } else {
                    res.json({response:false, message:"error"})
                }
            })
        } else {
            res.json({response:false, message:"error2"})
        }
    })
    
}
export default SubmitConnectionController