import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CardActionCasePipe } from '@pipes/CardActionCase';
import { ChangeATargetPipe } from '@pipes/ChangeATarget';
import { ExtractTextPipe } from '@pipes/ExtractText';
import { MatIconService } from '@services/mat-icon.service';
import { SeoService } from '@services/seo.service';
import { markdownFactory } from '@util/markdown.factory';
import { MaterialModule } from '@util/material.module';
import { RedirectGuard } from '@util/redirectguard.guard';
import { ClipboardModule } from 'ngx-clipboard';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { environment } from '../environments/environment';

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
    CatchcalcComponent,
    ChangeATargetPipe,
    ContactComponent,
    ConvertbotComponent,
    ConverterComponent,
    CryptoComponent,
    DexaComponent,
    DexaDocsTableComponent,
    ExtractTextPipe,
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
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverFavware' }),
    HttpClientModule,
    FavwareRoutingModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markdownFactory,
      },
    }),
    ClipboardModule
  ],
  providers: [RedirectGuard, MatIconService, SeoService, AngularFirestore],
  bootstrap: [SidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FavwareModule {
}
