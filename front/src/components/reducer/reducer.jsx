import React from "react"
import { CONNEXION, LOGOUT, ADMIN, USER, PRESTATION, PRODUIT } from '../config/constance.js'


export const initialState = {
    connexion: false,
    admin: false,
    user: false,
    user_id: null,
    prestation: [],
    produit: []
}
{ /* reducer, est une fonction qui prend en entrée l'état actuel de l'application et une action et retourne un nouvel état en fonction de l'action. L'état initial de l'application est défini par la constante initialState. */ }
export const reducer = (state, action) => {
    switch (action.type) {
        //switch pour exécuter différentes actions en fonction du type de l'action reçue. 
        //Par exemple, si l'action est de type CONNEXION, le reducer met à jour l'état pour indiquer que l'utilisateur est connecté et enregistre l'identifiant de l'utilisateur
        case CONNEXION:
            return { ...state, connexion: true, user_id: action.payload }
        case ADMIN:
            return { ...state, admin: true }
        case USER:
            return { ...state, user: true }
            // Si l'action est de type LOGOUT, le reducer met à jour l'état pour indiquer que l'utilisateur n'est plus connecté.
        case LOGOUT:
            return { ...state, connexion: false, admin: false, user: false }
        case PRESTATION:
            return { ...state, prestation: action.payload }
        case PRODUIT:
            return { ...state, prestation: action.payload }
        default: return state
    }
}
//React.createContext et peut être utilisé pour partager l'état dans l'application. 
export const ReducerContext = React.createContext([])