import { NextFunction, Request, Response } from "express";

const logMiddleare = (level:string) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const timestamp = new Date().toISOString();
        const { method, url, ip } = req;
        const data = {
            level:level,
            metodo: method,
            url: url,
            ip: ip,
            userAgent: req.headers['user-agent'],
            date: timestamp
        }
        console.log(data);
        next();
    }
}
export { logMiddleare };