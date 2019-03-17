import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule, MatIconService } from 'src/util';
import { ContactComponent } from './contact.component';
import { HttpClientModule } from '@angular/common/http';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [ MaterialModule, HttpClientModule ],
        declarations: [ContactComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [MatIconService],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
