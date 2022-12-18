import pool from '../config/database.js'
import fs from 'fs'
// PrestationControllerAdmin envoie une requête à la base de données pour récupérer les prestations de toutes les catégories, ainsi que le titre de ces catégories
const PrestationControllerAdmin = (req, res) => {

	{ /* constante sql pour requete à la bdd*/ }
	let sql = 'SELECT prestation.*, categorie.title AS catetitle FROM prestation JOIN categorie ON categorie.id = prestation.categorie_id'

	pool.query(sql, (err, result) => {
		if (err) throw err
		if (result) {
			// Si la requête est réussie, elle envoie une réponse avec un objet contenant une propriété SQL qui contient les données récupérées de la base de données.
			res.json({ response: true, message: "requête réussie", SQL: result })
		}
	})
}
// DeletePrestation supprime une prestation de la base de données en utilisant son ID et en envoyant une requête DELETE.
const DeletePrestation = (req, res) => {

	{ /* constante sql pour requete à la bdd*/ }
	let selectSql = "SELECT image FROM prestation WHERE id = (?)"
	let deleteSQL = "DELETE FROM prestation WHERE id = (?)"
	// // Elle récupère également le nom de l'image associée à la prestation avant de la supprimer, puis supprime l'image du serveur
	pool.query(selectSql, [req.params.id], (error, selectResult) => {
		if (error) throw error
		pool.query(deleteSQL, [req.params.id], (error, deleteResult) => {
			if (error) throw error
			if (selectResult[0].image) {
				fs.unlink("public/image/" + selectResult[0].image, (error) => {
					if (error) throw error
					// Si la suppression est réussie, elle envoie une réponse avec un objet contenant une propriété DELETE qui contient le résultat de la requête DELETE.
					res.json({ response: true, message: "requête réussie", DELETE: deleteResult })
				})
			}

		})
	})
}

export { PrestationControllerAdmin, DeletePrestation }

