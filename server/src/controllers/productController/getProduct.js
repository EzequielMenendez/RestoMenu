import Product from '../../models/productModel'

const getProduct = async(req, res) => {
    const { categoryId } = req.query
    try {
        const products = await Product.find({categories:{$in: categoryId}}).populate('categories')

        if(products.length === 0)return res.status(404).json({error: 'Products not found'})
        res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({error: 'Server error'})
    }
}

export default getProduct