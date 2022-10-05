import React from "react"
import { ReducerContext } from "./reducer/reducer.jsx"

const Profil = () => {
    
    const [state,dispatch] = React.useContext(ReducerContext)
    
    return(
        <h1>Profil</h1>    
    )
}

export default Profil