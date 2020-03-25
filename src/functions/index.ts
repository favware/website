import { https as firebase } from 'firebase-functions';
import next from 'next';
import { relative } from 'path';
import { cwd } from 'process';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: `${relative(cwd(), __dirname)}/../functions/next` } });
const handle = app.getRequestHandler();

export const favware = firebase.onRequest(async (req, res) => {
  await app.prepare();
  return handle(req, res);
});
