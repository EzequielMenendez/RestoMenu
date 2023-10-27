import Category from "../../models/categoryModel"

const putCategory = async(req, res)=>{
    const {id} = req.params
    const {name} = req.body
    try {
        const findCategory = await Category.findByIdAndUpdate(id, {name}, {new: true})

        if(!findCategory)return res.status(404).json({error: 'Category not found'})

        return res.status(200).json({
            _id: id,
            name: findCategory.name
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export default putCategory