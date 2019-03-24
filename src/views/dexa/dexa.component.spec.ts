import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { ChangeATargetPipe, MaterialModule } from 'src/util';
import { DexaComponent } from './dexa.component';

describe('DexaComponent', () => {
  let component: DexaComponent;
  let fixture: ComponentFixture<DexaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        MarkdownModule.forRoot({
          markedOptions: {
            provide: MarkedOptions,
            useValue: { gfm: true, tables: true, sanitize: true, smartLists: true, langPrefix: 'ts' },
          },
        })
      ],
      declarations: [DexaComponent, ChangeATargetPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
