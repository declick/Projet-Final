// Import des modules 

import pool from '../config/database.js'
import formidable from "formidable";
import fs from 'fs'

const AddPrestationController = (req, res) => {

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
	
	form.parse(req, (err, fields, files) => {
		if (err) throw err

		let newFilename = files.files.newFilename
		let oldPath = files.files.filepath

		let newPath = `public/image/${newFilename}`
		const file = files.files
		if (files.originalFilename !== '') {
			if (checkAcceptedExtensions(file)) {
				fs.copyFile(oldPath, newPath, (err) => {
					if (err) throw err
					{ /* constante sql pour requete à la bdd*/ }
					const addPrestation = "INSERT INTO prestation (categorie_id, title, description, image) VALUE (?,?,?,?)"
					console.log(fields)
					let AddPrestationReq = [fields.categorie_id, fields.title, fields.description, newFilename]
					pool.query(addPrestation, AddPrestationReq, (err, resultPrestation) => {
						if (err) throw err
						if (resultPrestation) {
							res.json({ response: true, message: "création réussie", resultPrestation })
						}
					})
				})
			}
		}
	})
}

export default AddPrestationController