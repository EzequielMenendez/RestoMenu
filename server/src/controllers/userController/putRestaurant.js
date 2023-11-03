import User from "../../models/userModel"

const putRestaurant = async(req, res)=>{
    const {id} = req.params
    try {
        const restaurant = await User.findByIdAndUpdate(id, req.body, {new: true})
        if(!restaurant)return res.status(404).json({error: 'Restaurant not found'})
        return res.status(200).json(restaurant)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default putRestaurant