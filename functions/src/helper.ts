import { Request } from 'express';

type validMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const isValidMethod = (req: Request, method: validMethod) => req.method === method;

export const isAuthenticated = (req: Request) => {
    return false;
};