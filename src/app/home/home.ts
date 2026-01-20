import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Comic, ComicsService } from '../comics-service';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(
    private comicsService: ComicsService
  ){

  }

  get comicDestacado(){
    return this.comicsService.getComics().filter(comic => comic.destacado);
  }
}
