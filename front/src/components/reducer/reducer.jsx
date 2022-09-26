import React from "react"

export const initialState = {
    todo: []
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'test': {
            return {...state, todo:[...action.payload]}
        }
        default: return state 
    }
}

export const ReducerContext = React.createContext([])

