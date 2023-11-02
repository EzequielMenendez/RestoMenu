import User from '../../models/userModel'

const getRestaurantById = async(req, res)=>{
    const { id } = req.params
    
    try {
        const restaurant = await User.findById(id).populate('categories')
        if(!restaurant)return res.status(404).json({error: "User not found"})
        return res.status(200).json(restaurant)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default getRestaurantById