import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestModule } from '@util/testing.module';

import { GraphqlPokemonComponent } from './graphql-pokemon.component';

describe('GraphqlPokemonComponent', () => {
  let component: GraphqlPokemonComponent;
  let fixture: ComponentFixture<GraphqlPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [GraphqlPokemonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqlPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
