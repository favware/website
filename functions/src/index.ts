import { Request, Response } from 'express';
import * as functions from 'firebase-functions';

import { isAuthenticated, isValidMethod } from './helper';
const universal = require(`${process.cwd()}/dist/server`).app; // tslint:disable-line:no-var-requires

export const favware = functions.https.onRequest(universal);

export const createCommandStorage = functions.https.onRequest((req: Request, res: Response) => {

});

export const readCommandStorage = functions.https.onRequest((req: Request, res: Response) => {
    if (!isAuthenticated(req)) return res.status(401).json({message: 'Unauthorized'});
    if (!isValidMethod(req, 'GET')) return res.status(403).json({message: 'Forbidden'});

    return res.status(200).json({
        message: 'It worked!',
    });
});

export const updateCommandStorage = functions.https.onRequest((req: Request, res: Response) => {

});

export const deleteCommandStorage = functions.https.onRequest((req: Request, res: Response) => {

});