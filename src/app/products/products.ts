import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Comic, ComicsService } from '../comics-service';


@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  constructor(
    private comicsService: ComicsService
  ){};

  get comics(){
    return this.comicsService.getComics()
  };
}
