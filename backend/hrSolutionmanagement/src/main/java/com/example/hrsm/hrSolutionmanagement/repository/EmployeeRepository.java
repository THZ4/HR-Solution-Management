package com.example.hrsm.hrSolutionmanagement.repository;

import com.example.hrsm.hrSolutionmanagement.model.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
