import pool from '../data/config.js'
import DbConnection from "./dbModel";
import profilModel from "../models/profilModel";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import dateFormat from "dateformat";
import multer from "multer";
import forumModel from "../models/forumModel";
import generator from "generate-password";
import nodemailer from "nodemailer";

//import DbConnection from './dbXModel';



const profil = (req, res ) => {
    
    const getUser =( id ) =>{
        const connection = ("SELECT * FROM user WHERE id=?", [id])
            pool.query(connection, [req.body.id])

    if (existIdSession.rows.length > 0) {
         
            console.log(userToShow);
            return res.status(200).send( userToShow.rows );
        } else {
            return res.status(200).send("Veuillez vous reconnecter");
        }
}
}

async function updateUser ( id,nom, prenom,email ) {
    const connection = new DbConnection()
    return await connection.performQuery("UPDATE user SET nom=?, prenom=?, email=? WHERE id=?",
     [ nom, prenom, email, id])
}

async function updateUserPassword ( id, mdp ) {
    const connection = new DbConnection()
    return await connection.performQuery("UPDATE user SET mdp=? WHERE id=?",[ mdp, id ])
}

async function deleteUser (id) {
    const connection = new DbConnection();
    return await connection.performQuery("DELETE FROM user WHERE id=?", [id])
}

export default { 
    getUser,
    updateUser,
    updateUserPassword,
    deleteUser
};



async function updateUser ( req, res ) {
    const { user } = req.body;
    console.log(user);
    let existIdSession = await profilModel.getIdSession( user[0]['idSession']);
    if (existIdSession.rows.length > 0) {
        if (user[0]['idSession'] == existIdSession.rows[0]['idSession']) {
            let oldUser = (await profilModel.getUserProfil( user[0]['idSession'])).rows;
            if (oldUser != null){
                if ( user[0]['pseudo'] == ""){
                    user[0]['pseudo'] = oldUser[0].pseudo;
                }
                if ( user[0]['photoUrl'] == ""){
                    user[0]['photoUrl'] = oldUser[0].photoUrl;
                }
                if ( user[0]['firstName'] == ""){
                    user[0]['firstName'] = oldUser[0].firstName;
                }
                if ( user[0]['name'] == ""){
                    user[0]['name'] = oldUser[0].name;
                }
                if ( user[0]['phone'] == ""){
                    user[0]['phone'] = oldUser[0].phone;
                }
                if ( user[0]['age'] == ""){
                    user[0]['age'] = oldUser[0].age;
                }
                if ( user[0]['voluntary'] == ""){
                    user[0]['voluntary'] = oldUser[0].voluntary;
                }
                if ( user[0]['idTown'] == ""){
                    user[0]['idTown'] = oldUser[0].idTown;
                }
                let idSession = uuidv4();
                await profilModel.updateUser(user[0]['idUser'], idSession, user[0]['pseudo'], user[0]['photoUrl'],
                    user[0]['firstName'], user[0]['name'], user[0]['phone'], user[0]['age'], user[0]['voluntary'], user[0]['idTown']);
                let userToShow = await profilModel.getUserProfil( idSession );
                console.log(userToShow.rows);
                return res.status(200).send({user: userToShow.rows});
            } else {
                return res.status(500).send ("Internal error");
            }
        } else {
            return res.status(200).send("Veuillez vous reconnecter");
        }
    } else {
        return res.status(200).send("Veuillez vous reconnecter");
    }
}

async function getTownList( req, res ){
    const { user } = req.body;
    if (await profilModel.getUserIdSession( user[0]['idSession'] )){
        let towns = await profilModel.getTownList(user[0]['town'][0]['townCp']);
        return res.status(200).send( towns.rows );
    }
}

async function resetPassword( req, res ){
    const { user } = req.body;
    console.log(user);
    let userWantReset = await profilModel.getUser( user[0]['pseudo'] );
    if (userWantReset.rows.length != 0){
        if (user[0]['pseudo'] === userWantReset.rows[0].pseudo){
            if (user[0]['mail'] === userWantReset.rows[0].mail){
                let password = generator.generate({ length: 10, numbers: true });
                let askReset = 1;
                const salt = await bcrypt.genSalt(saltRounds);
                let hashPassword = await bcrypt.hash(password, salt);
                console.log(userWantReset.rows);
                await profilModel.updateUserPassword(userWantReset.rows[0].idUser, hashPassword, askReset);
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'dev.web.elora@gmail.com',
                        pass: 'DwE_Google13122016'
                    }
                });

                var mailOptions = {
                    from: 'dev.web.elora@gmail.com',
                    to: `${userWantReset.rows[0].mail}`,
                    subject: 'Votre nouveau mot de passe',
                    text:  `Bonjour,
                    Nous avons le plaisir de vous envoyer ce nouveau mot de passe : ${password}. 
                    Veuillez à le modifier ou le conserver précieusement, 
                    Cordialement, l'équipe Par'Anges S.O.S by DEV-WEB-ELORA.`
                };

                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                return res.status(200).send("Veuillez consulter vos courriers électroniques pour récupérer votre nouveau mot de passe");
            } else {
                return res.status(202).send("le mail ne correspond pas au pseudo");
            }
        }
    } else {
        return res.status(201).send("le pseudo n'est pas dans notre base de données");
    }
}

async function changePassword (req, res ) {
    const { user } = req.body;
    console.log(user);
    let userToChange = await profilModel.getUser( user[0]['pseudo']);
    const validPassword = await bcrypt.compare(user[0]['password'], userToLog.rows[0].password);
    if (validPassword){
        if (userToChange.rows[0].mail == user[0]['mail']){
            let idSession = uuidv4();
            const salt = await bcrypt.genSalt(saltRounds);
            let hashPassword = await bcrypt.hash(password, salt);
            let askReset = 0;
            if (profilModel.updateUserPassword(userToChange.rows[0].idUser, idSession, hashPassword, askReset)) {
                let logUser = await profilModel.getUserIdSession(userToChange.rows[0].idUser);
                console.log(logUser);
                return res.status(200).send( logUser.rows );
            } else {
                return res.status(401).send("Erreur de connexion");
            }
        } else {
            return res.status(200).send("Wrong Mail");
        }
    } else {
        return res.status(400). send("Wrong Password");
    }
}

async function changeMail (req, res ) {
    const { user } = req.body;
    console.log(user);
    let existIdSession = await profilModel.getIdSession( user[0]['idSession']);
    if (existIdSession.rows.length > 0) {
        if ( user[0]['idSession'] == existIdSession.rows[0]['idSession']){
            let userToShow = await profilModel.getUserProfil( user[0]['idSession']);
            console.log(userToShow);
            return res.status(200).send( userToShow.rows );
        } else {
            return res.status(200).send("Veuillez vous reconnecter");
        }
    } else {
        return res.status(200).send("Veuillez vous reconnecter");
    }
}

const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
        cb(new Error('Please upload an image.'))
    }
    cb(undefined, true)
    }
})


export default { 
    getUsers,
    login,
    register,
    profil,
    updateUser,
    getTownList,
    resetPassword,
    changePassword,
    changeMail
};