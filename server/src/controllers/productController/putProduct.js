import Product from "../../models/productModel"

const putProduct = async(req, res)=>{
    const {id} = req.params
    const { name, price, description, categories } = req.body
    try {
        const findProduct = await Product.findByIdAndUpdate(id, {name, price, description, categories}, {
            new: true
        })
        if(!findProduct)return res.status(404).json({error: 'Product not found'})

        return res.status(200).json({
            _id: id,
            name: findProduct.name,
            price: findProduct.price,
            description: findProduct.description,
            categories: findProduct.categories
        })
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default putProduct