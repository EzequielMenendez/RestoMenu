import { Router } from 'express'
import authRouter from './authRoutes'
import productRouter from './productRoutes'

const router = Router()

router.use('/auth', authRouter)

router.use('product', productRouter)

export default router