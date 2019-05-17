import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { JSDocJSON, RibbonDocs } from '@util/interfaces.js';
import Fuse, { FuseOptions } from 'fuse.js';
import { BehaviorSubject, merge, Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';

import docs from '../../assets/docs/ribbon.json';

const ribbondocs: JSDocJSON = docs as unknown as JSDocJSON;

// @ts-ignore Ignoring TypeScript errors because it cannot properly parse JSON despite that it does work
const RIBBON_DATA: RibbonDocs[] = ribbondocs.map((docItem: IJSDocItem) => (
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

export class RibbonDocsDatasource extends DataSource<RibbonDocs> {
  public data: RibbonDocs[] = RIBBON_DATA;
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

  public connect (): Observable<RibbonDocs[]> {
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

  public disconnect () {
    // Intentionally empty
 }
  private getPagedData (data: RibbonDocs[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData (data: RibbonDocs[]) {
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

  private getFilteredData (data: RibbonDocs[]): RibbonDocs[] {
    if (this.filter) {
      const filterOptions: FuseOptions<RibbonDocs> = {
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
