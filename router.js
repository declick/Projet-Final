// Import des modules 

import express from 'express'

import Connexion from './controller/Connexion.js'
import Inscription from './controller/Inscription.js'
import Contact from './controller/Contact.js'

const router = express.Router()

{ /* Gestionnaire de route express */ }
router.post("/api/Inscription",Inscription)

router.post("/api/Connexion",Connexion)

router.post("/api/Contact",Contact)



export default router
