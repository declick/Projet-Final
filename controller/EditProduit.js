// Import des modules 

import pool from '../config/database.js'
import fs from 'fs'
import formidable from "formidable"

    const EditProduitController = (req, res) =>{
        
        let modifSql = 'SELECT * FROM produit WHERE produit.id=?'
        
            pool.query(modifSql, [req.params.id], (error, resultModif) =>{
                if(error)throw error
                 res.json({response: true, modifSql:resultModif[0]})
            })
    }
    
    const EditAddProduitController =(req, res) => {
        
        const form = formidable({keepExtensions: true})
        form.parse(req, (err, fields, files) => {
            if (err)throw err
            let oldpath = files.fichier.filepath
            let newpath = 'public/image/' + files.fichier.newFilename
            
                if(files.fichier.originalFilename !== "") {
                    fs.copyFile(oldpath, newpath, (err)=>{
                        if(err)throw err
                        
                        let modifSqlAdmin = 'UPDATE produit SET title = (?), description = (?), image = (?) , price = (?) WHERE id = (?)'
                        let imgNameSql = 'SELECT image FROM produit WHERE id = (?)'
                        
                        pool.query(imgNameSql, [req.params.id], (error, imgName) => {
                            if(err)throw err
                            pool.query(modifSqlAdmin, [fields.edittitle, fields.editdescription, files.fichier.newFilename, fields.editprice, req.params.id], (error, resultModif) => {
                                if(err)throw err
                                if(imgName[0].image){
                                    fs.unlink('public/image' + imgName[0].image, (error) => {
                                        if(err)throw err
                                    })
                                }
                                res.json({response: true, SQL: resultModif})
                            })
                        })
                     })
                }else{
                    let subSql = 'UPDATE produit SET title = (?), description = (?), price = (?) WHERE id = (?)'
                    
                    pool.query(subSql, [fields.edittitle, fields.editdescription, fields.editprice, req.paramas.id], (err, resultEdit) => {
                        if(err)throw err
                        res.json({response: true})
                    })
                }
        })
    }
    
export  {EditProduitController,EditAddProduitController}