import express from 'express'
import { getProductById, getProducts, insertProduct, updateProduct } from '../controllers/products.controller';

/*Utilizamos el router de express para armar nuestros endpoints. 
En este caso de un CRUD para products*/

const router = express.Router();

router.post('/', insertProduct)

router.get('/', getProducts)

router.get('/:id', getProductById)

router.put('/:id', updateProduct)


export { router as productsRouter };