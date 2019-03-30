import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexaDocsTableComponent } from './dexa-docs-table.component';

describe('DexaDocsTableComponent', () => {
  let component: DexaDocsTableComponent;
  let fixture: ComponentFixture<DexaDocsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexaDocsTableComponent ]
    })
    .compileComponents();
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
