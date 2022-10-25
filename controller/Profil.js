import pool from '../config/database.js'
import formidable from "formidable"

const EditUserController = (req, res) => {
        
    { /* constante sql pour requete à la bdd */}
    const sql = "SELECT user.prenom,user.nom,user.email FROM user WHERE id = ?"
    
        pool.query(sql, [req.params.id], (err, result) => {
            if (err) throw err
                res.json({response: true, SQL:result[0]})
        })

} 
    const EditAddUserController = (req, res) => {

    // const form = formidable({keepExtensions: true})

    // form.parse(req, (err,fields,files) => {
    // if (err) throw err

    //     { /* constante sql pour requete à la bdd*/ }
    //     const myUser = "SELECT prenom,nom,email FROM user WHERE id=?"
    //         pool.query(myUser,[fields.nom, fields.prenom, fields.email, fields.id], (err, resultUser) =>{
    //             if (err) throw err
    //             res.json({response: true})
    //     })
        
    //     { /* constante sql pour requete mise à juour à la bdd */ }
    //     const UpdateUser = "UPDATE user SET nom=?, prenom =?, email=? WHERE id= ?"
    //     pool.query(UpdateUser, [fields.nom, fields.prenom, fields.email, fields.id], (err, result) => {
    //         if (err) throw err
    //         res.json({response: true})
    //     })
    // })
      
}

export {EditUserController,EditAddUserController}