import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CatchcalcComponent } from './catchcalc.component';

describe('CatchcalcComponent', () => {
  let component: CatchcalcComponent;
  let fixture: ComponentFixture<CatchcalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchcalcComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
