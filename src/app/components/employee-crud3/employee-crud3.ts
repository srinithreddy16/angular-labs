import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Employee3 } from '../../models/employee3';
import { deleteEmployee, fetchEmployees } from '../../actions/employee.actions';

@Component({
  selector: 'app-employee-crud3',
  imports: [AsyncPipe],
  templateUrl: './employee-crud3.html',
  styleUrl: './employee-crud3.css',
})
export class EmployeeCrud3 {
  employees$: Observable<Employee3[]> | undefined;

  constructor(private store: Store<any>) {
    this.employees$ = this.store.select((state) => {
      console.log('Selector...');
      return state.employeeData;
    });
    console.log(this.employees$);
  }

  ngOnInit() {
    this.store.dispatch(fetchEmployees());
  }

  deleteEmp(id: any) {
    const flag = confirm('Are you sure, You want to delete this record?');
    if (flag) {
      this.store.dispatch(deleteEmployee({ id }));
    }
  }
}
