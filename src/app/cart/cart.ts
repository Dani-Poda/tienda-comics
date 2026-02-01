import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { CartDataService } from '../cart-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(
    public cartService: CartDataService
  ){};

  get items() {
    return this.cartService.getCartItems();
  };
  
  get total() {
    return this.cartService.getTotal();
  };

  removeItem(i: number){
    return this.cartService.removeFromCart(i);
  }
}
