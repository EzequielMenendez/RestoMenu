import Product from "../../models/productModel"

const getProductById = async(req, res)=>{
    const {id} = req.params
    try {
        const product = await Product.findById(id)
        if(!product)return res.status(404).json({error: 'Product not found'})
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default getProductById