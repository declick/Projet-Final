
import bcrypt from 'bcrypt';
import { asyncQuery } from '../config/database.js';
import { generateToken } from "./Token.js"

const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const getUserData = async (email) => {
	let getUserSQL = "SELECT * FROM user WHERE email = ?";
	const userDataSQL = await asyncQuery(getUserSQL, [email])

	return userDataSQL[0]
}

const generateResponse = async (userDataSQL) => {
	const ADMIN_ROLE_ID = 1
	const admin = userDataSQL.role_id === ADMIN_ROLE_ID
	const userData = {
		user: true,
		admin,
		user_id: userDataSQL.id
	}
	const token = await generateToken(userData)

	return { response: true, user_id: userDataSQL.id, admin, token }
}

const SubmitConnectionController = async (req, res) => {
	const { mdp, email } = req.body
	const failJson = { response: false, message: "identifiant ou mot de passe incorrect" }
	const userDataSQL = await getUserData(email)
	const mdpMatch = userDataSQL ? await bcrypt.compare(mdp, userDataSQL.mdp) : null
	const response = (userDataSQL && mdpMatch) ? await generateResponse(userDataSQL) : failJson

	res.json(response)
}

export default SubmitConnectionController;