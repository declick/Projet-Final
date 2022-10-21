// Import des modules 

import pool from '../config/database.js'

    const HomeController = (req, res) => {
        
       let sql = 'SELECT prestation.* , categorie.title AS catetile FROM prestation JOIN categorie ON categorie.id = prestation.categorie_id LIMIT 3'
          
            pool.query(sql, (err, result) => {
                if (err)throw err
                    res.json({response: true, SQL:result })
            })
    }
export default HomeController