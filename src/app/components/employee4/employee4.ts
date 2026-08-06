import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { EmployeeHttp } from '../../services/employee-http';

@Component({
  selector: 'app-employee4',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee4.html',
  styleUrl: './employee4.css',
})
export class Employee4 {
  employeeList!: Observable<any>;
  newEmployee: any = { name: '', email: '', department: '', salary: null };
  editId: any = null;

  constructor(private employeeService: EmployeeHttp) {} // DI via constructor

  ngOnInit() {
    this.employeeList = this.employeeService.getAllEmployees();
  }

  editEmployee(emp: any) {
    this.editId = emp.id;
    this.newEmployee = { ...emp };
  }

  addEmployee() {
    if (this.editId) {
      // UPDATE
      this.employeeService.updateEmployee(this.editId, this.newEmployee).subscribe(() => {
        this.employeeList = this.employeeService.getAllEmployees();
        this.newEmployee = { name: '', email: '', department: '', salary: null };
        this.editId = null;
      });
    } else {
      // ADD
      this.employeeService.addEmployee(this.newEmployee).subscribe(() => {
        this.employeeList = this.employeeService.getAllEmployees();
        this.newEmployee = { name: '', email: '', department: '', salary: null };
      });
    }
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employeeList = this.employeeService.getAllEmployees();
    });
  }
}
