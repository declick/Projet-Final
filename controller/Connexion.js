// // Import des modules 

// import pool from '../config/database.js'
// import bcrypt from 'bcrypt'
// import {asyncQuery} from '../config/database.js';
// import {generateToken} from "../controllers/token.js"

// const SubmitConnectionController = (req, res) => {

//     const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

//         // Requete à la base de données
    
//     let connection = "SELECT * FROM user WHERE user.email = (?)"
//     pool.query(connection, [req.body.email], (err, user) =>{
//         if (err) throw err
//         if(user[0]){
//                 bcrypt.compare(req.body.mdp,user[0].mdp, (err, result) => {
//                     if (err) throw err
//                         if(result){
                         
                                
//                                 const admin = user[0].role_id === 1
                                
            
//                                 res.json({response:true, message:"connecter",admin, user })
                  
//                 })
//         }else{
//              res.json({response:false})
//         }
//     })
// }
// export default SubmitConnectionController


import bcrypt from 'bcrypt';
import {asyncQuery} from '../config/database.js';
import {generateToken} from "./Token.js"

 const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const getUserData = async (email) => {
    let getUserSQL = "SELECT * FROM user WHERE email = ?";
    const userDataSQL = await asyncQuery(getUserSQL,[email])
    
    return userDataSQL[0]
}

const generateResponse = async (userDataSQL) => {
    const ADMIN_ROLE_ID = 1
    const admin = userDataSQL.role_id === ADMIN_ROLE_ID
    const userData = { 
        user:true,
        admin,
        user_id:userDataSQL.id
    }
    const token = await generateToken(userData)
    
    return {response:true, user_id:userDataSQL.id, admin, token}
}

const SubmitConnectionController = async (req, res) => {
    const {mdp, email} = req.body
    const failJson = {response:false, message:"identifiant ou mot de passe incorrect"}
    const userDataSQL = await getUserData(email)
    const mdpMatch = userDataSQL ? await bcrypt.compare(mdp, userDataSQL.mdp) : null
    const response = (userDataSQL && mdpMatch) ? await generateResponse(userDataSQL): failJson
    
    res.json(response)
}

export default SubmitConnectionController;