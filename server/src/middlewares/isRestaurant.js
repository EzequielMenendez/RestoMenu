import User from '../models/userModel'
import Role from '../models/roleModel'

const isRestaurant = async(req, res, next)=>{
    try {
        const user = await User.findById(req.userId)
        const roles = await Role.findOne({_id: user.roles})
    
        if(roles.name === "restaurant"){
            next()
        }else{
            return res.status(403).json({error: "Require Restaurant Role"})
        }
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default isRestaurant