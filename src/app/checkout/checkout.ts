import { Component } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { FormsModule } from '@angular/forms';

interface paymentForm {
  nombre: string,
  email: string,
  direccion: string,
  metodoPago: string
}

@Component({
  selector: 'app-checkout',
  imports: [FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  formulario: paymentForm = {
    nombre: '',
    email: '',
    direccion: '',
    metodoPago: 'tarjeta'
  }

  constructor(
    private cartDataService: CartDataService
  ){}

  get items() {
    return this.cartDataService.getCartItems();
  }

  get total() {
    return this.cartDataService.getTotal();
  }

  finalizarCompra() {
    // 1. Generar número de pedido aleatorio (entre 10000 y 99999)
    const numeroPedido = Math.floor(Math.random() * 90000) + 10000;
    
    alert(`¡Pedido confirmado! Tu número de pedido es: ${numeroPedido}`);
    
    this.cartDataService.clearCart();
    
    this.formulario = {
      nombre: '',
      email: '',
      direccion: '',
      metodoPago: 'tarjeta'
    };
  }
}
