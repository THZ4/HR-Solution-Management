import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-event-news',
  templateUrl: './event-news.component.html',
  styleUrls: ['./event-news.component.scss'],
})
export class EventNewsComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        console.log(data, 'TestArray');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
