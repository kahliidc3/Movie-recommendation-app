import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import * as THREE from 'three';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {
  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private animationId?: number;
  private particles?: THREE.Points;

  private visualRenderer?: THREE.WebGLRenderer;
  private visualScene?: THREE.Scene;
  private visualCamera?: THREE.PerspectiveCamera;
  private visualAnimationId?: number;
  private dodecahedron?: THREE.LineSegments;

  constructor() { }

  ngOnInit(): void {
    // Any initialization logic can go here, though for Three.js it's usually in ngAfterViewInit
  }

  ngAfterViewInit(): void {
    this.initThreeJSHeroBackground();
    this.initThreeJSHeroVisual(); // Initialize the new visual
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.visualAnimationId) {
      cancelAnimationFrame(this.visualAnimationId);
    }
    if (this.visualRenderer) {
      this.visualRenderer.dispose();
    }
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.particles = undefined;

    this.visualScene = undefined;
    this.visualCamera = undefined;
    this.visualRenderer = undefined;
    this.dodecahedron = undefined;
  }

  private initializeSliders(): void {
    // ... existing code ...
  }

  private initThreeJSHeroBackground(): void {
    const canvas = document.getElementById('landing-three-bg') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found for Three.js background.');
      return;
    }

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    this.renderer.setSize(width, height, false);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    // Particles
    const particleCount = 1000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0xFFD700); // Gold
    const color2 = new THREE.Color(0x1E90FF); // Dodger Blue

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z

      // Color (blend between gold and blue)
      const color = new THREE.Color();
      color.lerpColors(color1, color2, Math.random());
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(particleGeometry, particleMaterial);
    this.scene.add(this.particles);

    // Animation Loop
    const animate = () => {
      if (!this.renderer || !this.scene || !this.camera || !this.particles) return;

      this.particles.rotation.x += 0.0005;
      this.particles.rotation.y += 0.0007;

      this.renderer.render(this.scene, this.camera);
      this.animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      if (!this.camera || !this.renderer) return;
      const newWidth = canvas.clientWidth;
      const newHeight = canvas.clientHeight;
      this.camera.aspect = newWidth / newHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(newWidth, newHeight, false);
    });
  }

  private initThreeJSHeroVisual(): void {
    const canvas = document.getElementById('landing-hero-3d-visual') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element for 3D visual not found.');
      return;
    }

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    this.visualRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    this.visualRenderer.setSize(width, height, false);
    this.visualRenderer.setPixelRatio(window.devicePixelRatio);

    this.visualScene = new THREE.Scene();

    this.visualCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.visualCamera.position.z = 2;

    // Dodecahedron wireframe
    const geometry = new THREE.DodecahedronGeometry(1, 0);
    const edges = new THREE.EdgesGeometry(geometry);
    this.dodecahedron = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.8 }));
    this.visualScene.add(this.dodecahedron);

    const animateVisual = () => {
      if (!this.visualRenderer || !this.visualScene || !this.visualCamera || !this.dodecahedron) return;

      this.dodecahedron.rotation.x += 0.005;
      this.dodecahedron.rotation.y += 0.005;

      this.visualRenderer.render(this.visualScene, this.visualCamera);
      this.visualAnimationId = requestAnimationFrame(animateVisual);
    };

    animateVisual();

    // Handle window resize for visual canvas
    window.addEventListener('resize', () => {
      if (!this.visualCamera || !this.visualRenderer) return;
      const newWidth = canvas.clientWidth;
      const newHeight = canvas.clientHeight;
      this.visualCamera.aspect = newWidth / newHeight;
      this.visualCamera.updateProjectionMatrix();
      this.visualRenderer.setSize(newWidth, newHeight, false);
    });
  }
}