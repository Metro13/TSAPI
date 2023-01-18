import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

//Todos data model interface
interface Todos{
    userId: Number;
    id: Number;
    title: String;
    completed: boolean;
}

//getting all users with their details

const getTodos = async (req: Request, res:Response, next: NextFunction) => {

    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    let todos: [Todos] = result.data;
    return res.status(200).json({
        message: todos
    });
}
export default { getTodos};