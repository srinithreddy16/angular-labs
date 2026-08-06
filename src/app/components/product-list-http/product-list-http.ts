import { Observable } from 'rxjs';
import { ProductService } from './../../services/product-service';
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-http',
  imports: [CommonModule],
  templateUrl: './product-list-http.html',
  styleUrl: './product-list-http.css',
})
export class ProductListHttp {
  productService = inject(ProductService);  //DI
  productList: any = signal([]);
  isLoading: any = signal(false);

  ngOnInit() {}

  fetchData() {
    this.isLoading.set(true);
    this.productService.getAllProducts().subscribe((response: any) => {
      console.log(response);
      this.productList.set(response);
      this.isLoading.set(false);
    });
  }
}
