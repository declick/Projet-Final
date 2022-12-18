// Import des modules 

import pool from '../config/database.js'
import formidable from "formidable";
import fs from 'fs'
// AddImageController qui permet d'ajouter une image dans une base de données.
const AddImageController = (req, res) => {

	const checkAcceptedExtensions = (file) => {
		const type = file.mimetype.split('/').pop()
		const accepted = ['jpg', 'jpeg', 'png', 'svg', 'gif', 'pdf']
		if (accepted.includes(type)) {
			return true
		}
		return false
	}

	const form = formidable({ keepExtentsions: true })
	const maxSize = 2000000 // Taille max des fichiers
	// formidable pour traiter les données envoyées dans la requête HTTP (ici, une image)
	form.parse(req, (err, fields, files) => {
		if (err) throw err

		let newFilename = files.files.newFilename
		let oldPath = files.files.filepath

		let newPath = `public/image/${newFilename}`
		const file = files.files
		if (files.originalFilename !== '') {
			// Elle vérifie également que l'extension de l'image est acceptée grâce à la fonction checkAcceptedExtensions
			if (checkAcceptedExtensions(file)) {
				fs.copyFile(oldPath, newPath, (err) => {
					if (err) throw err
					{ /* constante sql pour requete à la bdd*/ }
					const addImage = "INSERT INTO image (image) VALUE (?)"
					let AddImageReq = [newFilename]
					// Si l'extension est acceptée, elle copie l'image depuis son emplacement temporaire vers un emplacement de stockage permanent  et enregistre le nom de l'image dans la base de données.
					pool.query(addImage, AddImageReq, (err, resultImage) => {
						if (err) throw err
						if (resultImage) {
							res.json({ response: true, message: "création réussie", resultImage })
						}
					})
				})
			}
		}
	})
}

export default AddImageController
