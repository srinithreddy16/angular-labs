import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeHttp {
  employee_api='http://localhost:3000/employees';
  httpClient = inject(HttpClient);

   
  getAllEmployees(){
    return this.httpClient.get(this.employee_api);
  }

  addEmployee(newEmployee: any){  
    return this.httpClient.post(this.employee_api, newEmployee);
  }

  deleteEmployee(id:any){
    return this.httpClient.delete(this.employee_api + '/' + id);
  }

  updateEmployee(id: any, employee: any){
    return this.httpClient.put(this.employee_api + '/' +id, employee)
  }
}
