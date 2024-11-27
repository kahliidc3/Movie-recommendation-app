import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  selectedGenres: string[] = [];
  selectedYears: string[] = [];
  selectedRating = '';
  showFilters = false;
  private searchSubject = new Subject<string>();

  genres = ['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Horror', 'Romance', 'Thriller', 'Animation'];
  years = Array.from({length: 24}, (_, i) => (2024 - i).toString());
  ratings = ['9+', '8+', '7+', '6+', 'All'];

  searchResults = Array(12).fill(null); // Placeholder for demo

  ngOnInit(): void {
    this.setupSearchSubscription();
  }

  private setupSearchSubscription(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.performSearch(term);
    });
  }

  onSearchInput(term: string): void {
    this.searchSubject.next(term);
  }

  private performSearch(term: string): void {
    // In a real app, this would call a service
    console.log('Searching for:', term);
  }

  toggleGenre(genre: string): void {
    const index = this.selectedGenres.indexOf(genre);
    if (index === -1) {
      this.selectedGenres.push(genre);
    } else {
      this.selectedGenres.splice(index, 1);
    }
    this.updateResults();
  }

  toggleYear(year: string): void {
    const index = this.selectedYears.indexOf(year);
    if (index === -1) {
      this.selectedYears.push(year);
    } else {
      this.selectedYears.splice(index, 1);
    }
    this.updateResults();
  }

  setRating(rating: string): void {
    this.selectedRating = rating;
    this.updateResults();
  }

  private updateResults(): void {
    // In a real app, this would apply filters and update results
    console.log('Updating results with filters:', {
      genres: this.selectedGenres,
      years: this.selectedYears,
      rating: this.selectedRating
    });
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }
}
