import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    this.initializeSliders();
  }

  private initializeSliders(): void {
    // Initialize slider functionality
    const sliders = document.querySelectorAll('.movies-slider');
    
    sliders.forEach(slider => {
      const parent = slider.parentElement;
      if (!parent) return;

      const leftButton = parent.querySelector('.scroll-button.left');
      const rightButton = parent.querySelector('.scroll-button.right');

      if (leftButton && rightButton) {
        leftButton.addEventListener('click', () => {
          slider.scrollBy({ left: -400, behavior: 'smooth' });
        });

        rightButton.addEventListener('click', () => {
          slider.scrollBy({ left: 400, behavior: 'smooth' });
        });
      }
    });
  }
}
