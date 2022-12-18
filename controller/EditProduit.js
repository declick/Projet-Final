// Import des modules 

import pool from '../config/database.js'
import fs from 'fs'
import formidable from "formidable"
// EditProduitController prend en paramètre une requête HTTP et une réponse HTTP, et effectue une requête SQL à la base de données pour récupérer les informations d'un produit en particulier, en utilisant l'identifiant du produit passé dans l'URL de la requête HTTP
const EditProduitController = (req, res) => {

	let Sql = 'SELECT * FROM produit WHERE id=?'

	pool.query(Sql, [req.params.id], (error, resultModif) => {
		if (error) throw error
		// Si la requête réussit, elle renvoie une réponse JSON avec un champ SQL contenant les informations du produit.
		res.json({ response: true, SQL: resultModif[0] })
	})
}
// EditAddProduitController prend également en paramètre une requête HTTP et une réponse HTTP, et utilise le module formidable pour parser le formulaire envoyé avec la requête
const EditAddProduitController = (req, res) => {

	const form = formidable({ keepExtensions: true })
	const maxSize = 2000000 // Taille max des fichiers
	
	form.parse(req, (err, fields, files) => {
		if (err) throw err

		const file = files.files
		
		if (file === undefined) {
				// Si le formulaire ne contient pas de fichier, la fonction effectue une requête SQL pour mettre à jour les champs title, description et price du produit en utilisant l'identifiant du produit passé dans l'URL de la requête HTTP
			let subsql = "UPDATE produit SET title = ?, description = ?, price = ? WHERE id = ?"
			pool.query(subsql, [fields.title, fields.description, fields.price, fields.id], (err, result) => {
				if (err) throw err
				res.json({ response: true })
			})
		} else {
			let oldPath = file.filepath
			let newPath = "public/image/" + file.newFilename

			fs.copyFile(oldPath, newPath, (err) => {
				if (err) throw err

				let selectSql = "SELECT image FROM produit WHERE id = ?"
				pool.query(selectSql, [req.params.id], (err, resultSelected) => {
					if (err) throw err

					let imgsql = "UPDATE produit SET title = ? , description = ?, image = ?, price = ? WHERE id = ?"
					// 	// Si le formulaire contient un fichier, la fonction copie ce fichier dans le répertoire public/image/, puis effectue une requête SQL pour mettre à jour les champs title, description, image et price du produit, en utilisant l'identifiant du produit passé dans l'URL de la requête HTTP
			
					pool.query(imgsql, [fields.title, fields.description, file.newFilename, fields.price, fields.id], (err, result) => {
						if (err) throw err

						if (resultSelected[0].image !== null) {

							fs.unlink("public/image/" + resultSelected[0].image, (err) => {
								if (err) throw err
							})
						}
						// Si la requête réussit, elle renvoie une réponse JSON avec un champ response valant true.
						res.json({ response: true })
					})
				})
			})
		}
	})
}

export { EditProduitController, EditAddProduitController }