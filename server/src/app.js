import express from 'express'
import morgan from 'morgan'
import router from './routes/routes'
import createRoles from './libs/initialRoles'

const app = express()
createRoles()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use('/api', router)

export default app