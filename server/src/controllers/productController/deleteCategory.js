import Category from '../../models/categoryModel'
import Product from '../../models/productModel'
import User from '../../models/userModel'

const deleteCategory = async(req, res)=>{
    const {id} = req.params
    try {
        const deletedCategory = await Category.findByIdAndDelete(id)
        if(!deletedCategory)return res.status(404).json({error: 'Category not found'})
        await Product.deleteMany({ categories: { $in: [id], $size: 1 } })
        await Product.updateMany(
            { categories: id },
            { $pull: { categories: id } }
        )
        await User.updateMany(
            { categories: id },
            { $pull: { categories: id } }
        )
        return res.status(204).json({message: 'Deleted successfuly'})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default deleteCategory