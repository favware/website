import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZalgoComponent } from './zalgo.component';

describe('ZalgoComponent', () => {
  let component: ZalgoComponent;
  let fixture: ComponentFixture<ZalgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZalgoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
