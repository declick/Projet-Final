import pool from '../config/database.js'
import fs from 'fs'

const ImageControllerAdmin = (req, res) => {
    
      { /* constante sql pour requete à la bdd*/}
    let sql ='SELECT * FROM image'
    
        pool.query(sql, (err, result)=>{
            if(err)throw err
                if (result) {
                    res.json({response: true, message: "requête réussie", SQL:result})
                }
        })
}

const DeleteImage = (req, res) => {
    
     { /* constante sql pour requete à la bdd */}
    const deleteImage = "DELETE FROM image WHERE id = ?"
    
        pool.query(deleteImage, [req.params.id], (err, deleteResult) => {
            if (err) throw err
            if (deleteResult) {
                res.json({response: true, message: "suppression réussie", DELETE:deleteResult})
            }
        })
}

export {ImageControllerAdmin,DeleteImage}

  