import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DirectivesDemo } from '../directives-demo/directives-demo'
import { ProductList } from '../product-list/product-list';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { PipeDemo } from '../pipe-demo/pipe-demo';

@Component({
  selector: 'app-body',
  imports: [Databinding, DirectivesDemo, ProductList, EmployeeCRUD, PipeDemo],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
