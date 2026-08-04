import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  inputs: ['cartItems'],
})
export class Cart {
  cartItems: any = [];
  cartLength = 0;

  constructor(private cdr: ChangeDetectorRef) {}
  ngDoCheck() {
    // Dependency Injection
    console.log('Cart component Do Check called');
    if (this.cartLength !== this.cartItems.length) {
      console.log('There is a change in cart Item', this.cartLength);
      this.cartLength = this.cartItems.length;
      this.cdr.markForCheck(); //markForCheck means explicitly we are telling if there is any change in my component please refresh my UI.
    }
  }
}
