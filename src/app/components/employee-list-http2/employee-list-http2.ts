import { Observable } from 'rxjs';
import { EmployeeService2 } from './../../services/employee-service2';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee2 } from '../../models/employee2';

@Component({
  selector: 'app-employee-list-http2',
  imports: [CommonModule],
  templateUrl: './employee-list-http2.html',
  styleUrl: './employee-list-http2.css',
})
export class EmployeeListHttp2 {
  employeeService = inject(EmployeeService2);
  employeeData: Observable<Employee2[]> | undefined;

  ngOnInit() {
    this.employeeData = this.employeeService.getAllEmployees();
    this.employeeService.getAllEmployees().subscribe((response) => {
      console.log('Employee Response:: ', response);
    });
  }
}
