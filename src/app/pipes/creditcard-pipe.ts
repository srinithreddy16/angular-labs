import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
})
export class CreditcardPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    if(!value){
      return '';
    }

    const cardNum = String(value);  //number->string and string concatination
    let result='';

    for(let i=0; i<cardNum.length; i++){
      if(i>0 && i % 4 === 0){
        result = result + '-';
      }
      result = result + cardNum[i];
    }

    return result;
    
    
  }
}
