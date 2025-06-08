import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private animationId?: number;
  private particles: THREE.Points | null = null;

  constructor() {}

  ngOnInit(): void {
    this.initializeSliders();
  }

  ngAfterViewInit(): void {
    this.initThreeHeroBg();
  }

  ngOnDestroy(): void {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.renderer) {
      this.renderer.dispose();
    }
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.particles = null;
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

  private initThreeHeroBg(): void {
    const canvas = document.getElementById('three-hero-bg') as HTMLCanvasElement;
    if (!canvas) return;
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setSize(width, height, false);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    this.camera.position.z = 120;

    // Particles (cinematic floating particles)
    const particlesCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      // Gold/blue cinematic color
      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
      colors[i * 3 + 2] = 0.2 + Math.random() * 0.5;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 3, vertexColors: true, transparent: true, opacity: 0.7 });
    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // Animation loop
    const animate = () => {
      if (!this.scene || !this.camera || !this.renderer || !this.particles) return;
      this.particles.rotation.y += 0.0015;
      this.particles.rotation.x += 0.0007;
      this.renderer.render(this.scene, this.camera);
      this.animationId = requestAnimationFrame(animate);
    };
    animate();

    // Responsive resize
    window.addEventListener('resize', () => {
      if (!this.camera || !this.renderer) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h, false);
    });
  }
}
