import { Component } from '@angular/core';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { PipeDemo } from '../pipe-demo/pipe-demo';
import { Ratings } from '../ratings/ratings';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Categories } from "../categories/categories";
import { Employee2CRUD } from '../employee2-crud/employee2-crud';
import { Login } from '../login/login';
import { Logout } from '../logout/logout';
import { Employee3 } from '../employee3/employee3';
import { CommentList } from '../comment-list/comment-list';
import { Employee4 } from '../employee4/employee4';
import { ProductListHttp } from '../product-list-http/product-list-http';
import { EmployeeListHttp2 } from '../employee-list-http2/employee-list-http2';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservabaleDemo2 } from '../observabale-demo2/observabale-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
@Component({
  selector: 'app-body',
  imports: [EmployeeCRUD, PipeDemo, Ratings, ParentDemo, Categories, Employee2CRUD, Login, Logout, Employee3, CommentList, Employee4, ProductListHttp, EmployeeListHttp2, ObservabaleDemo2, ObservableDemo1, ObservableDemo3],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag = true;
}
