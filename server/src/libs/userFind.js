import User from '../models/userModel'

const userFind = async(email, username)=> {
    const userFoundByEmail = await User.find({email})
    if(userFoundByEmail){
        return "email already exist"
    }
    const userFoundByUsername = User.find({username})
    if(userFoundByUsername){
        return "username already exist"
    }
    return
}

export default userFind