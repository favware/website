import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MilkylintComponent } from './milkylint.component';

describe('MilkylintComponent', () => {
  let component: MilkylintComponent;
  let fixture: ComponentFixture<MilkylintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkylintComponent ],
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
