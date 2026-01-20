import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartDataService } from '../cart-data.service';
import { Comic, ComicsService } from '../comics-service';

@Component({
  selector: 'app-products-detail',
  imports: [CommonModule],
  templateUrl: './products-detail.html',
  styleUrl: './products-detail.css',
})
export class ProductsDetail {
  comicId: number = 0;

  comic: Comic | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartDataService,
    private comicsService: ComicsService
  ){
    this.comicId = Number(this.route.snapshot.paramMap.get('id'));
    this.comic = this.comicsService.getComicById(this.comicId);
  }

  addToCart() {
    if (this.comic) {
      const added = this.cartService.addToCart(this.comic);
      if (added) {
        alert('Cómic añadido al carrito');
      } else {
        alert('No hay más stock disponible');
      }
    }
  }

}
