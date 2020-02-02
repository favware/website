import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { UniversalInterceptor } from '@services/universal-interceptor';
import { FavwareModule } from './favware.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [FavwareModule, ServerModule, ModuleMapLoaderModule, FlexLayoutServerModule],
  bootstrap: [SidenavComponent],
  entryComponents: [SidenavComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptor,
      multi: true
    }
  ]
})
export class FavwareServerModule {}
