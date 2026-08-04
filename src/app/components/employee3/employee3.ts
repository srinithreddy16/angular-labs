import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../services/employee';

@Component({
  selector: 'app-employee3',
  imports: [FormsModule],
  templateUrl: './employee3.html',
  styleUrl: './employee3.css',
})
export class Employee3 {
  selectedFilter = 'allEmployees';
  employees: any[] = [];

  constructor(private employeeService: Employee) {} //DI

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    if (this.selectedFilter === 'allEmployees') {
      this.employees = this.employeeService.getAllEmployees();
    } else if (this.selectedFilter === 'maleEmployees') {
      this.employees = this.employeeService.getMaleEmployees();
    } else if (this.selectedFilter === 'femaleEmployees') {
      this.employees = this.employeeService.getFemaleEmployees();
    }
  }
}



/*
ngOnInit = “run this once when the component starts” → fill the table before the user touches the dropdown.

*/
