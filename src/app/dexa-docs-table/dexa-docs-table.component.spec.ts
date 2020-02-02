import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestModule } from '@util/testing.module';

import { DexaDocsTableComponent } from './dexa-docs-table.component';

describe('DexaDocsTableComponent', () => {
  let component: DexaDocsTableComponent;
  let fixture: ComponentFixture<DexaDocsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [DexaDocsTableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexaDocsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
