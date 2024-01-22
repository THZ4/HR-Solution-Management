package com.example.hrsm.hrSolutionmanagement.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/demo")
@RequiredArgsConstructor
public class DemoController {

    @GetMapping("/")
    public ResponseEntity<String> securedEndpoint() {
        return ResponseEntity.ok("Hello, this is a secured endpoint!");
    }

}
