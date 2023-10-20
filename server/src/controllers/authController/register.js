import userFind from '../../libs/userFind'
import User from '../../models/userModel'
import Role from '../../models/roleModel'
import jwt from 'jsonwebtoken'
import config from '../../config'

const registerController = async(req, res) => {
    const {username, email, password, roles} = req.body
    if(!username || !email || !password){
        return res.status(400).json({error: "Please fill out all the required fields."})
    }
    try { 
        const userFound = await userFind(email, username)
        if(userFound){
            return res.status(400).json({error: userFound})
        }

        const newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password)
        })

        if(roles){
            const foundRole = await Role.find({name: {$in: roles}})
            newUser.roles = foundRole.map(role=>role._id)
        }
    
        const saveUser = await newUser.save()

        const token = jwt.sign({id: saveUser._id}, config.SECRET, {
            expiresIn: 86400
        })

        return res.status(201).json({token})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default registerController