import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { EmployeeList } from 'src/ts/employee';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  // getMockData(): Observable<EmployeeList> {
  //   return this.http.get<EmployeeList>('assets/mock-data.json');
  // }
}
