package com.example.hrsm.hrSolutionmanagement.service.impl;
import com.example.hrsm.hrSolutionmanagement.configuration.jwt.JwtProvider;
import com.example.hrsm.hrSolutionmanagement.dto.AuthenticationRequestDto;
import com.example.hrsm.hrSolutionmanagement.dto.AuthenticationResponseDto;
import com.example.hrsm.hrSolutionmanagement.dto.RegisterRequestDto;
import com.example.hrsm.hrSolutionmanagement.model.Role;
import com.example.hrsm.hrSolutionmanagement.model.User;
import com.example.hrsm.hrSolutionmanagement.repository.UserRepository;
import com.example.hrsm.hrSolutionmanagement.service.AuthenticationService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository repository;

    private final PasswordEncoder passwordEncoder;

    private final JwtProvider jwtProvider;

    private final AuthenticationManager authenticationManager;

    @Override
    public AuthenticationResponseDto register(RegisterRequestDto request) {
        var user = User.builder()
//                .firstName(request.getFirstName())
//                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();

        repository.save(user);

        var jwt = jwtProvider.generateToken(user);

        return AuthenticationResponseDto.builder()
                .token(jwt)
                .build();
    }

    @Override
    public AuthenticationResponseDto authenticate(AuthenticationRequestDto request) {
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),
                        request.getPassword()));

        var user = repository.findByEmail(request.getEmail()).orElseThrow();
        var jwt = jwtProvider.generateToken(user);

        return AuthenticationResponseDto.builder()
                .token(jwt)
                .build();
    }
}
