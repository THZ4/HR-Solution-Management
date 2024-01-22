package com.example.hrsm.hrSolutionmanagement.service;

import com.example.hrsm.hrSolutionmanagement.dto.AuthenticationRequestDto;
import com.example.hrsm.hrSolutionmanagement.dto.AuthenticationResponseDto;
import com.example.hrsm.hrSolutionmanagement.dto.RegisterRequestDto;

public interface AuthenticationService {

    public AuthenticationResponseDto register(RegisterRequestDto request);

    public AuthenticationResponseDto authenticate(AuthenticationRequestDto request);
}