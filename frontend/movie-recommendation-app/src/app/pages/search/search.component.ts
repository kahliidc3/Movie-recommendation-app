import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule],
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

  sortOptions: any[] = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Rating', value: 'rating' },
    { label: 'Year', value: 'year' },
    { label: 'Title (A-Z)', value: 'title-asc' }
  ];
  selectedSortOption: any = { label: 'Relevance', value: 'relevance' };

  ngOnInit(): void {
    this.setupSearchSubscription();
    this.performSearch(this.searchTerm);
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
    // Placeholder for search results based on term
    this.searchResults = Array(12).fill(null).map((_, i) => ({ 
      title: `Movie ${i + 1} for ${term}`,
      rating: (Math.random() * 2 + 7).toFixed(1),
      year: (2000 + Math.floor(Math.random() * 24)).toString(),
      genres: ['Action', 'Sci-Fi'][Math.floor(Math.random() * 2)],
      image: `/assets/images/movie${(i % 3) + 1}.jpg`,
      fandrummers: Math.floor(Math.random() * (900000 - 100000 + 1)) + 100000,
      fandrumming: Math.floor(Math.random() * (800000 - 50000 + 1)) + 50000,
      moodMatch: Math.floor(Math.random() * (99 - 80 + 1)) + 80
    }));
    this.applySorting();
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
    // Placeholder for filtered results
    this.searchResults = Array(12).fill(null).map((_, i) => ({ 
      title: `Filtered Movie ${i + 1}`,
      rating: (Math.random() * 2 + 7).toFixed(1),
      year: (2000 + Math.floor(Math.random() * 24)).toString(),
      genres: ['Drama', 'Comedy'][Math.floor(Math.random() * 2)],
      image: `/assets/images/movie${(i % 3) + 1}.jpg`,
      fandrummers: Math.floor(Math.random() * (900000 - 100000 + 1)) + 100000,
      fandrumming: Math.floor(Math.random() * (800000 - 50000 + 1)) + 50000,
      moodMatch: Math.floor(Math.random() * (99 - 80 + 1)) + 80
    }));
    this.applySorting();
  }

  onSortChange(): void {
    this.applySorting();
  }

  private applySorting(): void {
    if (!this.searchResults || this.searchResults.length === 0) {
      return;
    }

    switch (this.selectedSortOption.value) {
      case 'relevance':
        // For demo, relevance is just the initial order from performSearch/updateResults
        break;
      case 'rating':
        this.searchResults.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      case 'year':
        this.searchResults.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        break;
      case 'title-asc':
        this.searchResults.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }
}
