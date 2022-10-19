// Import des modules 

import express from 'express'

import SubmitConnectionController from './controller/Connexion.js'
import SubmitInscriptionController from './controller/Inscription.js'
import SubmitContactController from './controller/Contact.js'
import UserController from './controller/Profil.js'
import AproposController from './controller/Apropos.js'
import HomeController from './controller/Home.js'
import PrestationController from './controller/Prestation.js'
import Logout from './controller/Logout.js'

import {AdminPrestationController,DeletePrestationAdmin} from './controller/Admin.js'
import AddPrestationController from './controller/AddPrestation.js'
import {EditPrestationController,EditAddPrestationController} from './controller/EditPrestation.js'

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
//** routes logout **/
router.get("/api/Logout",Logout)

//** route Admin **/
router.get("/api/Admin",AdminPrestationController)
router.post("/api/Admin/:id", DeletePrestationAdmin)
router.post("/api/AddPrestation" ,AddPrestationController)
router.post("api/EditPrestation/:id" ,EditPrestationController,EditAddPrestationController)

export default router
