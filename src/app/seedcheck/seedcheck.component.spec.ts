import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { SeedcheckComponent } from '..';
import { markdownFactory, ChangeATargetPipe, MaterialModule } from '../../util';


describe('SeedcheckComponent', () => {
  let component: SeedcheckComponent;
  let fixture: ComponentFixture<SeedcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        MarkdownModule.forRoot({
          markedOptions: {
            provide: MarkedOptions,
            useFactory: markdownFactory,
          },
        })
      ],
      declarations: [SeedcheckComponent, ChangeATargetPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
