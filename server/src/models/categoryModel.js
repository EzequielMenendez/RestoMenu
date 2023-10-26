import { Schema, model } from 'mongoose'

const categorySchema = new Schema({
    name:{
        type: String,
        require: true,
        unique: false
    }
})

export default model('Category', categorySchema)