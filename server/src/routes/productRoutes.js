import { Router } from "express"
import isRestaurant from "../middlewares/isRestaurant"

const productRouter = Router()

productRouter.get('/')

productRouter.get('/category')

productRouter.get('/:id')

productRouter.post('/', isRestaurant)

productRouter.put('/category/:id', isRestaurant)

productRouter.delete('/category/:id', isRestaurant)

productRouter.put('/:id', isRestaurant)

productRouter.delete('/:id', isRestaurant)

productRouter.post('/category', isRestaurant)

export default productRouter