import { Schema, model } from 'mongoose'

const categorySchema = new Schema({
    name:{
        type: String,
        require: true,
        unique: false
    },
    restaurant:{
        ref: 'User',
        type: Schema.Types.ObjectId
    }
},{versionKey: false })

export default model('Category', categorySchema)