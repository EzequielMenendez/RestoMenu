import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/userModel'

const verifyToken = async(req, res, next)=>{
    try {
        const {token} = req.cookies
        console.log(token)

        if(!token) return res.status(400).json({error: "No token provided"})
    
        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id
    
        const user = await User.findById(decoded.id, {password: 0})
    
        if(!user) return res.status(404).json({error: "no user found"})
    
        next()
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default verifyToken