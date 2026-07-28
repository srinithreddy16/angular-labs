import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DirectivesDemo } from '../directives-demo/directives-demo'
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-body',
  imports: [Databinding, DirectivesDemo, ProductList],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
