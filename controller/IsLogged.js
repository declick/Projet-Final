import {generateToken, verifyToken} from './Token.js'

const IsLogged = async (req,res) => {
    const userData = await verifyToken(req.body.token)
    if(userData){
        const token = await generateToken(userData)
        res.json({response:true, ...userData, token})
    } else {
        res.json({response:false})
    }
};

export default IsLogged