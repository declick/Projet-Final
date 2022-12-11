import pool from '../config/database.js'
import fs from 'fs'

const ProduitControllerAdmin = (req, res) => {

	{ /* constante sql pour requete à la bdd*/ }
	let sql = 'SELECT * FROM produit'

	pool.query(sql, (err, result) => {
		if (err) throw err
		if (result) {
			res.json({ response: true, message: "requête réussie", SQL: result })
		}
	})
}

const DeleteProduit = (req, res) => {

	{ /* constante sql pour requete à la bdd*/ }
	let selectSql = "SELECT image FROM produit WHERE id = (?)"
	let deleteSQL = "DELETE FROM produit WHERE id = (?)"

	pool.query(selectSql, [req.params.id], (error, selectResult) => {
		if (error) throw error
		pool.query(deleteSQL, [req.params.id], (error, deleteResult) => {
			if (error) throw error
			if (selectResult[0].image) {
				fs.unlink("public/image/" + selectResult[0].image, (error) => {
					if (error) throw error
					res.json({ response: true, message: "requête réussie", DELETE: deleteResult })
				})
			}

		})
	})
}

export { ProduitControllerAdmin, DeleteProduit }

