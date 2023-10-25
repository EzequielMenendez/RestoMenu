import { Router } from "express"
import isRestaurant from "../middlewares/isRestaurant"

const productRouter = Router()

productRouter.get('/')

productRouter.get('/:id')

productRouter.post('/', isRestaurant)

productRouter.put('/', isRestaurant)

productRouter.delete('/', isRestaurant)

productRouter.post('/category', isRestaurant)

productRouter.put('/category', isRestaurant)

productRouter.delete('/category', isRestaurant)

export default productRouter