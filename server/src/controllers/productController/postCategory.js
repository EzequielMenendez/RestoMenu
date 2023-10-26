import Category from "../../models/categoryModel"
import User from "../../models/userModel"

const postCategory = async(req, res) => {
    const {name, restaurantId} = req.body
    try {
        const findUser = await User.findById(restaurantId).populate('categories')
        if(!findUser)return res.status(404).json({error: 'User not found'})
        const existingCategory = findUser.categories.find(category => category.name === name)
        if(existingCategory)return res.status(400).json({error: `Category "${name}" is already exist`})
        const newCategory = new Category({name, restaurant: restaurantId})
        const saveCategory = await newCategory.save()

        findUser.categories.push(saveCategory)
        await findUser.save()

        return res.status(201).json(saveCategory)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default postCategory