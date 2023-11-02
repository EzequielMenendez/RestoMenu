import { Router } from "express"
import getRestaurant from "../controllers/userController/getRestaurant"
import getRestaurantById from "../controllers/userController/getRestaurantById"

const userRouter = Router()

userRouter.get('/restaurant', getRestaurant)

userRouter.get('/restaurant/:id', getRestaurantById)

export default userRouter