import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestModule } from '@util/testing.module';

import { QuerystringComponent } from './querystring.component';

describe('QuerystringComponent', () => {
  let component: QuerystringComponent;
  let fixture: ComponentFixture<QuerystringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [QuerystringComponent],
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
