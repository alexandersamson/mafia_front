import { Pipe, PipeTransform } from '@angular/core';
import {isObservable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';

@Pipe({
  name: 'withLoading'
})
export class WithLoadingPipe implements PipeTransform {

  transform(val): boolean {
    return isObservable(val)
      ? val.pipe(
        map((value: any) => ({
          loading: value.type === 'start',
          value: value.type ? value.value : value
        })),
        startWith({ loading: true }),
        catchError(error => of({ loading: false, error }))
      )
      : val;
  }

}
