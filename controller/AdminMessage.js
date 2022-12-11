import pool from '../config/database.js'

// Affichage Message  
const MessageController = (req, res) => {

	{ /* constante sql pour requete à la bdd */ }
	let sql = 'SELECT * FROM contact'

	pool.query(sql, (err, result) => {
		if (err) throw err
		res.json({ response: true, SQL: result })
	})
}

// Suppression Message        
const DeleteMessageController = (req, res) => {

	{ /* constante sql pour requete à la bdd */ }
	const deleteMessage = "DELETE FROM contact WHERE id = ?"

	pool.query(deleteMessage, [req.params.id], (err, deleteResult) => {
		if (err) throw err
		if (deleteResult) {
			res.json({ response: true, message: "suppression réussie", DELETE: deleteResult })
		}
	})
}

export { MessageController, DeleteMessageController }