package com.example.hrsm.hrSolutionmanagement.controller;


import com.example.hrsm.hrSolutionmanagement.model.Employee;
import com.example.hrsm.hrSolutionmanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employee/all")
    public ResponseEntity<?> getAllEmployee() {
        Iterable<Employee> allEmployeeInDb = employeeRepository.findAll();
        if (!allEmployeeInDb.iterator().hasNext()) {
            return new ResponseEntity<String>(
                    "Keine Mitarbeiter gefunden",
                    HttpStatus.NOT_FOUND
            );
        }
        return new ResponseEntity<Iterable<Employee>>(
                allEmployeeInDb,
                HttpStatus.OK
        );
    }

    // prettier-ignore
    @PostMapping("/employee")
    public ResponseEntity<Employee> createNewEmployee(@RequestBody Employee newEmployee) {
        // save new employee in db
        employeeRepository.save(newEmployee);
        return new ResponseEntity<Employee>(newEmployee, HttpStatus.CREATED);
    }


    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
        if (!employeeRepository.existsById(id)) {
            return new ResponseEntity<String>(
                    "Mitarbeiter mit der ID " + id + " nicht gefunden",
                    HttpStatus.NOT_FOUND
            );
        }
        employeeRepository.deleteById(id);
        return new ResponseEntity<String>(
                "Mitarbeiter mit der ID " + id + " wurde erfolgreich gelöscht",
                HttpStatus.OK
        );
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long id) {
        // Suchen Sie den Mitarbeiter in der Datenbank anhand der ID
        Optional<Employee> employeeOptional = employeeRepository.findById(id);

        if (employeeOptional.isPresent()) {
            Employee employee = employeeOptional.get();
            return new ResponseEntity<Employee>(employee, HttpStatus.OK);
        } else {
            return new ResponseEntity<String>(
                    "Mitarbeiter mit der ID " + id + " nicht gefunden",
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<Employee> updateEmployee(
            @PathVariable Long id,
            @RequestBody Employee updatedEmployee
    ) {
        Optional<Employee> existingEmployeeOptional = employeeRepository.findById(id);

        if (existingEmployeeOptional.isPresent()) {
            Employee existingEmployee = existingEmployeeOptional.get();
            existingEmployee.setFirstName(updatedEmployee.getFirstName());
            existingEmployee.setLastName(updatedEmployee.getLastName());
            existingEmployee.setPosition(updatedEmployee.getPosition());
            existingEmployee.setDepartment(updatedEmployee.getDepartment());
            existingEmployee.setSalary(updatedEmployee.getSalary());
            employeeRepository.save(existingEmployee);
            return new ResponseEntity<Employee>(existingEmployee, HttpStatus.OK);
        } else {
            System.out.println("Mitarbeiter mit der ID " + id + " nicht gefunden");
            return new ResponseEntity<Employee>(HttpStatus.NOT_FOUND);
        }
    }

}
