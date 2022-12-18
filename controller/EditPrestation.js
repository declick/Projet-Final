// Import des module

import pool from '../config/database.js'
import fs from 'fs'
import formidable from "formidable"


//La fonction EditPrestationController envoie une requête SELECT à une base de données MySQL pour récupérer des informations sur une prestation avec un ID donné. 
const EditPrestationController = (req, res) => {

	let sql = 'SELECT * FROM prestation WHERE id=?'
	//L'ID est passé en paramètre dans l'objet de la requête (req.params.id). 
	pool.query(sql, [req.params.id], (error, resultModif) => {
		if (error) throw error
		res.json({ response: true, SQL: resultModif[0] })
	})
}

const EditAddPrestationController = (req, res) => {

	//La fonction EditAddPrestationController utilise le module form idable pour analyser la soumission d'un formulaire dans une requête HTTP. 
	const form = formidable({ keepExtensions: true })
	const maxSize = 2000000 // Taille max des fichiers
	
	form.parse(req, (err, fields, files) => {
		if (err) throw err
		
		const file = files.files
		//Elle vérifie ensuite si un fichier a été inclus dans la soumission du formulaire. 
		if (file === undefined) {
			// Si aucun fichier n'a été inclus, la fonction envoie une requête UPDATE à la base de données MySQL pour mettre à jour les informations de la prestation avec les données de la soumission du formulaire. 
			let subsql = "UPDATE prestation SET categorie_id = ?, title = ? , description = ? WHERE id = ?"
			pool.query(subsql, [fields.categorie_id, fields.title, fields.description, fields.id], (err, result) => {
				if (err) throw err
				// Si la requête est réussie, la fonction envoie une réponse JSON avec une clé response définie sur true et les informations de la prestation récupérée dans une clé SQL.
				res.json({ response: true })
			})
		} else {
			let oldPath = file.filepath
			let newPath = "public/image/" + file.newFilename

			// Si un fichier a été inclus, la fonction copie le fichier vers un nouvel emplacement, envoie une requête UPDATE à la base de données MySQL pour mettre à jour les informations de la prestation avec les données de la soumission du formulaire et le nouveau nom de fichier, puis supprime l'ancien fichier. 
			fs.copyFile(oldPath, newPath, (err) => {
				if (err) throw err

				let selectSql = "SELECT image FROM prestation WHERE id = ?"
				pool.query(selectSql, [req.params.id], (err, resultSelected) => {
					if (err) throw err

					let imgsql = "UPDATE prestation SET categorie_id = ?, title = ? , description = ?, image = ? WHERE id = ?"

					pool.query(imgsql, [fields.categorie_id, fields.title, fields.description, file.newFilename, fields.id], (err, result) => {
						if (err) throw err

						if (resultSelected[0].image !== null) {

							fs.unlink("public/image/" + resultSelected[0].image, (err) => {
								if (err) throw err
							})
						}
						//Dans les deux cas, la fonction envoie une réponse JSON avec une clé response définie sur true en cas de réussite.
						res.json({ response: true })
					})
				})
			})
		}
	})
}

export { EditPrestationController, EditAddPrestationController }














