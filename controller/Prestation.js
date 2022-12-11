// Import des modules 

import pool from '../config/database.js'

const PrestationController = (req, res) => {

	let sql = 'SELECT prestation.id,prestation.title,prestation.description,prestation.image, categorie.title AS cate_title FROM prestation JOIN categorie ON categorie.id = prestation.categorie_id ORDER BY categorie.title'

	pool.query(sql, (err, result) => {
		if (err) throw err
		res.json({ response: true, SQL: result })
	})
}

export default PrestationController
