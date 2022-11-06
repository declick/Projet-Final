// Import des modules 

import pool from '../config/database.js'
import formidable from "formidable";
import fs from 'fs'

    const AddImageController = (req, res) =>{
        
        const checkAcceptedExtensions = (file) =>{
            const type = file.mimetype.split('/').pop()
            const accepted = ['jpg','jpeg','png','svg', 'gif', 'pdf']
                if(accepted.includes(type)) {
                    return true
                } 
                return false
        }
        
            const form = formidable({keepExtentsions: true})
        
               form.parse(req, (err, fields, files) => {
                if (err) throw err
        
                let newFilename = files.files.newFilename
                let oldPath = files.files.filepath
                
                let newPath = `public/image/${newFilename}`
                const file = files.files
                if(files.originalFilename !== ''){
                    if(checkAcceptedExtensions(file)){
                        fs.copyFile(oldPath, newPath, (err) => {
                            if (err) throw err
                            { /* constante sql pour requete à la bdd*/}
                            const addImage = "INSERT INTO image (image) VALUE (?)"
                                let AddImageReq = [ newFilename ]
                                pool.query(addImage,AddImageReq ,(err, resultImage) => {
                                if (err) throw err
                                if (resultImage) {
                                    res.json({response: true, message: "création réussie", resultImage})
                                }
                            })
                        })
                    }}
                })
}
    
export default AddImageController
    