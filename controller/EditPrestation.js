// Import des modules 

import pool from '../config/database.js'
import form from 'formidable'
import fs from 'fs'

    const EditPrestationController = (req, res) =>{
        let sql = 'SELECT * FROM prestation WHERE prestation.id=?'
        form.parse(req, (err,fields,files) =>{
            pool.query()
            
        })
    }
    
export default EditPrestationController