# MovieAI - Movie Recommendation App Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Features](#features)
4. [Technical Stack](#technical-stack)
5. [Setup Instructions](#setup-instructions)
6. [Components](#components)
7. [Backend Services](#backend-services)
8. [Authentication Flow](#authentication-flow)
9. [Styling](#styling)
10. [Recent Updates](#recent-updates)
11. [Contributing](#contributing)
12. [License](#license)

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
- Angular Material: ^18.2.0
- TailwindCSS: ^3.4.0

### Backend Dependencies
- Spring Boot Starter Web
- Spring Data MongoDB
- Spring Data JPA
- Spring Security
- Spring Cloud Circuit Breaker
- JWT Authentication
- OpenAPI Documentation
- Lombok
- MapStruct

## Setup Instructions
### Prerequisites
- Node.js (v18 or higher)
- Java 17 or higher
- MongoDB
- MySQL
- Angular CLI
- Maven

### Frontend Setup
1. Clone the repository
```bash
git clone https://github.com/kahliidc3/Movie-recommendation-app.git
cd frontend/movie-recommendation-app
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
ng serve
```

### Backend Setup
1. Navigate to backend directory
```bash
cd backend
```

2. Configure database properties in `application.properties`
```properties
# MongoDB Configuration
spring.data.mongodb.uri=mongodb://localhost:27017/movieai

# MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/movieai
spring.datasource.username=your_username
spring.datasource.password=your_password
```

3. Build and run
```bash
mvn clean install
mvn spring-boot:run
```

## Features
### Implemented
1. Movie Discovery
   - Featured Movie Banner
   - Movie Categories
   - Horizontal Scrolling Movie Lists
   - Detailed Movie View
   - Search Functionality
   - Filtering Options

2. User Interface
   - Responsive Design
   - Dark Theme
   - Smooth Animations
   - Interactive Movie Cards
   - Loading States
   - Error Handling

3. Authentication
   - User Registration
   - Login/Logout
   - Password Reset
   - JWT Token Management
   - Protected Routes

4. Backend Services
   - Movie Data Management
   - User Authentication
   - MongoDB Integration
   - Security Configuration
   - API Documentation

### Planned
1. AI Recommendations
   - Machine Learning Integration
   - Personalized Suggestions
   - User Preference Learning

2. User Profiles
   - Profile Customization
   - Watch History
   - Favorite Movies
   - User Statistics

3. Social Features
   - User Reviews
   - Ratings
   - Comments
   - Social Sharing

4. Watch Lists
   - Custom Lists
   - Shared Lists
   - Watch Later
   - Recently Viewed

## Components
### Core Components
1. Movie Detail Component
   - Full movie information display
   - Rating and metadata
   - Action buttons (Watch, Share, Favorite)
   - Responsive layout
   - Related movies
   - Cast information

2. Home Component
   - Featured movie banner
   - Category-based movie lists
   - Horizontal scrolling
   - Movie card previews
   - Quick actions
   - Search bar

### Authentication Components
1. Login Component
   - JWT-based authentication
   - Form validation
   - Error handling
   - Remember me functionality
   - Social login options

2. Registration Component
   - User registration flow
   - Form validation
   - Error handling
   - Terms acceptance
   - Email verification

## Backend Services
### Movie Service
- Movie recommendation logic
- Movie metadata management
- Category management
- Search functionality
- Filtering and sorting
- Pagination support

### Authentication Service
- JWT token generation
- User authentication
- Password encryption
- Session management
- Role-based access control
- OAuth2 integration

## Styling
### Design System
1. Colors
   - Primary: #FFD700 (Gold)
   - Dark Theme: #121212
   - Text Primary: #FFFFFF
   - Text Secondary: #B3B3B3
   - Accent Colors: #E50914, #221F1F

2. Components
   - Rounded corners
   - Smooth transitions
   - Hover effects
   - Shadow effects
   - Glass morphism
   - Gradient overlays

3. Responsive Design
   - Mobile-first approach
   - Flexible layouts
   - Adaptive components
   - Breakpoint system
   - Touch-friendly

## Authentication Flow
1. User Registration
   - Email verification
   - Password strength requirements
   - Terms acceptance
   - Profile creation

2. User Login
   - JWT token generation
   - Remember me option
   - Password reset
   - Session management

3. Password Reset
   - Email verification
   - Token-based reset
   - Security measures
   - Password requirements

4. Social Authentication
   - Google OAuth
   - Facebook Login
   - Apple Sign-in
   - Profile merging

## Recent Updates
- Enhanced authentication pages with improved UI/UX
- Added responsive navigation
- Implemented dark theme
- Added loading states
- Improved error handling
- Enhanced movie card component
- Added search functionality
- Implemented user profile management

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
