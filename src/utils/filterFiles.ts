import { Product } from "../interfaces/product.interface";

const filterArrayOfObjects = (array: Product[], fields: (keyof Product)[]) => {
    return array.map((obj: any) => {
        const newObj: Partial<Product> = {};
        fields.forEach((field: (keyof Product)) => {
            if (obj.toObject().hasOwnProperty(field)) {
                newObj[field] = obj[field]
            }
        });
        return newObj;
    });
}

export { filterArrayOfObjects }