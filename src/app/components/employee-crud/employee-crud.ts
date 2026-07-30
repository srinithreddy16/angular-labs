import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import Snackbar from 'awesome-snackbar';
import Swal from 'sweetalert2';
import { MESSAGES } from '../../constants/messages';



@Component({
  selector: 'app-employee-crud',
  imports: [FontAwesomeModule, FormsModule, CommonModule ],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCRUD {

  faEye = faEye;
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;
  
  employees = [
  { id: 1, name: 'Amit Sharma', email: 'amit.sharma@company.com', department: 'HR', designation: 'HR Manager', salary: 65000 },
  { id: 2, name: 'Priya Verma', email: 'priya.verma@company.com', department: 'Engineering', designation: 'Software Engineer', salary: 72000 },
  { id: 3, name: 'Rahul Mehta', email: 'rahul.mehta@company.com', department: 'Sales', designation: 'Sales Executive', salary: 45000 },
  { id: 4, name: 'Sneha Iyer', email: 'sneha.iyer@company.com', department: 'Engineering', designation: 'Frontend Developer', salary: 68000 },
  { id: 5, name: 'Karan Singh', email: 'karan.singh@company.com', department: 'Finance', designation: 'Accountant', salary: 52000 },
  { id: 6, name: 'Neha Gupta', email: 'neha.gupta@company.com', department: 'Marketing', designation: 'Marketing Lead', salary: 78000 },
];

selectedEmployee: any = null;
newEmployee: any = {name: '', email:'', department: '', designation: '', salary: null };

viewEmployee(emp: any){
  this.selectedEmployee = emp;
}

editEmployee(emp: any){
  console.log('Edit clicked for', emp.name)
}


deleteEmployee(emp: any){
  Swal.fire({
    title: 'Delete' + emp.name + '?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed){
      this.employees = this.employees.filter(e => e.id !== emp.id);
      Swal.fire('Deleted!', emp.name + ' has been removed.', 'success');
    }
  });  
  }

  
  addEmployee(){
    const newId = Math.max(...this.employees.map(e => e.id)) + 1;
    this.employees.push({ id: newId, ...this.newEmployee});
    this.newEmployee = {name:'', email: '', department: '', designation: '', salary: null};
    new Snackbar(MESSAGES.EMPLOYEE_ADDED, {position: 'bottom-center', timeout:3000});
  }

  




}






