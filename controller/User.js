import pool from '../data/config.js'

export const getAllUser = (req, res) => {
    
    let sql = 'SELECT * FROM contact WHERE id=(?)'
   
    pool.query(sql,  (error, result) =>{
        if (error) throw error
    res.json({response: true})
    })
}

export const createUser = (req, res) => {
    
}
export const updateUser = (req, res) => {
    
}
export const deleteUser = (req, res) => {
    
}