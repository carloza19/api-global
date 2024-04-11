import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/product.model";



const postProductsService = async (product: Product) => {
    const response = await ProductModel.create(product)
    return response
}

const getAllProductsService = (): Promise<Product[]> => {
    const response = ProductModel.find()
    return response
}

const getProductsByIdService = async (id: string): Promise<Product | null> => {
    const response = await ProductModel.findOne({ _id: id });
    return response;
};

const updateProductsService = async (id: string, data: Product): Promise<Product | null> => {
    const response = await ProductModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return response;
};

export { postProductsService, getAllProductsService, getProductsByIdService, updateProductsService }