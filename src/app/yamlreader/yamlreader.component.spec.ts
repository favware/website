import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import markdownFactory from 'src/util/markdown.factory';
import { MaterialModule } from 'src/util/material';
import { YamlreaderComponent } from './yamlreader.component';

describe('YamlreaderComponent', () => {
  let component: YamlreaderComponent;
  let fixture: ComponentFixture<YamlreaderComponent>;

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
      declarations: [YamlreaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamlreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
