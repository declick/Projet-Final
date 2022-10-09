//import de module
import pool from '../config/database.js'

export const getAllUser = (req, res) => {
    
    let sql = 'SELECT * FROM user'
   
    pool.query(sql,  (error, result) =>{
        if (error) throw error
    res.json({response: true})
    })
}

const AdminController = (req,res) => {
    
    let sqlContact = "SELECT * FROM user"
        
        pool.query (sqlContact, (error, result) => {
            if (error) throw error
            res.json({response:true})
        })  
    
}



const UpdateAdminController = (req, res) => {
    
    let sqlUpdate = "UPDATE user SET prenom=(?), nom=(?), email=(?), text=(?) WHERE id =(?)"
    
    pool.query(sqlUpdate, (error, result) => {
        if (error) throw error
            res.json({response:true})
    })
    
}

const DeleteAdminController = (req, res) =>{
    
    let selectSqlContact = "SELECT * FROM contact id=(?)"    
    let deleteSqlContact = "DELETE FROM contact id=(?)"
    
    const idDeleted = Object.keys(res.body)
    
    pool.query(selectSqlContact,idDeleted, (error, selectSqlResult) => {
        if (error) throw error
        pool.query(deleteSqlContact, idDeleted, (error, deleteResult) => {
            if (error) throw error
               
        })
    })
    
}



export {AdminController,UpdateAdminController,DeleteAdminController}