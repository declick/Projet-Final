import mysql from "mysql"

let pool  = mysql.createPool({
  connectionLimit : 10000,
    host: "db.3wa.io",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "quentinminziere", // identifiant BDD
    password: "7b181b7efe6981c26af1d34d22109c94", // le password
    database: "quentinminziere_projet", // nom de la base de donnée
});

export default pool