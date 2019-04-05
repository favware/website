import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { markdownFactory } from '@util/markdown.factory';
import { MaterialModule } from '@util/material.module';
import { ClipboardModule } from 'ngx-clipboard';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { YamlreaderComponent } from './yamlreader.component';
import { TestModule } from '@util/testing.module';

describe('YamlreaderComponent', () => {
  let component: YamlreaderComponent;
  let fixture: ComponentFixture<YamlreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
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
