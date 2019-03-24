import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject, merge, Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { IJSDocItem, IJSDocJSON, IRibbonDocs } from 'src/util/index.js';
import docs from '../../assets/docs/ribbon.json';

const ribbondocs: IJSDocJSON = docs as unknown as IJSDocJSON;

// @ts-ignore Ignoring TypeScript errors because it cannot properly parse JSON despite that it does work
const RIBBON_DATA: IRibbonDocs[] = ribbondocs.map((docItem: IJSDocItem) => (
    {
      name: docItem.name,
      aliases: docItem.description && docItem.description.split('**Aliases**').length > 1 ?
        docItem.description.split('**Aliases**')[1].slice(3).replace(/`/g, '') : ' - ',
      description: docItem.description.split('\n')[0].replace(/.+ - (.+)/, '$1'),
      category: docItem.category,
    }
  )
);

const compare = (a, b, isAsc) => {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
};

export class RibbonDocsDatasource extends DataSource<IRibbonDocs> {
  data: IRibbonDocs[] = RIBBON_DATA;
  _filterChange = new BehaviorSubject('');
  private paginator: MatPaginator;
  private sort: MatSort;

  constructor (paginator: MatPaginator, sort: MatSort) {
    super();
    this.sort = sort;
    this.paginator = paginator;
  }

  get filter (): string {
    return this._filterChange.value;
  }

  set filter (filter: string) {
    this._filterChange.next(filter);
  }

  connect (): Observable<IRibbonDocs[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange,
      this._filterChange
    ];

    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getFilteredData(this.getSortedData([...this.data])));
    }));
  }

  disconnect () {
  }

  private getPagedData (data: IRibbonDocs[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData (data: IRibbonDocs[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'aliases':
          return compare(a.aliases, b.aliases, isAsc);
        case 'description':
          return compare(a.description, b.description, isAsc);
        case 'category':
          return compare(a.category, b.category, isAsc);
        default:
          return 0;
      }
    });
  }

  private getFilteredData (data: IRibbonDocs[]) {
    return data.filter((item: IRibbonDocs) => {
      const searchStr = (item.name + item.description + item.aliases + item.category).toLowerCase();
      return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
    });
  }
}
