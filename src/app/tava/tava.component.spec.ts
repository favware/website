import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { markdownFactory } from '@util/markdown.factory';
import { MaterialModule } from '@util/material.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { TavaComponent } from './tava.component';

describe('TavaComponent', () => {
  let component: TavaComponent;
  let fixture: ComponentFixture<TavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MaterialModule,
        MarkdownModule.forRoot({
          markedOptions: {
            provide: MarkedOptions,
            useFactory: markdownFactory,
          },
        })
      ],
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
