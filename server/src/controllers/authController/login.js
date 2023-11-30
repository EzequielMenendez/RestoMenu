import config from '../../config'
import User from '../../models/userModel'
import jwt from 'jsonwebtoken'

const loginController = async(req, res) => {
    const {email, password} = req.body
    try {
       const userFound = await User.findOne({email})
        if(!userFound)return res.status(404).json({error: "User not found"})

        const matchPassword = await User.comparePassword(password, userFound.password)

        if(!matchPassword)return res.status(400).json({error: "incorrect password"})

        const token = jwt.sign({id: userFound._id}, config.SECRET, {
            expiresIn: 86400
        })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        })

        return res.status(200).json({message: 'User logged'})

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default loginController