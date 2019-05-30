import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { DexaDocsDatasource } from './dexa-docs-datasource';
import { DexaDocsErrorStateMatches } from './dexa-docs-error-state-matcher';

@Component({
  selector: 'favware-dexa-docs-table',
  templateUrl: './dexa-docs-table.component.html',
  styleUrls: ['./dexa-docs-table.component.scss'],
})
export class DexaDocsTableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) public sort: MatSort;
  @ViewChild('filter', { static: true }) public filter: ElementRef;

  public dataSource: DexaDocsDatasource;
  public definitionColumns = ['name', 'description', 'examples'];
  public searchFormControl = new FormControl('', [Validators.pattern(/[A-z]+/g)]);
  public matcher = new DexaDocsErrorStateMatches();

  public ngOnInit () {
    this.dataSource = new DexaDocsDatasource(this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(debounceTime(150), distinctUntilChanged())
      .subscribe(() => this.dataSource.filter = this.filter.nativeElement.value);
  }

  public clearFilter () {
    this.searchFormControl.setValue('');
    this.dataSource.filter = '';
  }
}
