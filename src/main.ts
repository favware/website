import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

import { environment } from './environments/environment';
import { HomesiteModule } from './homesite.module';

if (environment.production) enableProdMode();

platformBrowserDynamic().bootstrapModule(HomesiteModule).catch(err => console.error(err));
