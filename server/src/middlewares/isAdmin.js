import User from '../models/userModel'
import Role from '../models/roleModel'

const isAdmin = async(req, res, next)=>{
    try {
        const user = await User.findById(req.userId)
        const roles = await Role.find({_id: user.roles})
    
        if(roles.name === "administrator"){
            next()
        }
    
        return res.status(403).json({error: "Require Administrator Role"})
    } catch (error) {
        return res.status(500).json({error: "Require Administrator Role"})
    }
}

export default isAdmin