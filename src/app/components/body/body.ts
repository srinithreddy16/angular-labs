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

@Component({
  selector: 'app-body',
  imports: [EmployeeCRUD, PipeDemo, Ratings, ParentDemo, Categories, Employee2CRUD, Login, Logout, Employee3, CommentList],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag = true;
}
