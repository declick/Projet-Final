// Import des module

import pool from '../config/database.js'
import fs from 'fs'
import formidable from "formidable"

const EditPrestationController = (req, res) => {

	let sql = 'SELECT * FROM prestation WHERE id=?'

	pool.query(sql, [req.params.id], (error, resultModif) => {
		if (error) throw error
		res.json({ response: true, SQL: resultModif[0] })
	})
}

const EditAddPrestationController = (req, res) => {

	const form = formidable({ keepExtensions: true })
	const maxSize = 2000000 // Taille max des fichiers
	
	form.parse(req, (err, fields, files) => {
		if (err) throw err

		const file = files.files

		if (file === undefined) {

			let subsql = "UPDATE prestation SET categorie_id = ?, title = ? , description = ? WHERE id = ?"
			pool.query(subsql, [fields.categorie_id, fields.title, fields.description, fields.id], (err, result) => {
				if (err) throw err
				res.json({ response: true })
			})
		} else {
			let oldPath = file.filepath
			let newPath = "public/image/" + file.newFilename

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
						res.json({ response: true })
					})
				})
			})
		}
	})
}

export { EditPrestationController, EditAddPrestationController }