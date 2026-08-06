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

  ngOnInit() {}   //write logic here if you want to fetch data on page load

  fetchData() {
    this.isLoading.set(true);
    this.productService.getAllProducts().subscribe((response: any) => {
      console.log(response);  //
      this.productList.set(response);
      this.isLoading.set(false);
    });
  }
}

/*
When page loaded it loaded with empty array. When data is fetched and assigned a new variable the data is not rerendering
We used signal for data or ui to rerender
*/
