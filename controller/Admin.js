import pool from '../config/database.js'
import fs from 'fs'

const AdminPrestationController = (req, res) => {
      { /* constante sql pour requete à la bdd*/}
    let sql ='SELECT prestation.*, categorie.title AS catetitle FROM prestation JOIN categorie ON categorie.id = prestation.categorie_id'
        pool.query(sql, (err, result)=>{
            if(err)throw err
                 if (result) {
            res.json({response: true, message: "requête réussie", SQL:result})
        }
        })
}

export default AdminPrestationController