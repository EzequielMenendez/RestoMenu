import mongoose from 'mongoose'

const connectDb = async(DB_URL)=>{
    await mongoose.connect(DB_URL)
    .then(() => console.log('DB is connected'))
    .catch((error) => console.log(error))
}

export default connectDb