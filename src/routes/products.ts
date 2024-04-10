import express, { Request, Response } from 'express'

const router = express.Router();

router.get('/products', (_req: Request, res: Response) => {
    res.send('Get All Producst')
})

router.get('/:id', (_req: Request, _res: Response) => {

})

router.put('/:id', (_req: Request, _res: Response) => {

})


export { router as productsRouter };