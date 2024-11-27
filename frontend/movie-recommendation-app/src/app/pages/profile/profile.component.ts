import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  activeTab: 'overview' | 'preferences' | 'history' | 'lists' = 'overview';
  preferredGenres: string[] = ['Action', 'Sci-Fi'];
  watchHistory = Array(6).fill(null); // Placeholder
  watchlist = Array(4).fill(null); // Placeholder
  favorites = Array(4).fill(null); // Placeholder

  genres = [
    'Action', 'Drama', 'Comedy', 'Sci-Fi', 'Horror', 
    'Romance', 'Thriller', 'Animation', 'Documentary'
  ];

  userStats = {
    moviesWatched: 142,
    reviewsWritten: 23,
    listsCreated: 5,
    favoriteGenre: 'Sci-Fi'
  };

  constructor() {}

  ngOnInit(): void {}

  setActiveTab(tab: 'overview' | 'preferences' | 'history' | 'lists'): void {
    this.activeTab = tab;
  }

  toggleGenre(genre: string): void {
    const index = this.preferredGenres.indexOf(genre);
    if (index === -1) {
      this.preferredGenres.push(genre);
    } else {
      this.preferredGenres.splice(index, 1);
    }
    this.updatePreferences();
  }

  private updatePreferences(): void {
    // In a real app, this would update user preferences in the backend
    console.log('Updating preferences:', this.preferredGenres);
  }

  removeFromList(listType: string, index: number): void {
    // In a real app, this would remove the item from the specified list
    console.log(`Removing item ${index} from ${listType}`);
  }
}
