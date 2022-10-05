import React from "react"
import {CONNEXION, LOGOUT, ADMIN, USER} from '../config/constance.js'

{ /* L' initialState argument est l'état utilisé lors du rendu initial */ }
export const initialState = {
   connexion: false,
    admin:false,
    user: false
}

export const reducer = (state, action) => {
    switch(action.type){
        case CONNEXION :
            return {...state, connexion:true}
         case ADMIN :
            return {...state, admin:true}
         case USER :
             return {...state, user:true}
        case LOGOUT :
            return {...state, connexion:false,  admin:false, user:false}
            
        default: return state 
    }
}

export const ReducerContext = React.createContext([])

