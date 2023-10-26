import { Router } from "express"
import isRestaurant from "../middlewares/isRestaurant"
import getProduct from "../controllers/productController/getProduct"
import getCategory from "../controllers/productController/getCategory"
import postProduct from "../controllers/productController/postProduct"
import postCategory from "../controllers/productController/postCategory"
import verifyToken from "../middlewares/authJwt"

const productRouter = Router()

productRouter.get('/', getProduct)

productRouter.get('/category', getCategory)

//productRouter.get('/:id')

productRouter.post('/', [verifyToken, isRestaurant], postProduct)

//productRouter.put('/category/:id', isRestaurant)

//productRouter.delete('/category/:id', isRestaurant)

//productRouter.put('/:id', isRestaurant)

//productRouter.delete('/:id', isRestaurant)

productRouter.post('/category', [verifyToken, isRestaurant], postCategory)

export default productRouter