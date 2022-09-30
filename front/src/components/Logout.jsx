// Import module

import {useEffect, useContext} from 'react'
import { ReducerContext } from  './reducer/reducer'
import {LOGOUT} from './config/constance.js'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const [state, dispatch] = useContext(ReducerContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch({type:LOGOUT}) 
        navigate("/")
    },[])
};

export default Logout