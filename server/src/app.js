import express from 'express'
import morgan from 'morgan'
import router from './routes/routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(morgan('dev'))

app.use('/api', router)

export default app