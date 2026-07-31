import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort',
  pure: false,
})
export class MysortPipe implements PipeTransform {
    transform(arr: any[]) {
    console.log('Sort pipe called...');
    return arr.sort((a, b) => a - b);
  }
}

