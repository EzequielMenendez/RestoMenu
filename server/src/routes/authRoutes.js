import { Router } from "express"
import loginController from "../controllers/authController/login"
import registerController from "../controllers/authController/register"
import { verify } from "jsonwebtoken"

const authRouter = Router()

authRouter.post('/login', loginController)

authRouter.post('/register', registerController)

export default authRouter