import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonDocsTableComponent } from './ribbon-docs-table.component';
import MaterialModule from 'src/util/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('RibbonDocsTableComponent', () => {
  let component: RibbonDocsTableComponent;
  let fixture: ComponentFixture<RibbonDocsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, ReactiveFormsModule, NoopAnimationsModule ],
      declarations: [ RibbonDocsTableComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonDocsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
