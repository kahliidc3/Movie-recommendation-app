package com.movieai.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

@Configuration
@EnableMongoRepositories(basePackages = "com.movieai.backend.repository")
public class MongoConfig {
    
    @Value("${spring.data.mongodb.uri}")
    private String mongoUri;
    
    @Bean
    public MongoTemplate mongoTemplate() throws Exception {
        return new MongoTemplate(mongoClient(), "movieai");
    }
    
    @Bean
    public MongoClient mongoClient() {
        return MongoClients.create(mongoUri);
    }
} 