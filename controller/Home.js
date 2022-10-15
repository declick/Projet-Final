// Import des modules 

import pool from '../config/database.js'

    const HomeController = (req, res) => {
        
       let sql = 'SELECT * FROM prestation LIMIT 6'
            pool.query(sql, (err, result) => {
                if (err)throw err
                    res.json({response: true,SQL:result })
            })
    }
export default HomeController