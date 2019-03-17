import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuerystringComponent } from './querystring.component';

describe('QuerystringComponent', () => {
  let component: QuerystringComponent;
  let fixture: ComponentFixture<QuerystringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerystringComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerystringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
