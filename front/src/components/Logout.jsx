// Import module

import {useEffect, useContext} from 'react'
import { ReducerContext } from  './reducer/reducer'
import {LOGOUT} from './config/constance.js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL,config } from '../config.js'

const Logout = () => {
    
    const [state, dispatch] = useContext(ReducerContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        
        axios.defaults.timeout = 5000
        axios.get(`${BASE_URL}/Logout` , config)
        
            .then((res)=>{
                if(res.data.response){
                dispatch({type:LOGOUT}) 
                navigate("/")
                }
            })
            .catch((error)=>{
            console.log(error)
            })
    },[])
}


export default Logout