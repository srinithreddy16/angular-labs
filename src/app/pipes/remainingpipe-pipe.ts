import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
})
export class RemainingPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return 100 - value.length;
  }
}