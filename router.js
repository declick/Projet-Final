// Import des modules 

import express from 'express'

import Connexion from './controller/Connexion.js'
import Inscription from './controller/Inscription.js'
import Contact from './controller/Contact.js'
// import {getAllUser,createUser,updateUser,deleteUser} from './controller/User.js'

const router = express.Router()

{ /* Gestionnaire de route express */ }
router.post("/api/Inscription",Inscription)

router.post("/api/Connexion",Connexion)

router.post("/api/Contact",Contact)

// router.post("/api/User/:id",getAllUser)
// router.post("/api/User",createUser)
// router.post("/api/User/:id",updateUser)
// router.post("/api/User/:id",deleteUser)

export default router
