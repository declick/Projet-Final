import pool from '../config/database.js'
import bcrypt from 'bcrypt'

const SubmitConnectionController = (req, res) => {
    
    let connection = 'SELECT mdp FROM user WHERE email = (?)'
 
    pool.query(connection, [req.body.email],(error, resultmail) => {
        if (error) throw error
        console.log(resultmail)
        // Chargez le hach à partir de votre base de données .
        if(resultmail[0]){
            bcrypt.compare(req.body.mdp,resultmail[0].mdp, (err, result) => {
                if (err) throw err
                if(result){
                    req.session.admin = true
                    console.log(req.session.admin)
                    res.redirect("/")
                } else {
                    console.log("Invalid password")
                    res.redirect("/Connection")
                }
            })
        } else {
            res.redirect("/Connection")
            console.log("Invalid email")
        }
    })
}

export default SubmitConnectionController