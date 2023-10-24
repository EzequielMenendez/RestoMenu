import User from '../models/userModel'
import Role from '../models/roleModel'

const isModerator = async(req, res, next)=>{
    try {
        const user = await User.findById(req.userId)
        const roles = await Role.find({_id: {$in: user.roles}})
    
        if(roles[0].name === "moderator"){
            next()
        }
    
        return res.status(403).json({error: "Require Moderator Role"})
    } catch (error) {
        return res.status(500).json({error: "Require Moderator Role"})
    }
}

export default isModerator