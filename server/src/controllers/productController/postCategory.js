import Category from "../../models/categoryModel"
import User from "../../models/userModel"

const postCategory = async(req, res) => {
    const {name, restaurantId} = req.body
    try {
        const findUser = await User.findById(restaurantId).populate('categories')
        if(!findUser)return res.status(404).json({error: 'User not found'})
        const findCategory = findUser.categories.map(categories=>{
            if(categories.name === name){
                return name
            }
        })
        if(findCategory)return res.status(400).json({error: `Category "${name}" is already exist`})
        const newCategory = new Category({name})
        await newCategory.save()

        return res.status(201).json(newCategory)
    } catch (error) {
        return res.status(500).json({error: 'Server Error'})
    }
}

export default postCategory