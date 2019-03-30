import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { environment } from 'src/environments/environment';
import { markdownFactory, CardActionCasePipe, ChangeATargetPipe, ExtractTextPipe, MaterialModule, MatIconService, RedirectGuard } from 'src/util';

import {
  CatchcalcComponent,
  ContactComponent,
  ConvertbotComponent,
  ConverterComponent,
  CryptoComponent,
  DexaComponent,
  DexaDocsTableComponent,
  FavwareRoutingModule,
  HomeComponent,
  MilkylintComponent,
  QuerystringComponent,
  RibbonComponent,
  RibbonDocsTableComponent,
  SeedcheckComponent,
  SidenavComponent,
  TavaComponent,
  UnescapeComponent,
  YamlreaderComponent,
  ZalgoComponent
} from '.';

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
        useFactory: markdownFactory,
      },
    }),
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule
  ],
  providers: [RedirectGuard, MatIconService],
  bootstrap: [SidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FavwareModule {
}
