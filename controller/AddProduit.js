// Import des modules 

import pool from '../config/database.js'
import formidable from "formidable";
import fs from 'fs'

const AddProduitController = (req, res) => {
	// // checkAcceptedExtensions qui vérifie si l'extension du fichier envoyé par le client est acceptée ou non. Les extensions acceptées sont celles contenues dans la liste accepted
	const checkAcceptedExtensions = (file) => {
		const type = file.mimetype.split('/').pop()
		const accepted = ['jpg', 'jpeg', 'png', 'svg', 'gif', 'pdf']
		// Si l'extension du fichier est acceptée, la fonction renvoie true, sinon elle renvoie false.
		if (accepted.includes(type)) {
			return true
		}
		return false
	}
	// form en utilisant la bibliothèque formidable et en lui indiquant de conserver les extensions des fichiers.
	const form = formidable({ keepExtentsions: true })
	const maxSize = 2000000 // maxSize qui contient la taille maximale autorisée pour les fichiers envoyés par le client (2 millions d'octets).
	// parse de l'objet form pour traiter la requête envoyée par le client. Cette méthode prend en entrée la requête et deux fonctions de callback
	// Si l'opération de parsing se déroule sans erreur, la première fonction de callback est appelée avec en argument err qui vaut null et les objets fields et files qui contiennent respectivement les champs de formulaire et les fichiers envoyés par le client
	form.parse(req, (err, fields, files) => {
		// Si une erreur survient, la première fonction de callback est appelée avec en argument err qui contient l'objet Error correspondant à l'erreur qui s'est produite.
		if (err) throw err
		// newFilename et oldPath qui contiennent respectivement le nom du fichier et le chemin du fichier envoyé par le client.
		let newFilename = files.files.newFilename
		let oldPath = files.files.filepath
		// newPath qui contient le chemin où le fichier doit être enregistré sur le serveur.
		let newPath = `public/image/${newFilename}`
		// file qui contient l'objet files.files envoyé par le client.
		const file = files.files
		// Si le client a envoyé un fichier (files.originalFilename n'est pas vide), la fonction vérifie si l'extension du fichier est acceptée grâce à la fonction checkAcceptedExtensions
		if (files.originalFilename !== '') {
			if (checkAcceptedExtensions(file)) {
				// Si l'extension est acceptée, la fonction copie le fichier du chemin oldPath au chemin newPath en utilisant la méthode copyFile de la bibliothèque fs
				fs.copyFile(oldPath, newPath, (err) => {
					if (err) throw err
					// addProduit  contient une requête SQL permettant une requete à la bdd
					const addProduit = "INSERT INTO produit (title, description, image, price) VALUE (?,?,?,?)"
					console.log(fields)
					let AddProduitReq = [fields.title, fields.description, newFilename, fields.price]
					pool.query(addProduit, AddProduitReq, (err, resultProduit) => {
						if (err) throw err
						if (resultProduit) {
							res.json({ response: true, message: "création réussie", resultProduit })
						}
					})
				})
			}
		}
	})
}

export default AddProduitController
