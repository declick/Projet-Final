// Import des modules 

import express from 'express'

import SubmitConnectionController from './controller/Connexion.js'
import SubmitInscriptionController from './controller/Inscription.js'
import SubmitContactController from './controller/Contact.js'
import UserController from './controller/Profil.js'
import AproposController from './controller/Apropos.js'
import HomeController from './controller/Home.js'
import PrestationController from './controller/Prestation.js'

import AdminPrestationController from './controller/Admin.js'

import AddPrestationController from './controller/AddPrestation.js'

const router = express.Router()

//** Gestionnaire de route express **/ 

//** route Accueil **/
router.get("/api/Home", HomeController)
//** route Prestation **/
router.get("/api/Prestation",PrestationController)
//** route profil **/
router.post("/api/Profil",UserController)
//** route Contact **/
router.post("/api/Contact",SubmitContactController)
//** route a propos **/
router.get("/api/Apropos",AproposController)
//** routes Connexion **/
router.post("/api/Inscription",SubmitInscriptionController)
router.post("/api/Connexion",SubmitConnectionController)

//** route Admin **/
router.get("/api/Admin",AdminPrestationController)
router.post("api/AddPrestation",AddPrestationController)



export default router
