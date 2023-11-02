import { Router } from "express"
import getRestaurant from "../controllers/userController/getRestaurant"

const userRouter = Router()

userRouter.get('/restaurant', getRestaurant)

export default userRouter