import User from "../../models/userModel"

const getRestaurant = async(req, res) => {
    try {
        const users = await User.find().populate('roles')
        const restaurants = users.filter(user=> user?.roles?.name === "restaurant")
        if(!restaurants)res.status(404).json({error: 'Restaurants not found'})
        res.status(200).json(restaurants)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export default getRestaurant