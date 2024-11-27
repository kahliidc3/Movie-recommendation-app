package com.movieai.backend.controller;

import com.movieai.backend.model.mongodb.Movie;
import com.movieai.backend.service.MovieService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@Slf4j
public class MovieController {
    
    @Autowired
    private MovieService movieService;
    
    @GetMapping("/recommended")
    public ResponseEntity<List<Movie>> getRecommendedMovies() {
        List<Movie> movies = movieService.getRecommendedMovies("userId"); // Get userId from security context
        return ResponseEntity.ok(movies);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieDetails(@PathVariable String id) {
        Movie movie = movieService.getMovieDetails(id);
        return ResponseEntity.ok(movie);
    }
} 