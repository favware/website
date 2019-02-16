import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule,
        MatSidenavModule, MatListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatInputModule
    ],
    exports: [
        CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule,
        MatSidenavModule, MatListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatInputModule
    ],
})

export class MaterialModule {

}
