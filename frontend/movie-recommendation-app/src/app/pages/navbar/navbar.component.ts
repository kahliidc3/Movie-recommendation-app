import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
// import { InputTextModule } from 'primeng/inputtext';
// import { ButtonModule } from 'primeng/button';
// import { MenubarModule } from 'primeng/menubar';
// import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isSearchExpanded: boolean = false;
  isMobileMenuOpen: boolean = false;
  isScrolled: boolean = false;
  isUserMenuOpen: boolean = false;

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    // Check initial scroll position
    this.checkScroll();
  }
  
  @HostListener('window:scroll', [])
  checkScroll(): void {
    // Add 'scrolled' class when page is scrolled down more than 50px
    this.isScrolled = window.scrollY > 50;
  }

  expandSearch() {
    this.isSearchExpanded = true;
  }

  collapseSearch() {
    this.isSearchExpanded = false;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  // Method to check if route is active for styling
  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
  
  // Toggle search functionality
  toggleSearch() {
    this.isSearchExpanded = !this.isSearchExpanded;
  }
}
