import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [
        CommonModule, MatButtonModule, MatToolbarModule, MatDatepickerModule, MatIconModule,
        MatSidenavModule, MatListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatInputModule
    ],
    exports: [
        CommonModule, MatButtonModule, MatToolbarModule, MatDatepickerModule, MatIconModule,
        MatSidenavModule, MatListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatInputModule
    ],
})

export class MaterialModule {

}
