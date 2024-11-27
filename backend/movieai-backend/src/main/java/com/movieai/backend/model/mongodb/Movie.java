package com.movieai.backend.model.mongodb;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "movies")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Movie {
    
    @Id
    private String id;
    
    private String title;
    private String description;
    private Integer year;
    private Double rating;
    private List<String> genres;
    private String posterUrl;
    private String backdropUrl;
} 