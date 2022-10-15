// Import des modules 

import express from "express"
import bodyParser from 'body-parser'
import cors from "cors"
import router from './router.js'
import session from 'express-session'
import parseurl from 'parseurl'

const app = express()

// On indique à express ou sont les fichiers statiques
app.use(express.static("public"))

//Pour l'utilisation du Json à la reception des données formulaire
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

//initialisation du système de sessions

// création de 24h à partir des millisecondes // cookie va expirer dans 24h
const oneDay = 60 * 60 * 24

// Session middleware
app.use(session({
	secret: 'thisismysecrctekeyl8dFhgjqeng52lgRno8nv',
	resave:false,
	saveUninitialized: true,
	cookie: {
	    maxAge: oneDay
	}
}))


// Creation de la variable locale pour l'utilisation des sessions
app.use((req, res, next) => {
    
    res.locals.admin = !req.session.admin ? false : true
    
    next()
})

// Appel du router
app.use('/', router)

const PORT = process.env.PORT || 9300;

app.listen(PORT, console.log(`Server started on port ${PORT}`))
