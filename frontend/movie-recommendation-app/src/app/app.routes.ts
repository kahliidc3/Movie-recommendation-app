import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RecommendationExplanationComponent } from './pages/recommendation-explanation/recommendation-explanation.component';
import { HelpComponent } from './pages/help/help.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

// Define and export routes
export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'recommendation-explanation', component: RecommendationExplanationComponent },
  { path: 'help', component: HelpComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent }
];
