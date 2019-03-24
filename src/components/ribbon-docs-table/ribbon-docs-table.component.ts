import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatSort } from '@angular/material';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RibbonDocsDatasource } from './ribbon-docs-datasource';
import { RibbonDocsErrorStateMatches } from './ribbon-docs-error-state-matcher';

@Component({
  selector: 'favware-ribbon-docs-table',
  templateUrl: './ribbon-docs-table.component.html',
  styleUrls: ['./ribbon-docs-table.component.scss'],
})
export class RibbonDocsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  public dataSource: RibbonDocsDatasource;
  public isSmall = false;
  public readonly fullSizeColumns = ['name', 'aliases', 'description', 'category'];
  public readonly smallSizeColumns = ['name', 'category'];
  public readonly searchFormControl = new FormControl('', [Validators.pattern(/[A-z]+/g)]);
  public readonly matcher = new RibbonDocsErrorStateMatches();

  private readonly breakpointObserver: BreakpointObserver;

  constructor (breakpointObserver: BreakpointObserver) {
    this.breakpointObserver = breakpointObserver;
  }

  ngOnInit (): void {
    this.dataSource = new RibbonDocsDatasource(this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(debounceTime(150), distinctUntilChanged())
      .subscribe(() => this.dataSource.filter = this.filter.nativeElement.value);

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.isSmall = state.matches;
      });
  }

  clearFilter () {
    this.searchFormControl.setValue('');
    this.dataSource.filter = '';
  }
}
