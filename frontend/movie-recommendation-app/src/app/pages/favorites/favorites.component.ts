import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FavoriteMovie {
  title: string;
  image: string;
  genres: string[];
  rating: number;
  year: number;
}

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favorites: FavoriteMovie[] = [
    {
      title: 'Inception',
      image: '/assets/images/movie1.jpg',
      genres: ['Sci-Fi', 'Action', 'Thriller'],
      rating: 8.8,
      year: 2010
    },
    {
      title: 'Interstellar',
      image: '/assets/images/movie2.jpg',
      genres: ['Sci-Fi', 'Adventure', 'Drama'],
      rating: 8.6,
      year: 2014
    },
    {
      title: 'Coco',
      image: '/assets/images/movie3.jpg',
      genres: ['Animation', 'Family', 'Fantasy'],
      rating: 8.4,
      year: 2017
    },
    {
      title: 'The Dark Knight',
      image: '/assets/images/movie4.jpg',
      genres: ['Action', 'Crime', 'Drama'],
      rating: 9.0,
      year: 2008
    }
  ];

  removeFromFavorites(index: number) {
    this.favorites.splice(index, 1);
  }
}
