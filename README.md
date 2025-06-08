# MovieAI - Movie Recommendation App Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Features](#features)
4. [Technical Stack](#technical-stack)
5. [Components](#components)
6. [Backend Services](#backend-services)
7. [Authentication Flow](#authentication-flow)
8. [Styling](#styling)

## Project Overview
MovieAI is a modern movie recommendation application that provides personalized movie suggestions using AI algorithms. The application features a sleek, dark-themed UI with smooth animations and responsive design, combining Angular frontend with Spring Boot backend services.

## Architecture
### Frontend
- Framework: Angular (v18.2)
- Architecture: Standalone Components
- State Management: Services with RxJS
- Styling: Custom CSS with CSS Variables
- UI Components: PrimeNG Integration
- Server-Side Rendering: Angular Universal

### Backend
- Framework: Spring Boot 3.2.3
- Database: Dual Database Architecture
  - MongoDB: Movie data and recommendations
  - MySQL: User management and authentication
- Security: JWT-based authentication
- API Documentation: OpenAPI/Swagger
- Circuit Breaker: Resilience4j

## Technical Stack
### Frontend Dependencies
- Angular Core: ^18.2.0
- PrimeNG: ^17.18.11
- PrimeIcons: ^7.0.0
- RxJS: ~7.8.0

### Backend Dependencies
- Spring Boot Starter Web
- Spring Data MongoDB
- Spring Data JPA
- Spring Security
- Spring Cloud Circuit Breaker
- JWT Authentication
- OpenAPI Documentation

## Features
### Implemented
1. Movie Discovery
   - Featured Movie Banner
   - Movie Categories
   - Horizontal Scrolling Movie Lists
   - Detailed Movie View

2. User Interface
   - Responsive Design
   - Dark Theme
   - Smooth Animations
   - Interactive Movie Cards

3. Backend Services
   - Movie Data Management
   - User Authentication
   - MongoDB Integration
   - Security Configuration

### Planned
1. AI Recommendations
2. User Profiles
3. Social Features
4. Watch Lists
5. Rating System

## Components
### Core Components
1. Movie Detail Component
   - Full movie information display
   - Rating and metadata
   - Action buttons (Watch, Share, Favorite)
   - Responsive layout

2. Home Component
   - Featured movie banner
   - Category-based movie lists
   - Horizontal scrolling
   - Movie card previews

### Authentication Components
1. Login Component
   - JWT-based authentication
   - Form validation
   - Error handling
   - Remember me functionality

2. Registration Component
   - User registration flow
   - Form validation
   - Error handling

## Backend Services
### Movie Service
- Movie recommendation logic
- Movie metadata management
- Category management
- Search functionality

### Authentication Service
- JWT token generation
- User authentication
- Password encryption
- Session management

## Styling
### Design System
1. Colors
   - Primary: #FFD700 (Gold)
   - Dark Theme: #121212
   - Text Primary: #FFFFFF
   - Text Secondary: #B3B3B3

2. Components
   - Rounded corners
   - Smooth transitions
   - Hover effects
   - Shadow effects

3. Responsive Design
   - Mobile-first approach
   - Flexible layouts
   - Adaptive components

## Authentication Flow
1. User Registration
2. User Login
3. Password Reset
4. Social Authentication
