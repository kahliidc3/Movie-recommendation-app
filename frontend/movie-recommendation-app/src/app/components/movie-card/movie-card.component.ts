import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img [src]="movie.poster_path" [alt]="movie.title" class="w-full h-64 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold">{{ movie.title }}</h3>
        <p class="text-gray-600">{{ movie.release_date | date }}</p>
        <div class="mt-2">
          <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {{ movie.vote_average }}/10
          </span>
        </div>
      </div>
    </div>
  `
})
export class MovieCardComponent {
  @Input() movie!: Movie;
} 