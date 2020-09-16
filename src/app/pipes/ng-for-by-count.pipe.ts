import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forCount'
})
  export class NgForByCountPipe implements PipeTransform {
  transform(value): Array<number> {
    return (new Array(value)).fill(1);
  }
}
