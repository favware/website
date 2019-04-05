import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { markdownFactory } from '@util/markdown.factory';
import { MaterialModule } from '@util/material.module';
import { ClipboardModule } from 'ngx-clipboard';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { UnescapeComponent } from './unescape.component';
import { TestModule } from '@util/testing.module';

describe('UnescapeComponent', () => {
  let component: UnescapeComponent;
  let fixture: ComponentFixture<UnescapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [UnescapeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnescapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
