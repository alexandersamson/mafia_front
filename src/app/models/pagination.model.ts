import {Injectable} from '@angular/core';
import {Adapter} from '../common/adapter';

export class Pagination {
  constructor(
    public objectName: string,
    public page: number,
    public totalPages: number,
    public nextPage: number,
    public previousPage: number,
    public itemsPerPage: number,
    public currentItems: number,
    public totalItems: number,
  ) {
  }
}
@Injectable({
  providedIn: 'root',
})
export class PaginationAdapter implements Adapter<Pagination> {
  adapt(item: any): Pagination {
    return new Pagination(
      item.objectName,
      item.page,
      item.totalPages,
      item.nextPage,
      item.previousPage,
      item.itemsPerPage,
      item.currentItems,
      item.totalItems);
  }
}
