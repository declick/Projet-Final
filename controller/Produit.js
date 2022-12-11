// Import des modules 

import pool from '../config/database.js'

const ProduitController = (req, res) => {

	let sql = 'SELECT * FROM produit '

	pool.query(sql, (err, result) => {
		if (err) throw err
		res.json({ response: true, SQL: result })
	})
}

export default ProduitController