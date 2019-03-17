import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DexaComponent } from './dexa.component';

describe('DexaComponent', () => {
  let component: DexaComponent;
  let fixture: ComponentFixture<DexaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexaComponent ],
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
