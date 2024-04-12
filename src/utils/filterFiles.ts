import { Product } from "../interfaces/product.interface";

type FieldName = keyof Product;

const filterArrayOfObjects = (array: Product[], fields: FieldName[]) => {
    return array.map(obj => {
        const newObj: Partial<Product> = {};
        fields.forEach((field: (keyof Product)) => {
            if (obj.hasOwnProperty(field)) {
                newObj[field] = obj[field] as any;
            }
        });
        return newObj;
    });
}

export { filterArrayOfObjects }