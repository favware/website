import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonDocsTableComponent } from './ribbon-docs-table.component';

describe('RibbonDocsTableComponent', () => {
  let component: RibbonDocsTableComponent;
  let fixture: ComponentFixture<RibbonDocsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonDocsTableComponent ]
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
