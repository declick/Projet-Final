// Import des modules 

import express from 'express'
import Connexion from './controller/Connexion.js'
import Inscription from './controller/Inscription.js'

const router = express.Router()

{ /* Gestionnaire de route express */ }
router.post("/api/Inscription",Inscription)

router.post("/api/Connexion",Connexion)

export default router
