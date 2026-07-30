import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DirectivesDemo } from '../directives-demo/directives-demo'
import { ProductList } from '../product-list/product-list';
import { EmployeeCRUD } from '../employee-crud/employee-crud';

@Component({
  selector: 'app-body',
  imports: [Databinding, DirectivesDemo, ProductList, EmployeeCRUD],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
