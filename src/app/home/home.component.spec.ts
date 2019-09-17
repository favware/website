import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CardActionCasePipe } from '@pipes/CardActionCase';
import { MaterialModule } from '@util/material.module';
import { RedirectGuardComponent } from '@util/redirectguard.guard';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [RouterModule.forRoot([], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
class KarmaRoutingModule {
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, KarmaRoutingModule],
      declarations: [HomeComponent, CardActionCasePipe],
      providers: [RedirectGuardComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
