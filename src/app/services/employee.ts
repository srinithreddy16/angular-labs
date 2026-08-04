import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  employees = [
    { id: 1, name: 'Rohit Sharma', gender: 'Male', department: 'Sales', salary: 45000 },
    { id: 2, name: 'Priya Verma', gender: 'Female', department: 'HR', salary: 38000 },
    { id: 3, name: 'Amit Kumar', gender: 'Male', department: 'IT', salary: 62000 },
    { id: 4, name: 'Sneha Patil', gender: 'Female', department: 'Finance', salary: 55000 },
    { id: 5, name: 'Karan Mehta', gender: 'Male', department: 'IT', salary: 48000 },
    { id: 6, name: 'Neha Gupta', gender: 'Female', department: 'Marketing', salary: 51000 },
  ];


  getAllEmployees(){
    return this.employees;
  }

  getMaleEmployees(){
    return this.employees.filter((emp)=> emp.gender === 'Male');
  }

  getFemaleEmployees(){
    return this.employees.filter((emp) => emp.gender === 'Female');
  }
}
