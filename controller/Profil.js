import pool from '../config/database.js'

// const deletUser = (req, res) => {
//         let suppSQL = "DELETE FROM user WHERE user.id=?"
        
//         pool.query(suppSQL, [req.body.id],(err, result) =>{
//             if(err) throw err
//                 req.session.destroy((err) => {
//                     if (result) {
//                             console.log("hello")
//                     res.json({response: true, message: "suppression réussie", result})
//                         if(err){
//                             res.json({response: false, message: "On recommence ?"})
//                         }
//                     }
//                 }    
//         )}
//   )}
   
const UserController = (req, res) => {

    { /* constante sql pour requete à la bdd*/ }
    const myUser = "SELECT * FROM user WHERE id=?"
    { /* récupération des données de la requête */ }
    { /* en 1er je m'assure que les 3 données ne sont pas null pour la suite de la progression */ }
    { /* en effet je met soit en variable vide ou si selon ce que je reçois en données */ }
    { /* j'utilise la fonction trim() afin de retirer les espace blancs en début et fin de chaine ce qui m'assure de ne pas avoir ' ' */ }
    let leNom = ''
    if (req.body.nom != null) {
        leNom = req.body.nom.trim()
    }
    let lePrenom = ''
    if (req.body.prenom != null) {
        lePrenom = req.body.prenom.trim()
    }
    let lEmail = ''
    if (req.body.email != null) {
        lEmail = req.body.email.trim()
    }

    { /* puis je poursuis si le 3 données ne sont pas vides */ }
    if (lEmail != "" && leNom != "" && lePrenom != "") {
        { /* constante sql pour requete mise à juour à la bdd */ }
        const UpdateUser = "UPDATE user SET nom=?, prenom =?, email=? WHERE id= ?"
        pool.query(UpdateUser, [leNom, lePrenom, lEmail, req.body.id], (err, result) => {
            if (err) throw err
            { /* si update ok */ }
            if (result) {
                pool.query(myUser, [req.body.id], (err, user) => {
                    if (err) throw err
                    console.log('je passe là')
                    console.log(err)
                    if (user) {
                        res.json({ response: true, message: "update ok" , user})
                    }
                })
            }
        })
    }
}
export default UserController