// Import des modules 

import express from 'express'

import SubmitConnectionController from './controller/Connexion.js'
import SubmitInscriptionController from './controller/Inscription.js'
import SubmitContactController from './controller/Contact.js'

import {EditUserController,EditAddUserController,DeleteUser} from './controller/Profil.js'

import AproposController from './controller/Apropos.js'
import HomeController from './controller/Home.js'
import PrestationController from './controller/Prestation.js'
import ProduitController from './controller/Produit.js'

import Admin from './controller/Admin.js'

import {PrestationControllerAdmin,DeletePrestation} from './controller/AdminPrestation.js'
import AddPrestationController from './controller/AddPrestation.js'
import {EditPrestationController,EditAddPrestationController} from './controller/EditPrestation.js'

import {ProduitControllerAdmin,DeleteProduit} from './controller/AdminProduit.js'
import AddProduitController from './controller/AddProduit.js'
import {EditProduitController,EditAddProduitController} from './controller/EditProduit.js'

import {MessageController,DeleteMessageController} from './controller/AdminMessage.js'
import {UsersController,DeleteUserController} from './controller/AdminUsers.js'

import IsLogged from "./controller/IsLogged.js"

const router = express.Router()

const defaultJson = (req, res) => {
    res.json({
        response:true
    });
}

//** Gestionnaire de route express **/ 
router.get("/api/adminPath", (req,res) => {
    res.json({response:true, msg:'admin path'})
})
router.get("/api/userPath", (req,res) => {
    res.json({response:true, msg:'user path'})
})
router.get("/api/publicPath", (req,res) => {
    res.json({response:true, msg:'public path'})
})
router.post("/api/IsLogged", IsLogged)

//** route Accueil **/
router.get("/api/Home", HomeController)

//** route Prestation **/
router.get("/api/Prestation",PrestationController)

//** route Produit **/
router.get("/api/Produit",ProduitController)

//** route GET Profil **/
router.get("/api/Profil/:id",EditUserController)
//** route UPDATE Profil **/
router.post("/api/Profil/:id",EditAddUserController) 
//** route DELETE Profil **/
router.post("/api/DeleteProfil/:id", DeleteUser)

//** route Contact **/
router.post("/api/Contact",SubmitContactController)

//** route a propos **/
router.get("/api/Apropos",AproposController)

//** routes Connexion **/
router.post("/api/Inscription",SubmitInscriptionController)
router.post("/api/Connexion",SubmitConnectionController)

//** ----------------------------------------------------------------------- **/

//** route Admin **/
router.get("/api/Admin",Admin)

//** route GET Prestation **/
router.get("/api/AdminPrestation", PrestationControllerAdmin)
//** route DELETE Prestation **/
router.post("/api/AdminPrestation/:id", DeletePrestation)
//** route ADD Prestation **/
router.post("/api/AddPrestation" ,AddPrestationController)
//** route EDIT Prestation **/
router.get("/api/EditPrestation/:id" ,EditPrestationController)
//** route envoyer EDIT Prestation **/
router.post("/api/EditPrestation/:id", EditAddPrestationController)

//** route GET Produit **/
router.get("/api/AdminProduit", ProduitControllerAdmin)
//** route DELETE Produit **/
router.post("/api/AdminProduit/:id", DeleteProduit)
//** route ADD Produit **/
router.post("/api/AddProduit" ,AddProduitController)
//** route EDIT Produit **/
router.get("/api/EditProduit/:id" ,EditProduitController)
//** route envoyer EDIT Produit **/
router.post("/api/EditProduit/:id" ,EditAddProduitController)

//** route GET Message **/
router.get("/api/AdminMessage",MessageController)
//** route DELETE Message **/
router.post("/api/AdminMessage/:id",DeleteMessageController)

//** route GET User **/
router.get("/api/AdminUsers",UsersController)
//** route DELETE User **/
router.post("/api/AdminUsers/:id",DeleteUserController)

export default router