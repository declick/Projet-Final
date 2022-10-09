// Import des modules 

import express from 'express'
import Connexion from './controller/Connexion.js'
import Inscription from './controller/Inscription.js'
import Contact from './controller/Contact.js'
import Profil from './controller/Profil.js'

// import profilController from "./controllers/profilController";
// // import Admin from './controller/Admin.js'

const router = express.Router()

{ /* Gestionnaire de route express */ }
router.post("/api/Inscription",Inscription)

router.post("/api/Connexion",Connexion)

router.post("/api/Contact",Contact)

router.post("/api/Profil",Profil)

// router.get("/api/User",Admin)
// router.post("/api/User",createUser)
// router.post("/api/User/:id",updateUser)
// router.post("/api/User/:id",deleteUser)

//** routes profil **/
  // router.post('/login', profilController.login)
  // router.post('/register', profilController.register)
  // router.post('/profil', profilController.profil)
  // router.post('/modifyProfil', profilController.profil)
  // router.post('/chooseTown', profilController.getTownList)
  // router.post('/updateProfil', profilController.updateUser)
  // router.post('/resetPassword', profilController.resetPassword)
  // router.post('/changePassword', profilController.changePassword)
  // router.post('/changeMail', profilController.changeMail)

export default router
