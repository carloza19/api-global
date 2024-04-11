import { Response } from "express";
/*Creamos este manejador de errores 
para unificar y simplificar su repeticiòn en los distinos endpoints*/

const handleHttp = (res: Response, error: string) => {
    res.status(500)
    res.send([error])
};

export { handleHttp };