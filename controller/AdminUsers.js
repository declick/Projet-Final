import pool from '../config/database.js'


// Affichage User
const UsersController = (req, res) => {
        
        { /* constante sql pour requete à la bdd */}
       let sql = 'SELECT * FROM user'
       
            pool.query(sql, (err, result) => {
                if (err)throw err
                    res.json({response: true,SQL:result })
            })
    }
    
// Suppression User    
const DeleteUserController = (req, res) => {
        
    { /* constante sql pour requete à la bdd */}
    const deleteMessage = "DELETE FROM user WHERE id = ?"
    
        pool.query(deleteMessage, [req.params.id], (err, deleteResult) => {
            if (err) throw err
            if (deleteResult) {
                res.json({response: true, message: "suppression réussie", DELETE:deleteResult})
            }
        })
}
    
export {UsersController,DeleteUserController}