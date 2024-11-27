package com.movieai.backend.service;

import com.movieai.backend.model.mysql.User;
import com.movieai.backend.repository.UserRepository;
import com.movieai.backend.config.JwtConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class AuthService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtConfig jwtConfig;
    
    public String login(String email, String password) {
        // Implementation
        return "jwt_token";
    }
    
    public User register(User user) {
        // Implementation
        return user;
    }
} 