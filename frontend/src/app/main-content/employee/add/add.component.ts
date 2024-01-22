import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  
  constructor(private http: HttpClient) {}

  saveNewEmployee(formData: any): void {
    this.http.post('http://localhost:8080/employee', formData).subscribe(
      (response) => {
        console.log('Daten erfolgreich gesendet:', response);
      },
      (error) => {
        console.error('Fehler beim Senden der Daten:', error);
      }
    );
  }
}
