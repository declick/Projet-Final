import pool from '../config/database.js'

const GetUsersController = (req, res) => {
    { /* constante sql pour requete à la bdd*/
    }
    const users = "SELECT * FROM user"
    pool.query(users, (err, users) => {
        if (err) throw err
        if (users) {
            res.json({response: true, message: "requête réussie", users})
        }
    })
}

const DeleteUserController = (req, res) => {
    { /* constante sql pour requete à la bdd*/
    }
    const deleteUser = "DELETE FROM user WHERE id = ?"
    pool.query(deleteUser, [req.body.id], (err, result) => {
        if (err) throw err
        if (result) {
            res.json({response: true, message: "suppression réussie", result})
        }
    })
}

const UpdateUserController = (req, res) => {
    { /* constante sql pour requete à la bdd*/
    }
    const updateUser = "UPDATE user set nom = ?, set prenom = ?, set email = ? WHERE id = ?"
    pool.query(updateUser, [req.body.nom, req.body.prenom, req.body.email, req.body.id], (err, result) => {
        if (err) throw err
        if (result) {
            res.json({response: true, message: "mise à jour réussie", result})
        }
    })
}

const AddUserController = (req, res) => {
    { /* constante sql pour requete à la bdd*/
    }
    const updateUser = "INSERT INTO user (role_id, prenom, nom, email , mdp, registration_date) VALUES (req.body.role_id, req.body.prenom, req.body.nom, req.body.email, req.body.registration_date)"
    pool.query(updateUser, (err, result) => {
        if (err) throw err
        if (result) {
            res.json({response: true, message: "création réussie", result})
        }
    })
}

export { GetUsersController, DeleteUserController, UpdateUserController, AddUserController }