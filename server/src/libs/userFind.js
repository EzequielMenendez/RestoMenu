import User from '../models/userModel'

const userFind = async(email, username)=> {
    const userFoundByEmail = await User.find({email})
    if(userFoundByEmail.length > 0){
        return "email already exist"
    }
    const userFoundByUsername = await User.find({username})
    if(userFoundByUsername.length > 0){
        return "username already exist"
    }
    return
}

export default userFind