import { Injectable } from '@angular/core';
import { Comic, ComicsService } from './comics-service';


export interface CartItem {
  comic: Comic,
  cantidad: number
}

@Injectable({
  providedIn: 'root',
})

export class CartDataService {
  private cartItems: CartItem[] = [];

  constructor(
    private comicsService: ComicsService
  ){};

  addToCart(comic: Comic) {
    const itemExistente = this.cartItems.find(item => item.comic.id === comic.id);
    if (itemExistente) {
      if (comic.stock > 0) {
        itemExistente.cantidad++;
        comic.stock--;
        return true; // Se pudo añadir
      } else {
        return false; // No hay stock
      }
    } else {
      if (comic.stock > 0) {
        this.cartItems.push({ comic: comic, cantidad: 1 });
        comic.stock--;
        return true; // Se pudo añadir
      } else {
        return false; // No hay stock
      }
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => total + (item.comic.precio * item.cantidad), 0);
  }

  removeFromCart(i: number) {
    const item = this.cartItems[i];  
    
    if (item.cantidad > 1) {
      item.cantidad--; 
      item.comic.stock++;
    } else {
      item.comic.stock++;
      this.cartItems.splice(i, 1);  
    }
  }
}
