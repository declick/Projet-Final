// La fonction utilise les fonctions verifyToken et generateToken du module Token.js pour vérifier et générer le token respectivement.
import { generateToken, verifyToken } from './Token.js'
// IsLogged qui vérifie si un utilisateur est connecté en utilisant son token d'authentification
const IsLogged = async (req, res) => {
	const userData = await verifyToken(req.body.token)
	//Si l'utilisateur est connecté, un nouveau token est généré et une réponse positive est envoyée avec les données de l'utilisateur
	if (userData) {
		const token = await generateToken(userData)
		res.json({ response: true, ...userData, token })
	} else {
		//  Si l'utilisateur n'est pas connecté, une réponse négative est envoyée
		res.json({ response: false })
	}
};

export default IsLogged