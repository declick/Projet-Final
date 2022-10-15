// Import des modules 

import pool from '../config/database.js'

    const PrestationController = (req, res) =>{
        
        let sql = 'SELECT * FROM prestation'
       
            pool.query(sql, (err, result) => {
                if (err)throw err
                    res.json({response: true,SQL:result })
            })
    }
    
export default PrestationController