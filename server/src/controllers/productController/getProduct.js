import Product from '../../models/productModel'
import Category from '../../models/categoryModel'

const getProduct = async(req, res) => {
    const { categoryId } = req.body
    try {
        const products = await Product.findAll({categories:{$in: categoryId}}).populate('Category')

        if(products.length === 0)return res.status(404).json({error: 'Products not found'})
        res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({error: 'Server error'})
    }
}

export default getProduct