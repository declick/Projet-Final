import pool from '../config/database.js'
import fs from 'fs'
// ProduitControllerAdmin prend en entrée deux paramètres, req et res, qui représentent respectivement la requête HTTP entrante et la réponse HTTP à envoyer au client
const ProduitControllerAdmin = (req, res) => {

	{ /* constante sql pour requete à la bdd*/ }
	let sql = 'SELECT * FROM produit'
	// requête SQL à l'aide de pool.query qui sélectionne tous les enregistrements de la table produit de la base de données
	pool.query(sql, (err, result) => {
		if (err) throw err
		// Si la requête échoue, elle lance une erreur
		if (result) {
			// Si la requête réussit, elle envoie une réponse au client sous forme de JSON contenant un message de confirmation et les données sélectionnées
			res.json({ response: true, message: "requête réussie", SQL: result })
		}
	})
}
// DeleteProduit prend en entrée les mêmes paramètres que ProduitControllerAdmin
const DeleteProduit = (req, res) => {

	{ /* constante sql pour requete à la bdd*/ }
	let selectSql = "SELECT image FROM produit WHERE id = (?)"
	let deleteSQL = "DELETE FROM produit WHERE id = (?)"
	// une requête SQL à l'aide de pool.query qui sélectionne l'image associée à l'enregistrement de la table produit dont l'ID correspond à celui envoyé dans la requête HTTP qui supprime l'enregistrement de la table produit dont l'ID correspond à celui envoyé dans la requête HTTP
	pool.query(selectSql, [req.params.id], (error, selectResult) => {
		if (error) throw error
		pool.query(deleteSQL, [req.params.id], (error, deleteResult) => {
			if (error) throw error
			// Si la requête réussit, elle vérifie si un nom de fichier a été sélectionné dans la première requête SQL
			if (selectResult[0].image) {
				// Si c'est le cas, elle utilise la méthode fs.unlink pour supprimer le fichier associé de la zone de stockage public/image/
				fs.unlink("public/image/" + selectResult[0].image, (error) => {
					if (error) throw error
					// envoie une réponse au client sous forme de JSON contenant un message de confirmation et les données de la requête de suppression. Si une des requêtes SQL échoue, elle lance une erreur.
					res.json({ response: true, message: "requête réussie", DELETE: deleteResult })
				})
			}

		})
	})
}

export { ProduitControllerAdmin, DeleteProduit }

