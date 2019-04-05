import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ChangeATargetPipe } from '@pipes/ChangeATarget';
import { markdownFactory } from '@util/markdown.factory';
import { MaterialModule } from '@util/material.module';
import { environment } from 'environments/environment';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { RibbonComponent } from './ribbon.component';
import { TestModule } from '@util/testing.module';

describe('RibbonComponent', () => {
  let component: RibbonComponent;
  let fixture: ComponentFixture<RibbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [RibbonComponent, ChangeATargetPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
