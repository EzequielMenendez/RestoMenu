import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: Text
    },
    description: {
        type: Text
    },
    categories:[{
        ref: "Category",
        type: Schema.Types.ObjectId
    }]
})

export default model("Product", productSchema)