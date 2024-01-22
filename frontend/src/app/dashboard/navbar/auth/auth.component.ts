import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  signInData = {
    email: '',
    password: '',
  };

  loginData = {
    email: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    console.log('Registrierungsdaten:', this.signInData);

    this.http
      .post('http://localhost:8080/api/v1/auth/register', this.signInData)
      .subscribe((response) => {
        console.log('Antwort vom Server:', response);
      });
  }

  loginFormSubmit() {
    console.log('Logindaten:', this.loginData);

    this.http
      .post('http://localhost:8080/api/v1/auth/login', this.loginData)
      .subscribe((response) => {
        console.log('Antwort vom Server:', response);
      });
  }
}
