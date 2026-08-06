import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee2 } from '../models/employee2';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService2 {
  employee_api = 'http://localhost:3000/employees';
  httpClient = inject(HttpClient);

  getAllEmployees(): Observable<Employee2[]> {
    // service returns the response as it is to the component without changing
    // return this.httpClient.get<Employee2[]>(this.employee_api);

    // Service should convert each response to Employee Object and return
    return this.httpClient.get<Employee2[]>(this.employee_api).pipe(
      map((responseArr: Employee2[]) => {
        console.log('responseArr::',responseArr)
        return responseArr.map((responseObj: Employee2) => new Employee2(responseObj));
      }),
    );
  }
}
