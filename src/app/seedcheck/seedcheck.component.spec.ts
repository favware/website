import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeATargetPipe } from '@pipes/ChangeATarget';
import { TestModule } from '@util/testing.module';

import { SeedcheckComponent } from './seedcheck.component';


describe('SeedcheckComponent', () => {
  let component: SeedcheckComponent;
  let fixture: ComponentFixture<SeedcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [SeedcheckComponent, ChangeATargetPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
