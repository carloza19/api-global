import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getAllProductsService, getProductsByIdService, postProductsService, updateProductsService } from "../services/products.services";


const insertProduct = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const response = await postProductsService(body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_PRODUCTS');
    }
};

const getProducts = async (_req: Request, res: Response) => {
    try {
        const response = await getAllProductsService();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_PRODUCTS');
    }
};

const getProductById = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getProductsByIdService(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_PRODUCT');
    }
};

const updateProduct = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateProductsService(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_PRODUCTS');
    }
};


export { insertProduct, getProducts, getProductById, updateProduct }