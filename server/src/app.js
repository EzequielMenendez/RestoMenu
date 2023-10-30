import express from 'express'
import morgan from 'morgan'
import router from './routes/routes'
import createRoles from './libs/initialRoles'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
createRoles()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',
    credentials: true
}))

app.use(morgan('dev'))

app.use('/api', router)

export default app