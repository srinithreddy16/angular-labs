import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import product_data from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { Charonly } from '../../directives/charonly';
import { DisableCopyPaste } from '../../directives/disable-copy-paste';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FontAwesomeModule, NgxPaginationModule, CommonModule, FormsModule, Charonly, DisableCopyPaste],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  productArr = product_data;
  faStar = faStar;
  p = 1;

  searchText = '';
  sortOrder = 'none';

  get filteredProducts() {
    let result = this.productArr;

    if (this.searchText) {
      result = result.filter(product =>
        product.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    if (this.sortOrder === 'asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }

  openAlert() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
  openSnackbar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }

}