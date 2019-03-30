import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import markdownFactory from 'src/util/markdown.factory';
import MaterialModule from 'src/util/material';
import ChangeATargetPipe from 'src/util/pipes/ChangeATarget';
import { CatchcalcComponent } from './catchcalc.component';

describe('CatchcalcComponent', () => {
  let component: CatchcalcComponent;
  let fixture: ComponentFixture<CatchcalcComponent>;

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
      declarations: [CatchcalcComponent, ChangeATargetPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
