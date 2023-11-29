import { Router } from "express"
import getRestaurant from "../controllers/userController/getRestaurant"
import getRestaurantById from "../controllers/userController/getRestaurantById"
import putRestaurant from "../controllers/userController/putRestaurant"
import verifyToken from "../middlewares/authJwt"

const userRouter = Router()

userRouter.get('/restaurant', getRestaurant)

userRouter.get('/restaurant/:id', getRestaurantById)

userRouter.put('/restaurant/:id', [verifyToken], putRestaurant)

export default userRouter