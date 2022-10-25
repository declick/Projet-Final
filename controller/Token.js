import jwt from "jsonwebtoken"

const privateKey = 'eyJlbWFpbCI6InRlc3RAdGVzdC5mciIsInVzZXIiOnRydWUsImFkbWluIjp0cnVlLCJpYXQiOjE2NjY1MjQyNjYsImV4cCI6MTY2NjUyNzg2Nn0'

export const generateToken = async (userData) => {
    const Token = await jwt.sign(userData, privateKey)
    return Token
}

export const verifyToken = async (Token) => {
    try {
        if(Token) {
            const jwtToken = await jwt.verify(Token, privateKey)
            return jwtToken
    
        } else {
            return undefined
        }
    }
    catch(err){
        // token invalide
        return undefined
    }
}