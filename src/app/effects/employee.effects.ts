import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { EmployeeService3 } from '../services/employee-service3';
import {
  addEmployee,
  deleteEmployee,
  fetchEmployees,
  fetchEmployeesError,
  fetchEmployeesSucess,
} from '../actions/employee.actions';

@Injectable()
export class EmployeeEffects {
  loadEmployees$: any;
  deleteEmployee$: any;
  addEmployee$: any;
  actions$ = inject(Actions);
  employeeService = inject(EmployeeService3);

  constructor() {
    this.loadEmployees$ = createEffect(() =>
      this.actions$.pipe(
        ofType(fetchEmployees),
        exhaustMap(() =>
          this.employeeService.fetchAllEmployees().pipe(
            map((employees: any) =>
              fetchEmployeesSucess({ payload: employees }),
            ),
            catchError(() => of(fetchEmployeesError())),
          ),
        ),
      ),
    );

    this.deleteEmployee$ = createEffect(() =>
      this.actions$.pipe(
        ofType(deleteEmployee),
        exhaustMap((action: any) =>
          this.employeeService.deleteEmployee(action.id).pipe(
            map(() => {
              alert('Employee Deleted Succesfully');
              return fetchEmployees();
            }),
            catchError(() => of({ type: '[Employees API] Employee Delete Error' })),
          ),
        ),
      ),
    );

    this.addEmployee$ = createEffect(() =>
      this.actions$.pipe(
        ofType(addEmployee),
        exhaustMap((action: any) =>
          this.employeeService.addEmployee(action.employee).pipe(
            map(() => {
              alert('Employee Added Succesfully');
              return fetchEmployees();
            }),
            catchError(() => of({ type: '[Employees API] Employee Add Error' })),
          ),
        ),
      ),
    );
  }
}
