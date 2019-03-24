import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import 'prismjs';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

import { environment } from './environments/environment';
import { HomesiteModule } from './homesite.module';

if (environment.production) enableProdMode();

platformBrowserDynamic().bootstrapModule(HomesiteModule).catch(err => console.error(err));
