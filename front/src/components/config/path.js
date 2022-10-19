import Home from "../Home"
import Connexion from "../Connexion"
import Inscription from "../Inscription"
import Profil from "../Profil"
import Logout from "../Logout"
import Prestation from "../Prestation"
import Apropos from "../Apropos"
import Contact from "../Contact"
import Reserver from "../Reserver"
import PageNotFound from "../PageNotFound"

import AdminPrestation from "../Admin"
import AddPrestation from "../AddPrestation"
import EditPrestation from "../EditPrestation"

export const routes = [
    
    { path:'/', element:<Home /> },
    { path:'/Prestation', element:<Prestation /> },
    { path:'/Apropos', element:<Apropos /> },
    { path:'/Contact', element:<Contact /> },
    { path:'/Reserver', element:<Reserver /> },
    
    { path:'/Inscription', element:<Inscription /> },
    { path:'/Connexion', element:<Connexion /> },
    { path:'/Profil', element:<Profil /> },
    { path:'/Logout', element:<Logout /> },
    
    { path:'/Admin', element:<AdminPrestation /> },
    { path:'/AddPrestation', element:<AddPrestation />},
    {path: '/EditPrestation', element:<EditPrestation />},
    { path:'*', element:<PageNotFound /> }

]

// route reserver au personne connecter
export const userPath = [
    '/Profil',
    '/Logout'
]

// route resserver au personne connecter en admin
export const adminPath = [
    '/Admin',
    '/AddPrestation',
    '/EditPrestation'
]



        