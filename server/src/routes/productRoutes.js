import { Router } from "express"
import isRestaurant from "../middlewares/isRestaurant"
import getProduct from "../controllers/productController/getProduct"
import postProduct from "../controllers/productController/postProduct"
import postCategory from "../controllers/productController/postCategory"
import verifyToken from "../middlewares/authJwt"
import putProduct from "../controllers/productController/putProduct"
import putCategory from "../controllers/productController/putCategory"
import deleteProduct from "../controllers/productController/deleteProduct"
import deleteCategory from "../controllers/productController/deleteCategory"
import getProductById from "../controllers/productController/getProductById"

const productRouter = Router()

productRouter.get('/', getProduct)

productRouter.get('/:id', getProductById)

productRouter.post('/', [verifyToken, isRestaurant], postProduct)

productRouter.put('/category/:id', [verifyToken, isRestaurant], putCategory)

productRouter.delete('/category/:id', [verifyToken, isRestaurant], deleteCategory)

productRouter.put('/:id', [verifyToken, isRestaurant], putProduct)

productRouter.delete('/:id', [verifyToken, isRestaurant], deleteProduct)

productRouter.post('/category', [verifyToken, isRestaurant], postCategory)

export default productRouter