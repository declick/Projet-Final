import pool from '../config/database.js'
import fs from 'fs'

const PrestationControllerAdmin = (req, res) => {
    
      { /* constante sql pour requete à la bdd*/}
    let sql ='SELECT prestation.*, categorie.title AS catetitle FROM prestation JOIN categorie ON categorie.id = prestation.categorie_id'
    
        pool.query(sql, (err, result)=>{
            if(err)throw err
                if (result) {
                    res.json({response: true, message: "requête réussie", SQL:result})
                }
        })
}

const DeletePrestation = (req, res) => {
    
    { /* constante sql pour requete à la bdd*/}
    let selectSql = "SELECT image FROM prestation WHERE id = (?)"
    let deleteSQL = "DELETE FROM prestation WHERE id = (?)"

        pool.query(selectSql,[req.params.id], (error, selectResult) => {
            if(error)throw error
                pool.query(deleteSQL,[req.params.id], (error, deleteResult) => {
                    if(error)throw error
                        if(selectResult[0].image){
                            fs.unlink("public/image/" + selectResult[0].image, (error) => {
                                if(error)throw error
                                    res.json({response: true,message: "requête réussie", DELETE:deleteResult })
                            })
                        }
                       
                })
        })
}

export {PrestationControllerAdmin,DeletePrestation}

  