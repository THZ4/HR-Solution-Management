import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url = 'http://localhost:8080/employee/all';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get(this.url);
  }

  getEmployeeById(id: number): Observable<any> {
    const url = `http://localhost:8080/employee/${id}`;
    return this.http.get(url);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/employee/${id}`);
  }
}
