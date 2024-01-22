import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  employee = {
    id: 0, 
    firstName: '',
    lastName: '',
    position: '',
    department: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Extrahiere die ID aus der URL
    const id = this.route.snapshot.params['id'];

    // Lade Mitarbeiterdaten anhand der ID
    this.loadEmployeeById(id);
  }

  loadEmployeeById(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(
      (data) => {
        this.employee = data;
        console.log(this.employee, 'testedit');
      },
      (error) => {
        console.error('Fehler beim Laden des Mitarbeiters', error);
      }
    );
  }

  saveChanges() {
    // Verwenden Sie die HttpClient-Instanz, um die Mitarbeiterdaten zu aktualisieren
    this.http.put(`http://localhost:8080/employee/${this.employee.id}`, this.employee).subscribe(
      (data) => {
        console.log('Mitarbeiter erfolgreich aktualisiert', data);
        // Hier können Sie weitere Aktionen nach erfolgreicher Aktualisierung durchführen
      },
      (error) => {
        console.error('Fehler beim Aktualisieren des Mitarbeiters', error);
      }
    );
  }
}

