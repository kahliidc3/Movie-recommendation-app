package com.movieai.backend.repository;

import com.movieai.backend.model.mongodb.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {
    List<Movie> findByGenresContaining(String genre);
    List<Movie> findByYearBetween(Integer startYear, Integer endYear);
    List<Movie> findByRatingGreaterThan(Double rating);
} 