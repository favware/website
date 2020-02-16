/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function, @typescript-eslint/no-var-requires */

import 'reflect-metadata';
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import express from 'express';
import domino from 'domino';
import fs from 'fs';
import { join } from 'path';

const getMockMutationObserver = () => {
  return class {
    public observe(node, options) {}
    public disconnect() {}
    public takeRecords() {
      return [];
    }
  };
};

const PORT = process.env.PORT || 4001;
const DIST_FOLDER = join(process.cwd(), 'dist');

const template = fs.readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
const win = domino.createWindow(template);

(global as any).window = win;
(global as any).document = win.document;
(global as any).navigator = win.navigator;
(global as any).MutationObserver = getMockMutationObserver();
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xhr2');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
export const app = express();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { FavwareServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: FavwareServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
app.get('/assets', express.static(join(DIST_FOLDER, 'browser', 'assets')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// If we're not in the Cloud Functions environment, spin up a Node server
if (!process.env.FIREBASE_CONFIG) {
  app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
  });
}
