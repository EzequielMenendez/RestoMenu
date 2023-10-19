import userFind from '../../libs/userFind'
import User from '../../models/userModel'

const registerController = async(req, res) => {
    const {username, email, password} = req.body
    if(!username || !email || !password){
        return res.status(400).json({error: "Please fill out all the required fields."})
    }
    try { 
        const userFound = await userFind(email, username)
        if(userFound){
            res.status(400).json({error: userFound})
        }

        const newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password)
        })
    
        await newUser.save()

        return res.status(201).json(newUser)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default registerController