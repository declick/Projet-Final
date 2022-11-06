import pool from '../config/database.js'

// Affichage Message  
const RealisationController = (req, res) => {
        
         { /* constante sql pour requete à la bdd*/}
    let sql ='SELECT * FROM image'
    
        pool.query(sql, (err, result)=>{
            if(err)throw err
                if (result) {
                    res.json({response: true, message: "requête réussie", SQL:result})
                }
        })
    }
export default RealisationController