import { https as firebase } from 'firebase-functions';
import next from 'next';
import { relative } from 'path';

const dev = process.env.NODE_ENV !== 'production';

const app = next({
  dev,
  conf: { distDir: `${relative(process.cwd(), __dirname)}/next` }
});
const handle = app.getRequestHandler();

export const favware = firebase.onRequest(async (req, res) => {
  await app.prepare();
  return await handle(req, res);
});
