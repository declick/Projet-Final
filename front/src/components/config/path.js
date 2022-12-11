import Home from "../Home"
import Connexion from "../Connexion"
import Inscription from "../Inscription"
import Profil from "../Profil"
import Logout from "../Logout"
import Prestation from "../Prestation"
import Produit from "../Produit"
import Apropos from "../Apropos"
import Contact from "../Contact"
import Reserver from "../Reserver"
import Realisation from "../Realisation"
import PageNotFound from "../PageNotFound"

import MentionsLegales from "../MentionsLegales"
import PolitiqueDeDonnees from "../PolitiqueDeDonnees"

import Admin from "../Admin"

import AdminPrestation from "../AdminPrestation"
import AddPrestation from "../AddPrestation"
import EditPrestation from "../EditPrestation"

import AdminProduit from "../AdminProduit"
import AddProduit from "../AddProduit"
import EditProduit from "../EditProduit"

import AdminMessage from "../AdminMessage"
import AdminUsers from "../AdminUsers"

import AdminImage from "../AdminImage"
import AddImage from "../AddImage"

export const routes = [

	{ path: '/', element: <Home /> },
	{ path: '/Prestation', element: <Prestation /> },
	{ path: '/Produit', element: <Produit /> },
	{ path: '/Apropos', element: <Apropos /> },
	{ path: '/Contact', element: <Contact /> },
	{ path: '/Reserver', element: <Reserver /> },
	{ path: '/Realisation', element: <Realisation /> },
	{ path: '/Inscription', element: <Inscription /> },
	{ path: '/Connexion', element: <Connexion /> },

	{ path: '/Profil', element: <Profil /> },
	{ path: '/Logout', element: <Logout /> },

	// Dashboard Admin
	{ path: '/Admin', element: <Admin /> },
	// Admin Prestation
	{ path: '/AdminPrestation', element: <AdminPrestation /> },
	{ path: '/AddPrestation', element: <AddPrestation /> },
	{ path: '/EditPrestation/:id', element: <EditPrestation /> },
	// Admin Produit
	{ path: '/AdminProduit', element: <AdminProduit /> },
	{ path: '/AddProduit', element: <AddProduit /> },
	{ path: '/EditProduit/:id', element: <EditProduit /> },
	// Admin Message
	{ path: '/AdminMessage', element: <AdminMessage /> },
	// Admin User
	{ path: '/AdminUsers', element: <AdminUsers /> },
	// Admin Image
	{ path: '/AdminImage', element: <AdminImage /> },
	{ path: '/AddImage', element: <AddImage /> },

	{ path: '*', element: <PageNotFound /> },

	{ path: '/MentionsLegales', element: <MentionsLegales /> },
	{ path: '/PolitiqueDeDonnees', element: <PolitiqueDeDonnees /> }
]

// route reserver au personne connecter
export const userPath = [
	'/Profil',
	'/Logout',
	'/Contact'
]

// route resserver au personne connecter en admin
export const adminPath = [
	'/Admin',

	'AdminPrestation',
	'/AddPrestation',
	'/EditPrestation',

	'AdminProduit',
	'/AddProduit',
	'/EditProduit',

	'/AdminMessage',
	'/AdminUsers',

	'/AdminImage',
	'/AddImage',
]