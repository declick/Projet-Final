// Import des modules 

import pool from '../config/database.js'
import fs from 'fs'
import formidable from "formidable"

    const EditPrestationController = (req, res) =>{
        
        let modifSql = 'SELECT * FROM prestation WHERE prestation.id=?'
        
            pool.query(modifSql, [req.params.id], (error, resultModif) =>{
                if(error)throw error
                 res.json({response: true, modifSql:resultModif[0]})
            })
    }
    
    const EditAddPrestationController =(req, res) => {
        
        
        const form = formidable({keepExtensions: true})
        form.parse(req, (err, fields, files) => {
            if (err)throw err
            let oldpath = files.fichier.filepath
            let newpath = 'public/image/' + files.fichier.newFilename
            
                if(files.fichier.originalFilename !== "") {
                    fs.copyFile(oldpath, newpath, (err)=>{
                        if(err)throw err
                        
                        let modifSqlAdmin = 'UPDATE prestation SET categorie_id = (?), title = (?), description = (?), image = (?) WHERE id = (?)'
                        let imgNameSql = 'SELECT image FROM prestation WHERE id = (?)'
                        
                        pool.query(imgNameSql, [req.params.id], (error, imgName) => {
                            if(err)throw err
                            pool.query(modifSqlAdmin, [fields.editcategories, fields.edittitle, fields.editdescription, files.fichier.newFilename, req.params.id], (error, resultModif) => {
                                if(err)throw err
                                if(imgName[0].image){
                                    fs.unlink('public/image' + imgName[0].image, (error) => {
                                        if(err)throw err
                                    })
                                }
                                res.json({response: true})
                            })
                        })
                     })
                }else{
                    let subSql = 'UPDATE prestation SET categorie_id = (?), title = (?), description = (?) WHERE id = (?)'
                    
                    pool.query(subSql, [fields.editcategorie, fields.edittitle, fields.editdescription, req.paramas.id], (err, resultEdit) => {
                        if(err)throw err
                        res.json({response: true})
                    })
                }
        })
        
    }
    
    
    
export  {EditPrestationController,EditAddPrestationController}