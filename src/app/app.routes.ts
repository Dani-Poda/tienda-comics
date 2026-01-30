import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { ProductsDetail } from './products-detail/products-detail';
import { Cart } from './cart/cart';



export const routes: Routes = [
  { 
    path: '', 
    component: Home 
  },

  {
    path: 'products',
    component: Products
  },

  {
    path: 'products/:id',
    component: ProductsDetail
  },

  {
    path: 'cart',
    component: Cart
  }
];
