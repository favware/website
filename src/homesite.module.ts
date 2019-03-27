import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MetaLoader, MetaModule } from '@ngx-meta/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { DexaDocsTableComponent, RibbonDocsTableComponent, SidenavComponent } from './components';
import environment from './environments/environment';
import { CardActionCasePipe, ChangeATargetPipe, ExtractTextPipe, MaterialModule, MatIconService, metaFactory, RedirectGuard } from './util';
import markdownFactory from './util/markdown.factory';
import { RoutingModule } from './util/routing.module';
import {
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
} from './views';

@NgModule({
  declarations: [
    SidenavComponent,
    HomeComponent,
    RibbonComponent,
    ExtractTextPipe,
    DexaComponent,
    SeedcheckComponent,
    ConvertbotComponent,
    CatchcalcComponent,
    TavaComponent,
    UnescapeComponent,
    ContactComponent,
    QuerystringComponent,
    ChangeATargetPipe,
    ConverterComponent,
    RibbonDocsTableComponent,
    DexaDocsTableComponent,
    CardActionCasePipe,
    MilkylintComponent,
    YamlreaderComponent,
    ZalgoComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
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
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory),
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [RedirectGuard, MatIconService],
  bootstrap: [SidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class HomesiteModule {
}
