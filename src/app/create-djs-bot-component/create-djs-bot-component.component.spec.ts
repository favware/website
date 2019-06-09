import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestModule } from '@util/testing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CreateDjsBotComponentComponent } from './create-djs-bot-component.component';

describe('CreateDjsBotComponentComponent', () => {
  let component: CreateDjsBotComponentComponent;
  let fixture: ComponentFixture<CreateDjsBotComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [ CreateDjsBotComponentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDjsBotComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
