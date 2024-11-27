import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  activeTab: 'overview' | 'cast' | 'reviews' = 'overview';
  showFullDescription = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // In a real app, we would fetch movie details using the ID
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      // this.loadMovieDetails(movieId);
    });
  }

  setActiveTab(tab: 'overview' | 'cast' | 'reviews'): void {
    this.activeTab = tab;
  }

  toggleDescription(): void {
    this.showFullDescription = !this.showFullDescription;
  }
}
