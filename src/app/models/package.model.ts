import {Injectable} from '@angular/core';
import {Adapter} from '../common/adapter';
import {Game} from './game-models/game.model';

export class Package {
  constructor(
    public data: Array<object>,
    public error: Array<object>,
    public messages: Array<object>,
    public pagination: Array<object>,
    public meta: Array<object>
  ) {
  }
}
@Injectable({
  providedIn: 'root',
})
export class PackageAdapter implements Adapter<Package> {
  adapt(item: any): Package {
    return new Package(
      item.data,
      item.error,
      item.messages,
      item.pagination,
      item.meta);
  }
}
