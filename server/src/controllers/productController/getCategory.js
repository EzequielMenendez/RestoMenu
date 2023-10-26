import User from '../../models/userModel'

const getCategory = async(req, res)=>{
    const { restaurantId } = req.body

    try {
        const categories = await User.findById(restaurantId).populate('Category')
        if(!categories)return res.status(404).json({error: "User not found"})
        return res.status(200).json(categories.Category)
    } catch (error) {
        return res.status(500).json({error: 'Server error'})
    }
}

export default getCategory