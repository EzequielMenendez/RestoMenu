import { Router } from "express"
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

productRouter.post('/', [verifyToken], postProduct)

productRouter.put('/category/:id', [verifyToken], putCategory)

productRouter.delete('/category/:id', [verifyToken], deleteCategory)

productRouter.put('/:id', [verifyToken], putProduct)

productRouter.delete('/:id', [verifyToken], deleteProduct)

productRouter.post('/category', [verifyToken], postCategory)

export default productRouter