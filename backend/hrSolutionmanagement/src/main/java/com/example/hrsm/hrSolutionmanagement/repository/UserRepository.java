package com.example.hrsm.hrSolutionmanagement.repository;

import java.util.Optional;

import com.example.hrsm.hrSolutionmanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);
}
