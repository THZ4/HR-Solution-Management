package com.example.hrsm.hrSolutionmanagement.controller;

import com.example.hrsm.hrSolutionmanagement.dto.AuthenticationRequestDto;
import com.example.hrsm.hrSolutionmanagement.dto.AuthenticationResponseDto;
import com.example.hrsm.hrSolutionmanagement.dto.RegisterRequestDto;
import com.example.hrsm.hrSolutionmanagement.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;


    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponseDto> register(@RequestBody RegisterRequestDto request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponseDto> login(
            @RequestBody AuthenticationRequestDto request) {
        return ResponseEntity.ok(service.authenticate(request));
    }


}

