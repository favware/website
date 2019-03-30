import * as functions from 'firebase-functions';
const universal = require(`${process.cwd()}/dist/server`).app;

export const favware = functions.https.onRequest(universal);
