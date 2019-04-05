import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { markdownFactory } from '@util/markdown.factory';
import { MaterialModule } from '@util/material.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { ZalgoComponent } from './zalgo.component';

describe('ZalgoComponent', () => {
  let component: ZalgoComponent;
  let fixture: ComponentFixture<ZalgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MaterialModule,
        MarkdownModule.forRoot({
          markedOptions: {
            provide: MarkedOptions,
            useFactory: markdownFactory,
          },
        })
      ],
      declarations: [ZalgoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
