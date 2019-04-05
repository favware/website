import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { IDexaDocs, IJSDocJSON } from '@util/interfaces.js';
import Fuse, { FuseOptions } from 'fuse.js';
import { merge, of as observableOf, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import docs from '../../assets/docs/dexa.json';

const ribbondocs: IJSDocJSON = docs as unknown as IJSDocJSON;

// @ts-ignore Ignoring TypeScript errors because it cannot properly parse JSON despite that it does work
const DEXA_DATA: IDexaDocs[] = ribbondocs.map((docItem: IJSDocItem) => (
    {
      name: docItem.name,
      description: docItem.description.replace(/.+ - (.+)/g, '$1'),
      examples: docItem.examples.join(', '),
    }
  )
);

const compare = (a, b, isAsc) => {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
};

export class DexaDocsDatasource extends DataSource<IDexaDocs> {
  data: IDexaDocs[] = DEXA_DATA;
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

  connect (): Observable<IDexaDocs[]> {
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

  private getPagedData (data: IDexaDocs[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData (data: IDexaDocs[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'description':
          return compare(a.description, b.description, isAsc);
        case 'examples':
          return compare(a.examples, b.examples, isAsc);
        default:
          return 0;
      }
    });
  }

  private getFilteredData (data: IDexaDocs[]): IDexaDocs[] {
    if (this.filter) {
      const filterOptions: FuseOptions<IDexaDocs> = {
        keys: ['name', 'description', 'examples'],
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
