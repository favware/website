import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { markdownFactory } from '@util/markdown.factory';
import { MaterialModule } from '@util/material.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { CryptoComponent } from './crypto.component';
import { TestModule } from '@util/testing.module';

describe('CryptoComponent', () => {
  let component: CryptoComponent;
  let fixture: ComponentFixture<CryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [CryptoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
