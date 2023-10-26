import User from '../../models/userModel'

const getCategory = async(req, res)=>{
    const { restaurantId } = req.body

    try {
        const restaurant = await User.findById(restaurantId).populate('categories')
        if(!restaurant)return res.status(404).json({error: "User not found"})
        if(!restaurant.categories)return res.status(404).json({error: "Categories not found"})
        return res.status(200).json(restaurant.categories)
    } catch (error) {
        return res.status(500).json({error: 'Server error'})
    }
}

export default getCategory