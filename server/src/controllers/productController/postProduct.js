import Product from '../../models/productModel'
import Category from '../../models/categoryModel'

const postProduct = async(req, res) => {
    const { name, price, description, categories } = req.body
    if(!name || !price || !description || !categories)return res.status(400).json({error: 'Please fill out all the required fields.'})

    try {
        const foundCategories = await Category.find({ _id: { $in: categories } })

        if (foundCategories.length !== categories.length) {
            return res.status(400).json({ error: 'One or more categories not found.' })
        }
    
        let newProduct = new Product({
            name,
            price,
            description,
            categories: foundCategories
        })
    
        const saveProduct = await newProduct.save()
    
        return res.status(201).json(saveProduct)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export default postProduct