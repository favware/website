import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TavaComponent } from './tava.component';

describe('TavaComponent', () => {
  let component: TavaComponent;
  let fixture: ComponentFixture<TavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TavaComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
