import { Injectable } from '@angular/core';

export interface Comic {
  id: number,
  titulo: string,
  autor: string, 
  editorial: string,
  precio: number,
  imagen: string,
  descripcion: string,
  stock: number,
  destacado: boolean
}

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  private comics: Comic[] = [
    {
      id: 1,
      titulo: 'Watchmen',
      autor: 'Alan Moore',
      editorial: 'DC Comics',
      precio: 24.99,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Watchmen-cover.svg/960px-Watchmen-cover.svg.png',
      descripcion: 'Una obra maestra del cómic que deconstruye el género de superhéroes.',
      stock: 8,
      destacado: true
    },
    {
      id: 2,
      titulo: 'The Sandman Vol. 1',
      autor: 'Neil Gaiman',
      editorial: 'DC Comics',
      precio: 19.99,
      imagen: 'https://i0.wp.com/lecturassumergidas.com/wp-content/uploads/2019/06/tumblr_o64norTn5U1sp0c5uo1_500.jpg?w=500&ssl=1',
      descripcion: 'La historia de Morfeo, el Señor de los Sueños.',
      stock: 12,
      destacado: true
    },
    {
      id: 3,
      titulo: 'Batman: The Killing Joke',
      autor: 'Alan Moore',
      editorial: 'DC Comics',
      precio: 16.99,
      imagen: 'https://m.media-amazon.com/images/I/A1QY5vfbpmL._SY466_.jpg',
      descripcion: 'El origen del Joker en una historia inolvidable.',
      stock: 5,
      destacado: false
    },
    {
      id: 4,
      titulo: 'Spider-Man: Kraven\'s Last Hunt',
      autor: 'J.M. DeMatteis',
      editorial: 'Marvel',
      precio: 18.99,
      imagen: 'https://m.media-amazon.com/images/I/813NhXAicML._SL1500_.jpg',
      descripcion: 'Una de las mejores historias de Spider-Man jamás contadas.',
      stock: 7,
      destacado: true
    },
    {
      id: 5,
      titulo: 'Saga Vol. 1',
      autor: 'Brian K. Vaughan',
      editorial: 'Image Comics',
      precio: 14.99,
      imagen: 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/d7023064-c180-46df-b2da-30515363867f/d_360_620/portada_saga-n-01_brian-kvaughan_202207150941.webp',
      descripcion: 'Una épica space opera con personajes inolvidables.',
      stock: 15,
      destacado: false
    },
    {
      id: 6,
      titulo: 'Maus',
      autor: 'Art Spiegelman',
      editorial: 'Pantheon Books',
      precio: 22.99,
      imagen: 'https://m.media-amazon.com/images/I/71nXxfnNEcL._SY466_.jpg',
      descripcion: 'Una poderosa novela gráfica sobre el Holocausto.',
      stock: 6,
      destacado: false
    }
  ];

  getComics() {
    return this.comics;
  };

  getComicById(id: number) {
    return this.comics.find(comic => comic.id === id)
  };
}
