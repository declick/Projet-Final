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

const generateResponse = async (userDataSQL,mdpMatch) => {
    const ADMIN_ROLE_ID = 1
    const admin = userDataSQL.role_id === ADMIN_ROLE_ID
    const userData = { 
        user:true,
        admin
    }
    const token = await generateToken(userData)
    const sucessJson = {response:true, admin, user:userDataSQL, token}
    const failJson = {response:false, message:"identifiant ou mot de passe incorrect"}
    
    return mdpMatch ? sucessJson : failJson
}

const SubmitConnectionController = async (req, res) => {
    const {mdp, email} = req.body
    const userDataSQL = await getUserData(email)
    const mdpMatch = await bcrypt.compare(mdp, userDataSQL.mdp)
    const response = await generateResponse(userDataSQL, mdpMatch)
    
    res.json(response)
}

export default SubmitConnectionController;