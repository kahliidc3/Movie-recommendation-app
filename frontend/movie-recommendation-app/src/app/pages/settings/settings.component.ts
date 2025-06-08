import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  activeTab: 'account' | 'preferences' | 'notifications' | 'privacy' = 'account';

  // Account form
  accountForm: FormGroup;
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  // Preferences
  genres = [
    'Action', 'Drama', 'Comedy', 'Sci-Fi', 'Horror',
    'Romance', 'Thriller', 'Animation', 'Documentary'
  ];
  preferredGenres: string[] = ['Action', 'Sci-Fi'];
  languagePreferences = {
    english: true,
    spanish: false,
    french: false,
    german: false,
    japanese: false,
    korean: false
  };
  contentPreferences = {
    showAdultContent: false,
    autoPlayTrailers: true,
    showSubtitles: true
  };

  // Notifications
  notificationPreferences = {
    email: {
      newRecommendations: true,
      friendActivity: true,
      systemUpdates: false
    },
    push: {
      newRecommendations: true,
      friendActivity: false,
      systemUpdates: false
    },
    frequency: 'daily'
  };

  // Privacy
  privacySettings = {
    profileVisibility: 'friends',
    shareWatchHistory: true,
    shareRatings: false,
    shareLists: true,
    collectWatchData: true,
    collectAnalytics: false
  };

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      username: ['JohnDoe'],
      email: ['john@example.com'],
      currentPassword: [''],
      newPassword: [''],
      confirmPassword: ['']
    });
  }

  setActiveTab(tab: 'account' | 'preferences' | 'notifications' | 'privacy') {
    this.activeTab = tab;
  }

  togglePasswordVisibility(field: 'current' | 'new' | 'confirm') {
    if (field === 'current') this.showCurrentPassword = !this.showCurrentPassword;
    if (field === 'new') this.showNewPassword = !this.showNewPassword;
    if (field === 'confirm') this.showConfirmPassword = !this.showConfirmPassword;
  }

  updateAccount() {
    // Save account changes
    console.log('Account updated:', this.accountForm.value);
  }

  toggleGenre(genre: string) {
    const idx = this.preferredGenres.indexOf(genre);
    if (idx === -1) this.preferredGenres.push(genre);
    else this.preferredGenres.splice(idx, 1);
  }

  savePreferences() {
    // Save preferences
    console.log('Preferences saved:', this.preferredGenres, this.languagePreferences, this.contentPreferences);
  }

  saveNotificationSettings() {
    // Save notification settings
    console.log('Notification settings saved:', this.notificationPreferences);
  }

  savePrivacySettings() {
    // Save privacy settings
    console.log('Privacy settings saved:', this.privacySettings);
  }
}
