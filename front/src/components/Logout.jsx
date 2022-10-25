// Import module

import {useEffect, useContext} from 'react'
import { ReducerContext } from  './reducer/reducer'
import {LOGOUT} from './config/constance.js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL} from '../config.js'

const Logout = () => {
    
    const [state, dispatch] = useContext(ReducerContext)
    const navigate = useNavigate()
    
    // Dans ce cas, la fonction ne sera appelée que lors du premier affichage du composant
 
    useEffect(() => {
        localStorage.removeItem('jwtToken')
        delete axios.defaults.headers.common['Authorization']
        dispatch({type:LOGOUT}) 
        navigate("/")
    },[])

}


export default Logout