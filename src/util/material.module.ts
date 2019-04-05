import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatDatepickerModule, MatIconModule,
    MatSidenavModule, MatListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatInputModule, MatCarouselModule, MatProgressSpinnerModule, MatChipsModule
  ],
  exports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatDatepickerModule, MatIconModule,
    MatSidenavModule, MatListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatInputModule, MatCarouselModule, MatProgressSpinnerModule, MatChipsModule
  ],
})

export class MaterialModule {

}