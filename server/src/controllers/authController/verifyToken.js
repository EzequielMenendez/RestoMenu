import jwt from 'jsonwebtoken'
import config from '../../config'
import User from '../../models/userModel'

const verifyToken = async(req, res) => {
    const {token} = req.cookies

    if(!token)return res.status(401).json({error: "Unauthorized"})

    jwt.verify(token, config.SECRET, async(err, user)=>{
        if(err)return res.status(401).json({error: "Unauthorized"})

        const userFound = await User.findById(user.id)

        if(!userFound)return res.status(401).json({error: "Unauthorized"})

        return res.status(200).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })
    })
}

export default verifyToken