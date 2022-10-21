// Import des modules 

import express from 'express'

import SubmitConnectionController from './controller/Connexion.js'
import SubmitInscriptionController from './controller/Inscription.js'
import SubmitContactController from './controller/Contact.js'
import {UserController,deletUser} from './controller/Profil.js'
import AproposController from './controller/Apropos.js'
import HomeController from './controller/Home.js'
import PrestationController from './controller/Prestation.js'
import ProduitController from './controller/Produit.js'
import Logout from './controller/Logout.js'

import Admin from './controller/Admin.js'

import {PrestationControllerAdmin,DeletePrestation} from './controller/AdminPrestation.js'
import AddPrestationController from './controller/AddPrestation.js'
import {EditPrestationController,EditAddPrestationController} from './controller/EditPrestation.js'

import {ProduitControllerAdmin,DeleteProduit} from './controller/AdminProduit.js'
import AddProduitController from './controller/AddProduit.js'
import {EditProduitController,EditAddProduitController} from './controller/EditProduit.js'

import {MessageController,DeleteMessageController} from './controller/AdminMessage.js'
import {UsersController,DeleteUserController} from './controller/AdminUsers.js'

const router = express.Router()

//** Gestionnaire de route express **/ 

//** route Accueil **/
router.get("/api/Home", HomeController)
//** route Prestation **/
router.get("/api/Prestation",PrestationController)
//** route Produit **/
router.get("/api/Produit",ProduitController)
//** route profil **/
router.post("/api/Profil",UserController)
router.delete("/api/Profil/:id",deletUser)
//** route Contact **/
router.post("/api/Contact",SubmitContactController)
//** route a propos **/
router.get("/api/Apropos",AproposController)
//** routes Connexion **/
router.post("/api/Inscription",SubmitInscriptionController)
router.post("/api/Connexion",SubmitConnectionController)
//** routes logout **/
router.get("/api/Logout",Logout)

//** ----------------------------------------------------------------------- **/

//** route Admin **/
router.get("/api/Admin",Admin)

//** route Admin Prestation **/
router.get("/api/AdminPrestation", PrestationControllerAdmin)
router.post("/api/AdminPrestation/:id", DeletePrestation)
router.post("/api/AddPrestation" ,AddPrestationController)
router.post("api/EditPrestation/:id" ,EditPrestationController,EditAddPrestationController)
//** route Admin Prestation **/
router.get("/api/AdminProduit", ProduitControllerAdmin)
router.post("/api/AdminProduit/:id", DeleteProduit)
router.post("/api/AddProduit" ,AddProduitController)
router.post("api/EditProduit/:id" ,EditProduitController,EditAddProduitController)
//** route Admin Message **/
router.get("/api/AdminMessage",MessageController)
router.post("/api/AdminMessage/:id",DeleteMessageController)
//** route Admin User **/
router.get("/api/AdminUsers",UsersController)
router.post("/api/AdminUsers/:id",DeleteUserController)

export default router