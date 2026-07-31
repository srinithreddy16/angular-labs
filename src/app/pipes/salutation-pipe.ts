import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
})
export class SalutationPipe implements PipeTransform {
  transform(value: unknown, gender?: string): string {
    if(!value){
      return '';
    }

    if(gender === 'female'){
      return 'Miss. ' + value;
    }else {
      return 'Mr. ' + value;
    }
    
  }
}
