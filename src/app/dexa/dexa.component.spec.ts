import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeATargetPipe } from '@pipes/ChangeATarget';
import { TestModule } from '@util/testing.module';

import { DexaComponent } from './dexa.component';

describe('DexaComponent', () => {
  let component: DexaComponent;
  let fixture: ComponentFixture<DexaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [DexaComponent, ChangeATargetPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
