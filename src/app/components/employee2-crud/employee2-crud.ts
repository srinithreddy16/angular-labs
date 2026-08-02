import { Component } from '@angular/core';
import { EmployeeTable } from "../employee-table/employee-table";
import { EmployeeAdd } from "../employee-add/employee-add";
import Snackbar from 'awesome-snackbar';
import { MESSAGES } from '../../constants/messages';

@Component({
  selector: 'app-employee2-crud',
  imports: [EmployeeTable, EmployeeAdd],
  templateUrl: './employee2-crud.html',
  styleUrl: './employee2-crud.css',
})
export class Employee2CRUD {

  employees = [
  { id: 1, name: 'Rohit Sharma', department: 'Sales', salary: 45000 },
  { id: 2, name: 'Priya Verma', department: 'HR', salary: 38000 },
  { id: 3, name: 'Amit Kumar', department: 'IT', salary: 62000 },
  { id: 4, name: 'Sneha Patil', department: 'Finance', salary: 55000 },
  { id: 5, name: 'Karan Mehta', department: 'IT', salary: 48000 },
];

deleteEmployee(emp: any){
    if (confirm('Delete ' + emp.name + '?')){  // only run the code inside the block if the user actually clicked OK
      this.employees = this.employees.filter((e) => e.id !== emp.id);
    }
  }

  addEmployee(emp: any){
    const newId = Math.max(...this.employees.map((e) => e.id)) + 1;
    this.employees.push({id: newId, ...emp});
    new Snackbar(MESSAGES.EMPLOYEE_ADDED, {position: 'top-center', timeout: 3000});
  }
}
