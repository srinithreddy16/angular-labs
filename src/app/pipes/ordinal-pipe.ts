import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {

    const num = Number(value);


    if (isNaN(num)) {
      return ' ';   //if not a number return empty string
    }

    const lastDigit = num%10;

    if(num%100 ===11 || num%100 === 12 || num%100 === 13){
          return num + 'th';
        }

    switch (lastDigit){
      case 1:
        return num + 'st';  //string concatination // string->num, num->string, so string + st // It looks at the two operands: num is a number, 'st' is a string. Since one side is a string, JavaScript's rule kicks in: "if either operand is a string, convert the other one to a string too, then concatenate." If either side is a string → it switches to concatenation mode, and converts the other side to a string first, then joins them
      case 2:
        return num + 'nd';
      case 3:
        return num + 'rd';
      default:
        return num + 'th';

        // 11, 12, 13 case

        

    }





    
  }
}
