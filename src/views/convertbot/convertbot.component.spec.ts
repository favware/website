import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertbotComponent } from './convertbot.component';

describe('ConvertbotComponent', () => {
  let component: ConvertbotComponent;
  let fixture: ComponentFixture<ConvertbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertbotComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
