import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'environments/environment';
import { ClipboardModule } from 'ngx-clipboard';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { markdownFactory } from './markdown.factory';
import { MaterialModule } from './material.module';

const routes: Routes = [];

@NgModule({
  imports: [
    HttpClientModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    LayoutModule,
    MaterialModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markdownFactory,
      },
    }),
    ClipboardModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    HttpClientModule,
    NoopAnimationsModule,
    AngularFireModule,
    AngularFirestoreModule,
    LayoutModule,
    MaterialModule,
    MarkdownModule,
    ClipboardModule,
    ReactiveFormsModule,
    RouterModule
  ],
})

export class TestModule {

}
