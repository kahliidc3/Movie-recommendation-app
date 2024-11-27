package com.movieai.backend.controller;

import com.movieai.backend.dto.request.LoginRequest;
import com.movieai.backend.dto.request.RegisterRequest;
import com.movieai.backend.dto.response.LoginResponse;
import com.movieai.backend.dto.response.RegisterResponse;
import com.movieai.backend.service.AuthService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@Slf4j
public class AuthController {
    
    @Autowired
    private AuthService authService;
    
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest loginRequest) {
        String token = authService.login(loginRequest.getEmail(), loginRequest.getPassword());
        // Implementation
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@Valid @RequestBody RegisterRequest registerRequest) {
        // Implementation
        return ResponseEntity.ok().build();
    }
} 