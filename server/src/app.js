import express from 'express'
import morgan from 'morgan'
import router from './routes/routes'

const app = express()

app.use(morgan('dev'))

app.use('/api', router)

export default app