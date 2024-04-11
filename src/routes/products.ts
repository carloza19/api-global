import express from 'express'
import { getProductById, getProducts, insertProduct, updateProduct } from '../controllers/products.controller';
import { logMiddleare } from '../middleware/log';

/*Utilizamos el router de express para armar nuestros endpoints. 
En este caso de un CRUD para products*/

const router = express.Router();

router.post('/', insertProduct)

router.get('/', getProducts)

router.get('/:id', logMiddleare('PRODUCT INFO'), getProductById)

router.put('/:id', updateProduct)


export { router as productsRouter };