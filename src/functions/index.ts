import * as functions from 'firebase-functions';
import next from 'next';
import { relative } from 'path';
import { cwd } from 'process';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: `${relative(cwd(), __dirname)}/../functions/next` } });
const handle = app.getRequestHandler();

export const favware = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
