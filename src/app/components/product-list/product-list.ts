import { Component } from '@angular/core';
import product_data from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import {NgxPaginationModule} from 'ngx-pagination';




@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FontAwesomeModule, NgxPaginationModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  productArr = product_data;
  faStar = faStar;
  p=1;


}
