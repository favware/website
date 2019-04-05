import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { markdownFactory } from '@util/markdown.factory';
import { MaterialModule } from '@util/material.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { MilkylintComponent } from './milkylint.component';
import { TestModule } from '@util/testing.module';

describe('MilkylintComponent', () => {
  let component: MilkylintComponent;
  let fixture: ComponentFixture<MilkylintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [MilkylintComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkylintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
