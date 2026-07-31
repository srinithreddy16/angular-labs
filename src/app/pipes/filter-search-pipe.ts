import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
  //pure: false,
})
export class FilterSearchPipe implements PipeTransform {
  transform(employees: any[], searchText: string): any[] {

    if(!searchText){
      return employees;
    }

    searchText = searchText.toLowerCase();

    return employees.filter((emp) =>{
      return emp.name.toLowerCase().includes(searchText);
    });
    
    
  }
}
