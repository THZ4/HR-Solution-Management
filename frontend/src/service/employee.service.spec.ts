import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService],
    });

    service = TestBed.inject(EmployeeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve employees from the API via GET', () => {
    // Dummy data for testing
    const dummyEmployees = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];

    // Subscribe to the observable and check its result
    service.getAllEmployees().subscribe((employees) => {
      expect(employees).toEqual(dummyEmployees);
    });

    // Expect a single request to the URL and respond with the dummy data
    const req = httpTestingController.expectOne(
      'http://localhost:8080/employee/all'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(dummyEmployees);
  });

  it('should retrieve a specific employee from the API via GET by id', () => {
    // Dummy data for testing
    const dummyEmployee = { id: 1, name: 'John Doe' };
    const employeeId = 1;

    // Subscribe to the observable and check its result
    service.getEmployeeById(employeeId).subscribe((employee) => {
      expect(employee).toEqual(dummyEmployee);
    });

    // Expect a single request to the URL with the specific id and respond with the dummy data
    const req = httpTestingController.expectOne(
      `http://localhost:8080/employee/${employeeId}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(dummyEmployee);
  });
});
