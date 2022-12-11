import pool from '../config/database.js'
import fs from 'fs'

const Adminmess = (req, res) => {

	{ /* constante sql pour requete à la bdd */ }
	let sql = 'SELECT COUNT(*) AS nb FROM contact'

	pool.query(sql, (err, result) => {
		if (err) throw err
		res.json({ response: true, SQL: result })
	})

}


export default Adminmess

