// Import des modules 

import express from "express"
import bodyParser from 'body-parser'
import cors from "cors"
import router from './router.js'
import middleware from './controller/Middleware.js'

const app = express()

// On indique à express ou sont les fichiers statiques
app.use(express.static("public"))

//Pour l'utilisation du Json à la reception des données formulaire
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

//initialisation du système de sessions
app.use(middleware)
// Appel du router
app.use('/', router)

const PORT = process.env.PORT || 9300;

app.listen(PORT, console.log(`Server started on port ${PORT}`))
