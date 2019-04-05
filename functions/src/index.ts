import * as functions from 'firebase-functions';
const universal = require(`${process.cwd()}/dist/server`).app; // tslint:disable-line:no-var-requires

export const favware = functions.https.onRequest(universal);