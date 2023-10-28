import Product from '../../models/productModel'

const deleteProduct = async(req, res)=>{
    const {id} = req.params
    try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        if(!deletedProduct)return res.status(404).json({error: 'Product not found'})

        return res.status(204).json({ message: 'Product deleted successfully' })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default deleteProduct