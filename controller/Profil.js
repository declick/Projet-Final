import pool from '../config/database.js'

const UserController = (req, res) => {
    { /* constante sql pour requete à la bdd*/ }
    const myUser = "SELECT * FROM user WHERE id=?"
    { /*si les 3 infos à modifier ne sont pas vides*/ }
    if (req.body.email !== "" && req.body.nom !== "" && req.body.email !== "") {
        { /* constante sql pour requete mise à juour à la bdd*/ }
        const UpdateUser = "UPDATE user SET nom=?, prenom =?, email=? WHERE id= ?"
        pool.query(UpdateUser, [req.body.nom, req.body.prenom, req.body.email, req.body.id], (err, user) => {
            if (err) throw err
            console.log(1)
            { /* si update ok */ }
            if (!err) {
                pool.query(myUser, [req.body.id], (err, result) => {
                    if (err) throw err
                    console.log(2)
                    if (result) {
                        res.json({ response: true, message: "update ok" })
                    }
                })
            }
        })
        { /*sinon*/ }
    } else {
        { /*si nom pas vide et que les autres le sont*/ }
        if (req.body.nom !== "" && (req.body.prenom === "" && req.body.email === "")) {
            { /* constante sql pour requete mise à juour à la bdd*/ }
            const UpdateNom = "UPDATE user SET nom =? WHERE id= ?"
            pool.query(UpdateNom, [req.body.nom, req.body.id], (err, user) => {
                if (err) throw err
                { /* si update ok */ }
                if (!err) {
                    pool.query(myUser, [req.body.id], (err, result) => {
                        if (err) throw err
                        console.log(2)
                        if (result) {
                            res.json({ response: true, message: "update ok" })
                        }
                    })
                }
            })
            { /*si prenom pas vide et que les autres le sont*/ }
        } else if (req.body.prenom !== "" && (req.body.nom === "" && req.body.email === "")) {
            { /* constante sql pour requete mise à juour à la bdd*/ }
            const UpdatePrenom = "UPDATE user SET prenom =? WHERE id= ?"
            pool.query(UpdatePrenom, [req.body.prenom, req.body.id], (err, user) => {
                if (err) throw err
                { /* si update ok */ }
                if (!err) {
                    pool.query(myUser, [req.body.id], (err, result) => {
                        if (err) throw err
                        console.log(2)
                        if (result) {
                            res.json({ response: true, message: "update ok" })
                        }
                    })
                }
            })
            { /*si mail pas vide et que les autres le sont*/ }
        } else if (req.body.email !== "" && (req.body.nom === "" && req.body.prenom === "")) {
            { /* constante sql pour requete mise à juour à la bdd*/ }
            const UpdateEmail = "UPDATE user SET email =? WHERE id= ?"
            pool.query(UpdateEmail, [req.body.email, req.body.id], (err, user) => {
                if (err) throw err
                { /* si update ok */ }
                if (!err) {
                    pool.query(myUser, [req.body.id], (err, result) => {
                        if (err) throw err
                        console.log(2)
                        if (result) {
                            res.json({ response: true, message: "update ok" })
                        }
                    })
                }
            })
        }
    }
}
export default UserController