import parseurl from 'parseurl';
import { verifyToken } from './Token.js'

const ADMIN = 'admin'
const USER = 'user'

//deux tableaux de routes protégées, adminPath et userPath
// protectedPath vérifie si la route actuelle est protégée pour les administrateurs ou les utilisateurs simples, ou si elle n'est pas protégée du tout. 
const protectedPath = (pathname) => {
	const adminPath = ['/Admin']
	const userPath = ['/Profil']
	//les routes protégées pour les utilisateurs administrateurs et les utilisateurs simples, respectivement.
	const protectedAdmin = adminPath.includes(pathname)
	const protectedUser = userPath.includes(pathname)

	if (protectedAdmin) {
		return ADMIN
	} else if (protectedUser) {
		return USER
	} else {
		return false
	}
}
//accesAutorized vérifie si l'accès à la route est autorisé ou non en utilisant le rôle de l'utilisateur
const accesAutorized = (pathname, userData) => {
	//Si la route est protégée pour les administrateurs, la fonction retourne la chaîne de caractères ADMIN
	if (protectedPath(pathname) === ADMIN) {
		if (userData) {
			return userData.admin
		}
		return false
		//si la route est protégée pour les utilisateurs simples, la fonction retourne la chaîne de caractères USER
	} else if (protectedPath(pathname) === USER) {
		if (userData) {
			return userData.user
		}
		return false
	} else {
		return true
	}
}

// fonction middleware qui vérifie si l'accès à une route est autorisé ou non. 
const middleware = async (req, res, next) => {
	//parseurl pour extraire le nom de la route de la requête HTTP. 
	let pathname = parseurl(req).pathname.split('/')[2];
	const token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null
	const userData = await verifyToken(token)
	if (accesAutorized(pathname, userData)) {
		next()
	} else {
		//sinon, la fonction retourne false.
		res.json({ response: false, msg: 'acces refuser' })
	}
}

export default middleware
