import app from './app.js'
import connectDb from './db.js'
import dotenv from 'dotenv'

dotenv.config()

if(process.env.DB_URL){
    connectDb(process.env.DB_URL)
}

app.listen(3001, () => {
    console.log('Server listening in port', 3001)
})
