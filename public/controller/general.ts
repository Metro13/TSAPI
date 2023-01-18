import { Request, Response, NextFunction } from 'express';


//getting all users with their details

const getGeneral = (req: Request, res:Response, next: NextFunction) => {
    let response: String = "Welcome to my TypeScript Backend API V1"
    return res.status(200).json({
        message: response
    });
}
export default {getGeneral};