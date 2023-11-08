import { Router } from "express"
import loginController from "../controllers/authController/login"
import registerController from "../controllers/authController/register"
import verifyToken from "../controllers/authController/verifyToken"

const authRouter = Router()

authRouter.post('/login', loginController)

authRouter.post('/register', registerController)

authRouter.get('/verify', verifyToken)

export default authRouter