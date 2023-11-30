import User from "../../models/userModel"

const getRestaurant = async(req, res) => {
    const {name} = req.query
    try {
        const users = await User.find()
        if(!users)return res.status(404).json({error: 'Restaurants not found'})

        if(name){
            const filteredRestaurants = restaurants.filter(restaurant => {
                const restaurantName = restaurant.username.toLowerCase();
                const searchName = name.toLowerCase();
                return restaurantName.includes(searchName);
            })
            if (filteredRestaurants.length === 0) {
                return res.status(404).json({ error: 'Restaurants not found' });
            } else {
                return res.status(200).json(filteredRestaurants);
            }
        }
        return res.status(200).json(restaurants)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export default getRestaurant