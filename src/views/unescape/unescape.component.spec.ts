import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UnescapeComponent } from './unescape.component';

describe('UnescapeComponent', () => {
  let component: UnescapeComponent;
  let fixture: ComponentFixture<UnescapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnescapeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnescapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
