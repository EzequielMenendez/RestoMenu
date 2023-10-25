import User from '../models/userModel'
import Role from '../models/roleModel'

const isRestaurant = async(req, res, next)=>{
    try {
        const user = await User.findById(req.userId)
        const roles = await Role.find({_id: {$in: user.roles}})
    
        if(roles.name === "restaurant"){
            next()
        }
    
        return res.status(403).json({error: "Require Restaurant Role"})
    } catch (error) {
        return res.status(500).json({error: "Require Restaurant Role"})
    }
}

export default isRestaurant