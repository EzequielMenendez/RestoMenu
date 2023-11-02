import { Router } from 'express'
import authRouter from './authRoutes'
import productRouter from './productRoutes'
import userRouter from './userRoutes'

const router = Router()

router.use('/auth', authRouter)

router.use('/product', productRouter)

router.use('/user', userRouter)

export default router