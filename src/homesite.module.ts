import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetaLoader, MetaModule } from '@ngx-meta/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
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
    QuerystringComponent,
    RibbonComponent,
    RibbonzoneComponent,
    SeedcheckComponent,
    SentienceComponent,
    TavaComponent,
    UnescapeComponent,
} from './views';

@NgModule({
    declarations: [
        SidenavComponent,
        HomeComponent,
        RibbonComponent,
        ExtractTextPipe,
        RibbonzoneComponent,
        SentienceComponent,
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
        CardActionCasePipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        MaterialModule,
        MarkdownModule.forRoot({
            markedOptions: {
                provide: MarkedOptions,
                useValue: { gfm: true, tables: true, sanitize: true, smartLists: true, langPrefix: 'ts' },
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
})

export class HomesiteModule {
}