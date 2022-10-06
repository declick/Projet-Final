import Home from "../Home"
import Connexion from "../Connexion"
import Inscription from "../Inscription"
import Profil from "../Profil"
import Admin from "../Admin"
import Logout from "../Logout"
import Prestation from "../Prestation"
import Produit from "../Produit"
import Apropos from "../Apropos"
import Contact from "../Contact"
import Reserver from "../Reserver"

export const routes = [
    
    { path:'/', element:<Home /> },
    { path:'/Prestation', element:<Prestation /> },
    { path:'/Produit', element:<Produit /> },
    { path:'/Apropos', element:<Apropos /> },
    { path:'/Contact', element:<Contact /> },
    { path:'/Reserver', element:<Reserver /> },
    
    { path:'/Inscription', element:<Inscription /> },
    { path:'/Connexion', element:<Connexion /> },
    { path:'/Profil', element:<Profil /> },
    { path:'/Admin', element:<Admin /> },
    { path:'/Logout', element:<Logout /> }
    
    
]

// route reserver au personne connecter
export const userPath = [
    '/Profil'  
]

// route resserver au personne connecter en admin
export const adminPath = [
    '/Admin'
]



        