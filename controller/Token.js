// deux fonctions pour travailler avec les jetons JWT (Json Web Token).

import jwt from "jsonwebtoken"

const privateKey = 'eyJlbWFpbCI6InRlc3RAdGVzdC5mciIsInVzZXIiOnRydWUsImFkbWluIjp0cnVlLCJpYXQiOjE2NjY1MjQyNjYsImV4cCI6MTY2NjUyNzg2Nn0'
// generateToken prend en entrée un objet userData contenant les données de l'utilisateur et utilise la bibliothèque jwt pour créer un jeton JWT en utilisant une clé privée. 
// La fonction retourne le jeton JWT généré.
export const generateToken = async (userData) => {
	const Token = await jwt.sign(userData, privateKey)
	return Token
}
// verifyToken prend en entrée un jeton JWT et utilise la bibliothèque jwt pour vérifier la validité du jeton en utilisant la clé privée. 

export const verifyToken = async (Token) => {
	try {
		if (Token) {
			const jwtToken = await jwt.verify(Token, privateKey)
		// Si le jeton est valide, la fonction retourne les données de l'utilisateur contenues dans le jeton. 
			return jwtToken
		} else {
			return undefined
		}
	}
	catch (err) {
		// Si le jeton n'est pas valide, la fonction retourne undefined.
		return undefined
	}
}