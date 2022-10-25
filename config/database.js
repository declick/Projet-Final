import mysql from "mysql"
import util from "util"

let pool  = mysql.createPool({
  connectionLimit : 10000,
    host: "db.3wa.io",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "quentinminziere", // identifiant BDD
    password: "7b181b7efe6981c26af1d34d22109c94", // le password
    database: "quentinminziere_projet", // nom de la base de donnée
});

// pour creer des requet sql async
export const query = util.promisify(pool.query).bind(pool)

// permet d'obtenir le resultat des requete sql async
export const asyncQuery = async (sql, params) => {
    try {
        const rows = await query(sql, params)
        return rows
    } catch(err) {
        console.log(err)
    }
}

export default pool