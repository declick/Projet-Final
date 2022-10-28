import pool from '../config/database.js'
import bcrypt from 'bcrypt'

const SubmitInscriptionController = (req, res) => {

    const validRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
    const saltRounds = 10
    
    let verifSql = "SELECT email FROM user WHERE email = ?"
    
    if(req.body.email.match(validRegex)){
    if (req.body.prenom.length <= 255 && req.body.nom.length <= 255 && req.body.email.length <= 255 && req.body.mdp.length >= 8) {
                pool.query(verifSql, [req.body.email], (err,verifresult) => {
                    if(err) throw err
                        if(verifresult[0]){
                            res.json({response:false,message:"error mail"})
                        } else {
                           
                             let sql = "INSERT INTO user (role_id, prenom, nom, email, mdp, registration_date) VALUES (2,?,?,?,?,?)"
                             
                            bcrypt.hash(req.body.mdp, saltRounds, (err, hash) => {
                                if(err) throw err
                                pool.query(sql,[req.body.prenom, req.body.nom, req.body.email, hash, new Date()], (err,result) => {
                                    if (err) throw err
                                     res.json({response:true})
                                })
                            })
                        }
                })
    }else { 
        res.json({response:false, message:"c'est trop long là garçon !"})
    }
    }else{
        res.json({response:false, message:"c'est quoi cette adresse chelou ?"})
    } 
}
export default SubmitInscriptionController