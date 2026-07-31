import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    if(!value){
      return '';
    }

    const splitDate = String(value).split('-');  //(05-06-2016)=["05", "06", "2016"]
    const day = Number(splitDate[0]);   //converting string to number to perform oprations below
    const month = Number(splitDate[1]);
    const year = Number(splitDate[2]);

    const today = new Date();
    let age = today.getFullYear()-year;

    //checking for birthday month and date 

    if(today.getMonth() + 1 < month){  //(+1 because jan-dec counts from 0-11 so + 1 for current month )
      age=age-1;   //still birthday has not happened
    }
    else if(today.getMonth() +1 === month && today.getDate() < day){  // calculating in the same month but can be just before the birth day date
      age = age - 1;
    }

    return age + ' years old';
    
  }
}
