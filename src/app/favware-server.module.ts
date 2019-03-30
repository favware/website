import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { FavwareModule } from './favware.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    FavwareModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [SidenavComponent],
})
export class FavwareServerModule {
}
