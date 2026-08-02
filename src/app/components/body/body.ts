import { Component } from '@angular/core';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { PipeDemo } from '../pipe-demo/pipe-demo';
import { Ratings } from '../ratings/ratings';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Categories } from "../categories/categories";
import { Employee2CRUD } from '../employee2-crud/employee2-crud';

@Component({
  selector: 'app-body',
  imports: [EmployeeCRUD, PipeDemo, Ratings, ParentDemo, Categories, Employee2CRUD],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
