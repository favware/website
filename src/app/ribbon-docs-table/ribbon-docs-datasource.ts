import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import Fuse, { FuseOptions } from 'fuse.js';
import { merge, of as observableOf, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import docs from '../../assets/docs/ribbon.json';
import { IJSDocJSON, IRibbonDocs } from '../../util';

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
  private filterChange = new BehaviorSubject('');
  private paginator: MatPaginator;
  private sort: MatSort;

  constructor (paginator: MatPaginator, sort: MatSort) {
    super();
    this.sort = sort;
    this.paginator = paginator;
  }

  get filter (): string {
    return this.filterChange.value;
  }

  set filter (filter: string) {
    this.filterChange.next(filter);
  }

  connect (): Observable<IRibbonDocs[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange,
      this.filterChange
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

  private getFilteredData (data: IRibbonDocs[]): IRibbonDocs[] {
    if (this.filter) {
      const filterOptions: FuseOptions<IRibbonDocs> = {
        keys: ['name', 'description', 'aliases', 'category'],
        threshold: 0.2,
        shouldSort: false,
      };

      const fuse = new Fuse(data, filterOptions);
      const search = fuse.search(this.filter);

      return search;
    }

    return data;
  }
}
