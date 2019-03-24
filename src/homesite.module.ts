import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetaLoader, MetaModule } from '@ngx-meta/core';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { DexaDocsTableComponent, RibbonDocsTableComponent, SidenavComponent } from './components';
import { CardActionCasePipe, ChangeATargetPipe, ExtractTextPipe, MaterialModule, MatIconService, metaFactory, RedirectGuard } from './util';
import { RoutingModule } from './util/routing.module';
import {
  CatchcalcComponent,
  ContactComponent,
  ConvertbotComponent,
  ConverterComponent,
  DexaComponent,
  HomeComponent,
  MilkylintComponent,
  QuerystringComponent,
  RibbonComponent,
  SeedcheckComponent,
  TavaComponent,
  UnescapeComponent,
  YamlreaderComponent,
  ZalgoComponent,
} from './views';

const markedOptions = (): MarkedOptions => {
const renderer = new MarkedRenderer();

renderer.blockquote = (text: string) => `<blockquote class="blockquote"><p>${text}</p></blockquote>`;

return {
  renderer,
  breaks: true,
  gfm: true,
  pedantic: false,
  sanitize: true,
  silent: true,
  smartLists: true,
  smartypants: false,
  tables: true,
};
}

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
    ZalgoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptions,
      },
    }),
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory),
    })
  ],
  providers: [RedirectGuard, MatIconService],
  bootstrap: [SidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class HomesiteModule {
}
