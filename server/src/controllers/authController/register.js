import userFind from '../../libs/userFind'
import User from '../../models/userModel'
import jwt from 'jsonwebtoken'
import config from '../../config'

const registerController = async(req, res) => {
    const {username, email, password, location, image, contact} = req.body
    if(!username || !email || !password || !location || !image || !contact){
        return res.status(400).json({error: "Please fill out all the required fields."})
    }
    try { 
        const userFound = await userFind(email, username)
        if(userFound){
            return res.status(400).json({error: userFound})
        }

        let newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password),
            location,
            image,
            contact
        })
    
        const saveUser = await newUser.save()

        const token = jwt.sign({id: saveUser._id}, config.SECRET, {
            expiresIn: 86400
        })

        res.cookie("token", token)

        return res.status(201).json({
            name: saveUser.name,
            email: saveUser.email,
            id: saveUser._id
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default registerController