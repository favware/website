import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DexaDocs } from '@util/interfaces.js';
import Fuse, { FuseOptions } from 'fuse.js';
import { BehaviorSubject, merge, Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';

const DEXA_DATA: DexaDocs[] = [
    {
      name: 'ability',
      description: 'Gets information on an ability',
      examples: 'ability data multiscale, ability data pressure'
    },
    {
      name: 'dex',
      description: 'Gets information on a Pokémon',
      examples: 'pokemon data dragonite, data on pikachu'
    },
    {
      name: 'item',
      description: 'Gets information on an item',
      examples: 'item data life orb, item data assault vest'
    },
    {
      name: 'move',
      description: 'Gets information on a move',
      examples: 'move data dragon dance, move data swords dance'
    },
]

const compare = (a: string, b: string, isAsc: boolean) => {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
};

export class DexaDocsDatasource extends DataSource<DexaDocs> {
  public data: DexaDocs[] = DEXA_DATA;
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

  public connect (): Observable<DexaDocs[]> {
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

  private getPagedData (data: DexaDocs[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData (data: DexaDocs[]) {
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

  private getFilteredData (data: DexaDocs[]): DexaDocs[] {
    if (this.filter) {
      const filterOptions: FuseOptions<DexaDocs> = {
        keys: ['name', 'description', 'examples'],
        threshold: 0.2,
        shouldSort: false,
      };

      const fuse = new Fuse(data, filterOptions);
      const search = fuse.search(this.filter) as DexaDocs[];

      return search;
    }

    return data;
  }
}
