import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
const domino = require('domino');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = path.join(process.cwd(), 'dist/browser');

const template = fs.readFileSync(path.join(DIST_FOLDER, 'index.html')).toString();
const win = domino.createWindow(template);

(global as any).window = win;
(global as any).document = win.document;
(global as any).DOMTokenList = win.DOMTokenList;
(global as any).Node = win.Node;
(global as any).Text = win.Text;
(global as any).HTMLElement = win.HTMLElement;
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

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: FavwareServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ],
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y',
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// If we're not in the Cloud Functions environment, spin up a Node server
if (!process.env.FUNCTION_NAME) {
  const PORT = process.env.PORT || 4001;
  app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
  });
}

// tslint:disable-next-line: only-arrow-functions
function getMockMutationObserver () {
  return class {
    // tslint:disable-next-line: no-empty
    public observe (node, options) {
    }
    // tslint:disable-next-line: no-empty
    public disconnect () {
    }
    public takeRecords () {
      return [];
    }
  };
}