import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { environment } from '../environments/environment';
import {
  markdownFactory, CardActionCasePipe, ChangeATargetPipe,
  ExtractTextPipe, MaterialModule, MatIconService, RedirectGuard,
  SeoService,
} from '../util';

import { CatchcalcComponent } from './catchcalc/catchcalc.component';
import { ContactComponent } from './contact/contact.component';
import { ConvertbotComponent } from './convertbot/convertbot.component';
import { ConverterComponent } from './converter/converter.component';
import { CryptoComponent } from './crypto/crypto.component';
import { DexaDocsTableComponent } from './dexa-docs-table/dexa-docs-table.component';
import { DexaComponent } from './dexa/dexa.component';
import { FavwareRoutingModule } from './favware-routing.module';
import { HomeComponent } from './home/home.component';
import { MilkylintComponent } from './milkylint/milkylint.component';
import { QuerystringComponent } from './querystring/querystring.component';
import { RibbonDocsTableComponent } from './ribbon-docs-table/ribbon-docs-table.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { SeedcheckComponent } from './seedcheck/seedcheck.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TavaComponent } from './tava/tava.component';
import { UnescapeComponent } from './unescape/unescape.component';
import { YamlreaderComponent } from './yamlreader/yamlreader.component';
import { ZalgoComponent } from './zalgo/zalgo.component';

@NgModule({
  declarations: [
    CardActionCasePipe,
    ExtractTextPipe,
    ChangeATargetPipe,
    DexaDocsTableComponent,
    RibbonDocsTableComponent,
    SidenavComponent,
    CatchcalcComponent,
    ContactComponent,
    ConvertbotComponent,
    ConverterComponent,
    CryptoComponent,
    DexaComponent,
    HomeComponent,
    MilkylintComponent,
    QuerystringComponent,
    RibbonComponent,
    SeedcheckComponent,
    TavaComponent,
    UnescapeComponent,
    YamlreaderComponent,
    ZalgoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverFavware' }),
    BrowserAnimationsModule,
    FavwareRoutingModule,
    MaterialModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markdownFactory,
      },
    }),
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule
  ],
  providers: [RedirectGuard, MatIconService, SeoService],
  bootstrap: [SidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FavwareModule {
}
