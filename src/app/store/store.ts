import { counterReducer } from "../reducers/counter.reducer";
import { todoReducer } from '../reducers/todo.reducer';
import { employeesReducer } from '../reducers/employee.reducer';

export const myStore = {
  countData: counterReducer,
  todoData: todoReducer,
  employeeData: employeesReducer,
};