import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product_api = 'https://fakestoreapi.com/products';
  //product_api = 'https://fakestoreapi.com/roducts';
  httpClient = inject(HttpClient);

  getAllProducts() {
    return this.httpClient.get(this.product_api);
  }
}
