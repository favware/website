import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonStatsComponent } from './ribbon-stats.component';

describe('RibbonStatsComponent', () => {
  let component: RibbonStatsComponent;
  let fixture: ComponentFixture<RibbonStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RibbonStatsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
