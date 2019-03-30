import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import RedirectGuard from 'src/util/redirectguard.guard';
import { environment } from '../environments/environment';
import markdownFactory from '../util/markdown.factory';
import MaterialModule from '../util/material';
import CardActionCasePipe from '../util/pipes/CardActionCase';
import ChangeATargetPipe from '../util/pipes/ChangeATarget';
import ExtractTextPipe from '../util/pipes/ExtractText';
import MatIconService from '../util/services/mat-icon.service';
import FavwareRoutingModule from './favware-routing.module';
import { DexaDocsTableComponent } from './dexa-docs-table/dexa-docs-table.component';
import { RibbonDocsTableComponent } from './ribbon-docs-table/ribbon-docs-table.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CatchcalcComponent } from './catchcalc/catchcalc.component';
import { ContactComponent } from './contact/contact.component';
import { ConvertbotComponent } from './convertbot/convertbot.component';
import { ConverterComponent } from './converter/converter.component';
import { CryptoComponent } from './crypto/crypto.component';
import { DexaComponent } from './dexa/dexa.component';
import { HomeComponent } from './home/home.component';
import { MilkylintComponent } from './milkylint/milkylint.component';
import { QuerystringComponent } from './querystring/querystring.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { SeedcheckComponent } from './seedcheck/seedcheck.component';
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
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    FavwareRoutingModule,
    MaterialModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markdownFactory
      }
    }),
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [RedirectGuard, MatIconService],
  bootstrap: [SidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FavwareModule {
}
