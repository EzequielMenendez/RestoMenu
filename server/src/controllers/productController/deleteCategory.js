import Category from '../../models/categoryModel'
import Product from '../../models/productModel'

const deleteCategory = async(req, res)=>{
    const {id} = req.params
    try {
        await Product.deleteMany({ categories: { $in: [id], $size: 1 } })
        const deletedCategory = await Category.findByIdAndDelete(id)
        if(!deletedCategory)return res.status(404).json({error: 'Category not found'})
        return res.status(204).json({message: 'Deleted successfuly'})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default deleteCategory